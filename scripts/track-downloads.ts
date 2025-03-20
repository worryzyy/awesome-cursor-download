import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

/**
 * Cursor AI 下载链接追踪器
 * 
 * 此脚本自动获取 Cursor AI 编辑器的最新下载链接，
 * 并维护一个版本历史记录，保存在 cursor-version-archive.json 文件中。
 * 同时会更新 README.md 文件，在其中生成下载链接表格。
 */

// Get dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface PlatformInfo {
  platforms: string[];
  readableNames: string[];
  section: string;
}

interface PlatformMap {
  [key: string]: PlatformInfo;
}

interface VersionInfo {
  url: string;
  version: string;
}

interface ResultMap {
  [os: string]: {
    [platform: string]: VersionInfo;
  };
}

interface DownloadResponse {
  downloadUrl: string;
}

// Interface for version history JSON
interface VersionHistoryEntry {
  date: string;
  platforms: {
    [platform: string]: {
      url: string;
      checksum: string;
    };
  };
}

interface VersionHistory {
  [version: string]: VersionHistoryEntry;
}

const PLATFORMS: PlatformMap = {
  windows: {
    platforms: ['win32-x64', 'win32-arm64'],
    readableNames: ['win32-x64', 'win32-arm64'],
    section: 'Windows Installer'
  },
  mac: {
    platforms: ['darwin-universal', 'darwin-x64', 'darwin-arm64'],
    readableNames: ['darwin-universal', 'darwin-x64', 'darwin-arm64'],
    section: 'Mac Installer'
  },
  linux: {
    platforms: ['linux-x64', 'linux-arm64'],
    readableNames: ['linux-x64', 'linux-arm64'],
    section: 'Linux Installer'
  }
};

/**
 * Extract version from URL or filename
 */
async function extractVersion(url: string): Promise<string> {
  // For Windows
  const winMatch = url.match(/CursorUserSetup-[^-]+-([0-9.]+)\.exe/);
  if (winMatch && winMatch[1]) return winMatch[1];
  
  // For Linux
  const linuxMatch = url.match(/Cursor-([0-9.]+)-/);
  if (linuxMatch && linuxMatch[1]) return linuxMatch[1];
  
  // For Mac - 尝试匹配 darwin/universal/Cursor-darwin-universal-version.dmg 模式
  const macVersionMatch = url.match(/darwin\/[^\/]+\/Cursor-darwin-[^-]+-([0-9.]+)\.dmg/);
  if (macVersionMatch && macVersionMatch[1]) {
    return macVersionMatch[1];
  }
  
  // 如果是Mac平台但未找到版本号，尝试从构建哈希获取
  if (url.includes('/darwin/')) {
    // 从URL中提取构建哈希
  const buildHashMatch = url.match(/production\/([a-f0-9]+)\//);
  if (buildHashMatch && buildHashMatch[1]) {
      const buildHash = buildHashMatch[1];
      
      // 首先检查其他平台的版本
    const historyPath = path.join(process.cwd(), 'cursor-version-archive.json');
    if (fs.existsSync(historyPath)) {
      try {
        const jsonData = fs.readFileSync(historyPath, 'utf8');
        const history = JSON.parse(jsonData) as VersionHistory;
        
          // 查找具有相同构建哈希且已知版本的条目
          for (const [version, entry] of Object.entries(history)) {
            if (version !== 'Unknown') {
              for (const platformInfo of Object.values(entry.platforms)) {
                if (platformInfo.url.includes(buildHash)) {
                  return version;
                }
              }
            }
          }
        } catch (error) {
          // 出错时继续后续处理
        }
      }
      
      // 如果找不到匹配的哈希，尝试简单的版本模式匹配
      // 由于异步操作复杂性，不再动态获取其他平台版本
    }
  }
  
  // 对所有平台的最后尝试：查找版本模式
  const versionMatch = url.match(/[0-9]+\.[0-9]+\.[0-9]+/);
  return versionMatch ? versionMatch[0] : 'Unknown';
}

/**
 * Format date as YYYY-MM-DD
 */
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Fetch latest download URL for a platform
 */
async function fetchLatestDownloadUrl(platform: string): Promise<string | null> {
  try {
    // Simple fetch without complex retry logic
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const response = await fetch(`https://www.cursor.com/api/download?platform=${platform}&releaseTrack=latest`, {
      headers: {
        'User-Agent': 'Cursor-Version-Checker',
        'Cache-Control': 'no-cache',
      },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json() as DownloadResponse;
    return data.downloadUrl;
  } catch (error) {
    console.error(`Error fetching download URL for platform ${platform}:`, error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

/**
 * Read version history from JSON file
 */
function readVersionHistory(): VersionHistory {
  const historyPath = path.join(process.cwd(), 'cursor-version-archive.json');
  if (fs.existsSync(historyPath)) {
    try {
      const jsonData = fs.readFileSync(historyPath, 'utf8');
      return JSON.parse(jsonData) as VersionHistory;
    } catch (error) {
      console.error('Error reading version history:', error instanceof Error ? error.message : 'Unknown error');
      return {};
    }
  } else {
    console.log('cursor-version-archive.json not found, creating a new file');
    return {};
  }
}

/**
 * Save version history to JSON file
 */
function saveVersionHistory(history: VersionHistory): void {
  if (!history || typeof history !== 'object') {
    console.error('Invalid version history object provided');
    return;
  }
  
  const historyPath = path.join(process.cwd(), 'cursor-version-archive.json');
  try {
    fs.writeFileSync(historyPath, JSON.stringify(history, null, 2), 'utf8');
    console.log(`Version history saved to ${historyPath}`);
  } catch (error) {
    console.error('Error saving version history:', error instanceof Error ? error.message : 'Unknown error');
  }
}

/**
 * Update README files with the latest version information
 */
function updateReadmeWithLinks(history: VersionHistory): void {
  if (!history || Object.keys(history).length === 0) {
    console.error('No version history available to update README');
    return;
  }
  
  // 文件路径
  const rootPath = process.cwd();
  const englishReadmePath = path.join(rootPath, 'README.md');
  const chineseReadmePath = path.join(rootPath, 'README_CN.md');
  
  // Sort versions by date (newest first)
  const versions = Object.keys(history);
  const versionsWithDates = versions.map(version => ({
    version,
    date: history[version].date,
    platforms: history[version].platforms
  }));
  
  const sortedVersions = [...versionsWithDates].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
  
  // 创建英文版 README 内容
  let englishContent = `# Cursor AI Downloads Tracker  (Node.js)

<div align="center">
 <p align="center">
  <a href="./README.md"><img alt="README in English" src="https://img.shields.io/badge/English-d9d9d9"></a>
  <a href="./README_CN.md"><img alt="简体中文" src="https://img.shields.io/badge/简体中文-d9d9d9"></a>
</p>
</div>

This project is a download link tracker for Cursor AI, implemented in Node.js. It collects and maintains official download links for all versions of the Cursor AI editor and displays them in an organized manner in the README.md file.

## Features

- Automatically fetches latest download links for Cursor AI editor across different platforms (Windows, Mac, Linux) and architectures (x64, arm64, etc.)
- Maintains a history of download links for all versions
- Automatically updates the download link tables

## Usage

### Install Dependencies

\`\`\`bash
npm install
\`\`\`

### Compile

\`\`\`bash
npm run build
\`\`\`

### Run

\`\`\`bash
npm start
\`\`\`

Or

\`\`\`bash
npm run update
\`\`\`

## File Description

- \`scripts/track-downloads.ts\`: Main script responsible for fetching latest links and updating history
- \`scripts/migrate-history.ts\`: Helper script for migrating version history
- \`cursor-version-archive.json\`: Stores download link history for all versions
- \`README.md\`: Contains tables of download links

## Cursor AI Download Links

Below are the official download links for various versions of Cursor AI, presented in multiple views for your convenience.

## Latest Version Card

<div align="center">
<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
`;

  // 创建中文版 README 内容
  let chineseContent = `# Cursor AI 下载链接追踪器 (Node.js 版)

<div align="center">
<p align="center">
  <a href="./README.md"><img alt="README in English" src="https://img.shields.io/badge/English-d9d9d9"></a>
  <a href="./README_CN.md"><img alt="简体中文" src="https://img.shields.io/badge/简体中文-d9d9d9"></a>
</p>
</div>


这个项目是 Cursor AI 下载链接的追踪器，使用 Node.js 实现。它会收集和维护 Cursor AI 编辑器的各个版本的官方下载链接，并将这些链接整理后显示在 README.md 文件中。

## 功能

- 自动获取 Cursor AI 编辑器在不同平台（Windows、Mac、Linux）和架构（x64、arm64 等）的最新版本下载链接
- 维护所有版本的下载链接历史记录
- 自动更新包含下载链接的表格

## 使用方法

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 编译

\`\`\`bash
npm run build
\`\`\`

### 运行

\`\`\`bash
npm start
\`\`\`

或者

\`\`\`bash
npm run update
\`\`\`

## 文件说明

- \`scripts/track-downloads.ts\`: 主要脚本，负责获取最新链接并更新历史记录
- \`scripts/migrate-history.ts\`: 用于迁移版本历史记录的辅助脚本
- \`cursor-version-archive.json\`: 存储所有版本的下载链接历史
- \`README.md\`: 包含所有版本下载链接的表格

## Cursor AI 下载链接

下面提供了 Cursor AI 各版本的官方下载链接，多种视图方便您选择合适的版本。

## 最新版本卡片

<div align="center">
<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
`;

  // 最新版本卡片 - 两种语言
  const latestVersion = sortedVersions[0];
  if (latestVersion) {
    // 英文版卡片
    englishContent += `
<div style="background-color: #f8f9fa; border-radius: 10px; padding: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <h3 style="text-align: center; margin-top: 0;">🚀 Cursor ${latestVersion.version}</h3>
  <p style="text-align: center; color: #666; margin-bottom: 15px;">Release Date: ${latestVersion.date}</p>
  <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
    <div style="text-align: center; margin: 5px;">
      <h4 style="margin: 5px 0;"><img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows"></h4>
      ${latestVersion.platforms['windows'] ? `<a href="${latestVersion.platforms['windows'].url}"><img src="https://img.shields.io/badge/x64-Download-blue?style=flat-square" alt="Windows x64"></a><br>` : ''}
      ${latestVersion.platforms['windows_arm64'] ? `<a href="${latestVersion.platforms['windows_arm64'].url}"><img src="https://img.shields.io/badge/ARM64-Download-blue?style=flat-square" alt="Windows ARM64"></a>` : ''}
    </div>
    <div style="text-align: center; margin: 5px;">
      <h4 style="margin: 5px 0;"><img src="https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS"></h4>
      ${latestVersion.platforms['mac'] ? `<a href="${latestVersion.platforms['mac'].url}"><img src="https://img.shields.io/badge/Universal-Download-black?style=flat-square" alt="macOS Universal"></a><br>` : ''}
      ${latestVersion.platforms['mac_intel'] ? `<a href="${latestVersion.platforms['mac_intel'].url}"><img src="https://img.shields.io/badge/Intel-Download-black?style=flat-square" alt="macOS Intel"></a><br>` : ''}
      ${latestVersion.platforms['mac_arm64'] ? `<a href="${latestVersion.platforms['mac_arm64'].url}"><img src="https://img.shields.io/badge/M_Chip-Download-black?style=flat-square" alt="macOS M1/M2/M3"></a>` : ''}
    </div>
    <div style="text-align: center; margin: 5px;">
      <h4 style="margin: 5px 0;"><img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux"></h4>
      ${latestVersion.platforms['linux'] ? `<a href="${latestVersion.platforms['linux'].url}"><img src="https://img.shields.io/badge/x64-Download-yellow?style=flat-square" alt="Linux x64"></a><br>` : ''}
      ${latestVersion.platforms['linux_arm64'] ? `<a href="${latestVersion.platforms['linux_arm64'].url}"><img src="https://img.shields.io/badge/ARM64-Download-yellow?style=flat-square" alt="Linux ARM64"></a>` : ''}
    </div>
  </div>
</div>`;

    // 中文版卡片
    chineseContent += `
<div style="background-color: #f8f9fa; border-radius: 10px; padding: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <h3 style="text-align: center; margin-top: 0;">🚀 Cursor ${latestVersion.version}</h3>
  <p style="text-align: center; color: #666; margin-bottom: 15px;">发布日期: ${latestVersion.date}</p>
  <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
    <div style="text-align: center; margin: 5px;">
      <h4 style="margin: 5px 0;"><img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows"></h4>
      ${latestVersion.platforms['windows'] ? `<a href="${latestVersion.platforms['windows'].url}"><img src="https://img.shields.io/badge/x64-下载-blue?style=flat-square" alt="Windows x64"></a><br>` : ''}
      ${latestVersion.platforms['windows_arm64'] ? `<a href="${latestVersion.platforms['windows_arm64'].url}"><img src="https://img.shields.io/badge/ARM64-下载-blue?style=flat-square" alt="Windows ARM64"></a>` : ''}
    </div>
    <div style="text-align: center; margin: 5px;">
      <h4 style="margin: 5px 0;"><img src="https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS"></h4>
      ${latestVersion.platforms['mac'] ? `<a href="${latestVersion.platforms['mac'].url}"><img src="https://img.shields.io/badge/通用-下载-black?style=flat-square" alt="macOS Universal"></a><br>` : ''}
      ${latestVersion.platforms['mac_intel'] ? `<a href="${latestVersion.platforms['mac_intel'].url}"><img src="https://img.shields.io/badge/Intel-下载-black?style=flat-square" alt="macOS Intel"></a><br>` : ''}
      ${latestVersion.platforms['mac_arm64'] ? `<a href="${latestVersion.platforms['mac_arm64'].url}"><img src="https://img.shields.io/badge/M芯片-下载-black?style=flat-square" alt="macOS M1/M2/M3"></a>` : ''}
    </div>
    <div style="text-align: center; margin: 5px;">
      <h4 style="margin: 5px 0;"><img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux"></h4>
      ${latestVersion.platforms['linux'] ? `<a href="${latestVersion.platforms['linux'].url}"><img src="https://img.shields.io/badge/x64-下载-yellow?style=flat-square" alt="Linux x64"></a><br>` : ''}
      ${latestVersion.platforms['linux_arm64'] ? `<a href="${latestVersion.platforms['linux_arm64'].url}"><img src="https://img.shields.io/badge/ARM64-下载-yellow?style=flat-square" alt="Linux ARM64"></a>` : ''}
    </div>
  </div>
</div>`;
  }

  // 表格头部 - 两种语言
  englishContent += `
</div>
</div>

## All Versions Download Table

<div align="center">
<table style="width: 100%; border-collapse: collapse;">
  <tr style="background-color: #f8f9fa;">
    <th style="text-align: center; vertical-align: middle; padding: 10px;">Version</th>
    <th style="text-align: center; vertical-align: middle; padding: 10px;">Date</th>
    <th style="text-align: center; vertical-align: middle; padding: 10px;">Windows</th>
    <th style="text-align: center; vertical-align: middle; padding: 10px;">macOS</th>
    <th style="text-align: center; vertical-align: middle; padding: 10px;">Linux</th>
  </tr>
`;

  chineseContent += `
</div>
</div>

## 所有版本下载表格

<div align="center">
<table style="width: 100%; border-collapse: collapse;">
  <tr style="background-color: #f8f9fa;">
    <th style="text-align: center; vertical-align: middle; padding: 10px;">版本</th>
    <th style="text-align: center; vertical-align: middle; padding: 10px;">日期</th>
    <th style="text-align: center; vertical-align: middle; padding: 10px;">Windows</th>
    <th style="text-align: center; vertical-align: middle; padding: 10px;">macOS</th>
    <th style="text-align: center; vertical-align: middle; padding: 10px;">Linux</th>
  </tr>
`;
  
  // 表格内容 - 英文
  for (const entry of sortedVersions) {
    let windowsButtons = '';
    let macButtons = '';
    let linuxButtons = '';
    
    // Windows buttons
    if (entry.platforms['windows']) {
      windowsButtons += `<a href="${entry.platforms['windows'].url}"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> `;
    }
    if (entry.platforms['windows_arm64']) {
      windowsButtons += `<a href="${entry.platforms['windows_arm64'].url}"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a>`;
    }
    windowsButtons = windowsButtons.trim() || 'N/A';
    
    // Mac buttons
    if (entry.platforms['mac']) {
      macButtons += `<a href="${entry.platforms['mac'].url}"><img src="https://img.shields.io/badge/Universal-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> `;
    }
    if (entry.platforms['mac_intel']) {
      macButtons += `<a href="${entry.platforms['mac_intel'].url}"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> `;
    }
    if (entry.platforms['mac_arm64']) {
      macButtons += `<a href="${entry.platforms['mac_arm64'].url}"><img src="https://img.shields.io/badge/M_Chip-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>`;
    }
    macButtons = macButtons.trim() || 'N/A';
    
    // Linux buttons
    if (entry.platforms['linux']) {
      linuxButtons += `<a href="${entry.platforms['linux'].url}"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> `;
    }
    if (entry.platforms['linux_arm64']) {
      linuxButtons += `<a href="${entry.platforms['linux_arm64'].url}"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a>`;
    }
    linuxButtons = linuxButtons.trim() || 'N/A';
    
    // 英文表格行
    englishContent += `  <tr${entry === sortedVersions[0] ? ' style="background-color: #f0f8ff;"' : ''}>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">${entry.version}</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">${entry.date}</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">${windowsButtons}</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">${macButtons}</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">${linuxButtons}</td>
    </tr>\n`;
  }

  // 表格内容 - 中文
  for (const entry of sortedVersions) {
    let windowsButtons = '';
    let macButtons = '';
    let linuxButtons = '';
    
    // Windows buttons
    if (entry.platforms['windows']) {
      windowsButtons += `<a href="${entry.platforms['windows'].url}"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> `;
    }
    if (entry.platforms['windows_arm64']) {
      windowsButtons += `<a href="${entry.platforms['windows_arm64'].url}"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a>`;
    }
    windowsButtons = windowsButtons.trim() || 'N/A';
    
    // Mac buttons
    if (entry.platforms['mac']) {
      macButtons += `<a href="${entry.platforms['mac'].url}"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> `;
    }
    if (entry.platforms['mac_intel']) {
      macButtons += `<a href="${entry.platforms['mac_intel'].url}"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> `;
    }
    if (entry.platforms['mac_arm64']) {
      macButtons += `<a href="${entry.platforms['mac_arm64'].url}"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>`;
    }
    macButtons = macButtons.trim() || 'N/A';
    
    // Linux buttons
    if (entry.platforms['linux']) {
      linuxButtons += `<a href="${entry.platforms['linux'].url}"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> `;
    }
    if (entry.platforms['linux_arm64']) {
      linuxButtons += `<a href="${entry.platforms['linux_arm64'].url}"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a>`;
    }
    linuxButtons = linuxButtons.trim() || 'N/A';
    
    // 中文表格行
    chineseContent += `  <tr${entry === sortedVersions[0] ? ' style="background-color: #f0f8ff;"' : ''}>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">${entry.version}</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">${entry.date}</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">${windowsButtons}</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">${macButtons}</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">${linuxButtons}</td>
    </tr>\n`;
  }

  // 表格尾部
  englishContent += `</table>
</div>

## Detailed Version Card View

`;
  
  chineseContent += `</table>
</div>

## 详细版本卡片视图

`;

  // 卡片视图 - 英文
  for (const entry of sortedVersions) {
    englishContent += `<details>
<summary><b>Version ${entry.version}</b> (${entry.date})</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor ${entry.version} Download Links</h3>

#### Windows
`;
    if (entry.platforms['windows']) {
      englishContent += `<a href="${entry.platforms['windows'].url}"><img src="https://img.shields.io/badge/Windows_x64-Download-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>\n`;
    }
    if (entry.platforms['windows_arm64']) {
      englishContent += `<a href="${entry.platforms['windows_arm64'].url}"><img src="https://img.shields.io/badge/Windows_ARM64-Download-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>\n`;
    }

    englishContent += `\n#### macOS
`;
    if (entry.platforms['mac']) {
      englishContent += `<a href="${entry.platforms['mac'].url}"><img src="https://img.shields.io/badge/macOS_Universal-Download-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>\n`;
    }
    if (entry.platforms['mac_intel']) {
      englishContent += `<a href="${entry.platforms['mac_intel'].url}"><img src="https://img.shields.io/badge/macOS_Intel-Download-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>\n`;
    }
    if (entry.platforms['mac_arm64']) {
      englishContent += `<a href="${entry.platforms['mac_arm64'].url}"><img src="https://img.shields.io/badge/macOS_M_Chip-Download-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>\n`;
    }

    englishContent += `\n#### Linux
`;
    if (entry.platforms['linux']) {
      englishContent += `<a href="${entry.platforms['linux'].url}"><img src="https://img.shields.io/badge/Linux_x64-Download-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>\n`;
    }
    if (entry.platforms['linux_arm64']) {
      englishContent += `<a href="${entry.platforms['linux_arm64'].url}"><img src="https://img.shields.io/badge/Linux_ARM64-Download-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>\n`;
    }

    englishContent += `
</div>
</details>

`;
  }

  // 卡片视图 - 中文
  for (const entry of sortedVersions) {
    chineseContent += `<details>
<summary><b>版本 ${entry.version}</b> (${entry.date})</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor ${entry.version} 下载链接</h3>

#### Windows
`;
    if (entry.platforms['windows']) {
      chineseContent += `<a href="${entry.platforms['windows'].url}"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>\n`;
    }
    if (entry.platforms['windows_arm64']) {
      chineseContent += `<a href="${entry.platforms['windows_arm64'].url}"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>\n`;
    }

    chineseContent += `\n#### macOS
`;
    if (entry.platforms['mac']) {
      chineseContent += `<a href="${entry.platforms['mac'].url}"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>\n`;
    }
    if (entry.platforms['mac_intel']) {
      chineseContent += `<a href="${entry.platforms['mac_intel'].url}"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>\n`;
    }
    if (entry.platforms['mac_arm64']) {
      chineseContent += `<a href="${entry.platforms['mac_arm64'].url}"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>\n`;
    }

    chineseContent += `\n#### Linux
`;
    if (entry.platforms['linux']) {
      chineseContent += `<a href="${entry.platforms['linux'].url}"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>\n`;
    }
    if (entry.platforms['linux_arm64']) {
      chineseContent += `<a href="${entry.platforms['linux_arm64'].url}"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>\n`;
    }

    chineseContent += `
</div>
</details>

`;
  }

  // 更新文件内容
  fs.writeFileSync(englishReadmePath, englishContent, 'utf8');
  fs.writeFileSync(chineseReadmePath, chineseContent, 'utf8');
  console.log('README.md and README_CN.md have been updated with latest version information');
}

/**
 * Main function to gather all download URLs and update files
 */
async function main() {
  console.log('Starting Cursor download link updater...');
  
  // 检查是否有强制更新参数
  const forceUpdate = process.argv.includes('--force');
  
  // Read existing version history
  const history = readVersionHistory();
  
  // 处理当前历史记录中的 Unknown 版本
  await processUnknownVersions(history);
  
  // Track new versions found
  const results: ResultMap = {
    windows: {},
    mac: {},
    linux: {}
  };
  
  // Current date for new entries
  const today = formatDate(new Date());
  
  // Fetch latest download URLs for all platforms
  console.log('Fetching latest download URLs...');
  
  // 获取所有平台的下载链接
  for (const [os, info] of Object.entries(PLATFORMS)) {
    for (const platform of info.platforms) {
      console.log(`Fetching download URL for ${platform}...`);
      const url = await fetchLatestDownloadUrl(platform);
      
      if (url) {
        const version = await extractVersion(url);
        console.log(`Found version ${version} for ${platform}: ${url}`);
        results[os as keyof ResultMap][platform] = { url, version };
      } else {
        console.log(`Failed to fetch download URL for ${platform}`);
      }
    }
  }
  
  // 预处理结果 - 尝试统一版本号
  await unifyVersionNumbers(results);
  
  // Check for new versions and update history
  let newVersionsFound = false;
  
  // 平台映射表，从旧平台名称映射到新格式
  const platformMapping: Record<string, string> = {
    'win32-x64': 'windows',
    'win32-arm64': 'windows_arm64',
    'darwin-universal': 'mac',
    'darwin-x64': 'mac_intel',
    'darwin-arm64': 'mac_arm64',
    'linux-x64': 'linux',
    'linux-arm64': 'linux_arm64'
  };
  
  // Process each OS and platform
  for (const [os, platforms] of Object.entries(results)) {
    for (const [platform, info] of Object.entries(platforms)) {
      const { url, version } = info;
      
      // 转换平台名称到新格式
      const newPlatformName = platformMapping[platform] || platform;
      
      // Check if we already have this version
      let versionEntry = history[version];
      
      if (!versionEntry) {
        // New version found
        console.log(`Adding new version ${version} to history`);
        versionEntry = {
          date: today,
          platforms: {}
        };
        history[version] = versionEntry;
        newVersionsFound = true;
      }
      
      // 构建哈希用于checksum值
      const buildHash = url.match(/production\/([a-f0-9]+)\//)?.[1] || '';
      
      // Update or add the platform URL
      if (!versionEntry.platforms[newPlatformName] || versionEntry.platforms[newPlatformName].url !== url) {
        console.log(`Updating ${newPlatformName} URL for version ${version}`);
        versionEntry.platforms[newPlatformName] = { 
          url, 
          checksum: buildHash
        };
        newVersionsFound = true;
      }
    }
  }
  
  // Save updates if any new versions found
  if (newVersionsFound) {
    console.log('Saving updated version history...');
    saveVersionHistory(history);
    
    console.log('Updating README with new download links...');
    updateReadmeWithLinks(history);
  } else if (forceUpdate) {
    console.log('No new versions found, but force updating README...');
    updateReadmeWithLinks(history);
  } else {
    console.log('No new versions found, no updates needed');
  }
  
  console.log('Done!');
}

/**
 * 处理历史记录中的未知版本条目
 */
async function processUnknownVersions(history: VersionHistory): Promise<void> {
  const unknownVersions = Object.keys(history).filter(version => version === 'Unknown');
  if (unknownVersions.length === 0) return;
  
  console.log('Found Unknown version entries, attempting to merge...');
  
  // 当前日期用于新条目
  const today = formatDate(new Date());
  
  // 首先尝试将 Unknown 版本的平台链接合并到相同构建哈希的已知版本中
  for (const unknownVersion of unknownVersions) {
    // 从第一个平台URL获取构建哈希
    const platformUrls = Object.values(history[unknownVersion].platforms).map(platform => platform.url);
    if (platformUrls.length === 0) continue;
    
    const buildHash = platformUrls[0].match(/production\/([a-f0-9]+)\//)?.[1];
    if (!buildHash) continue;
    
    // 查找具有相同构建哈希的非Unknown版本
    const targetVersion = Object.keys(history).find(version => 
      version !== 'Unknown' && 
      Object.values(history[version].platforms).some(platform => platform.url.includes(buildHash))
    );
    
    if (targetVersion) {
      console.log(`Merging Unknown version with build hash ${buildHash} into version ${targetVersion}`);
      // 合并平台链接
      for (const [platform, platformInfo] of Object.entries(history[unknownVersion].platforms)) {
        if (!history[targetVersion].platforms[platform]) {
          history[targetVersion].platforms[platform] = platformInfo;
          console.log(`- Added ${platform} to version ${targetVersion}`);
        }
      }
    } else {
      // 如果没有找到匹配的版本，尝试从URL提取版本
      for (const url of platformUrls) {
        const extractedVersion = await extractVersion(url);
        if (extractedVersion !== 'Unknown') {
          console.log(`Extracted version ${extractedVersion} from Unknown entry URL`);
          // 创建新版本条目并合并平台
          if (!history[extractedVersion]) {
            history[extractedVersion] = {
              date: today,
              platforms: {}
            };
          }
          // 将Unknown版本的平台链接复制到提取的版本中
          for (const [platform, platformInfo] of Object.entries(history[unknownVersion].platforms)) {
            if (!history[extractedVersion].platforms[platform]) {
              history[extractedVersion].platforms[platform] = platformInfo;
            }
          }
          break;
        }
      }
    }
  }
  
  // 再次过滤，确保我们只删除仍然标记为 Unknown 的条目
  const remainingUnknown = Object.keys(history).filter(version => version === 'Unknown');
  if (remainingUnknown.length > 0) {
    console.log(`Removing ${remainingUnknown.length} unresolved Unknown version entries`);
    for (const unknownVersion of remainingUnknown) {
      delete history[unknownVersion];
    }
  }
}

/**
 * 尝试统一结果中的版本号
 */
async function unifyVersionNumbers(results: ResultMap): Promise<void> {
  // 首先收集所有非Unknown版本
  const nonUnknownVersions = new Set<string>();
  
  for (const platforms of Object.values(results)) {
    for (const info of Object.values(platforms)) {
      if (info.version !== 'Unknown') {
        nonUnknownVersions.add(info.version);
      }
    }
  }
  
  // 如果只有一个非Unknown版本，将所有Unknown版本设置为该版本
  if (nonUnknownVersions.size === 1) {
    const version = Array.from(nonUnknownVersions)[0];
    console.log(`Using consistent version ${version} for all platforms`);
    
    for (const platforms of Object.values(results)) {
      for (const info of Object.values(platforms)) {
        if (info.version === 'Unknown') {
          info.version = version;
        }
      }
    }
  }
  // 如果有多个非Unknown版本，尝试基于构建哈希统一
  else if (nonUnknownVersions.size > 1) {
    console.log(`Multiple version numbers found: ${Array.from(nonUnknownVersions).join(', ')}`);
    console.log('Attempting to unify based on build hash...');
    
    // 按构建哈希分组
    const hashGroups: Record<string, {version: string, count: number}> = {};
    
    // 统计每个哈希对应的版本
    for (const platforms of Object.values(results)) {
      for (const info of Object.values(platforms)) {
        const hashMatch = info.url.match(/production\/([a-f0-9]+)\//);
        if (hashMatch && hashMatch[1] && info.version !== 'Unknown') {
          const hash = hashMatch[1];
          if (!hashGroups[hash]) {
            hashGroups[hash] = { version: info.version, count: 1 };
          } else if (hashGroups[hash].version !== info.version) {
            // 如果同一哈希有不同版本，增加计数并选择更频繁的
            hashGroups[hash].count++;
            // 这里可以添加更多逻辑来决定保留哪个版本
          }
        }
      }
    }
    
    // 应用统一版本
    for (const platforms of Object.values(results)) {
      for (const info of Object.values(platforms)) {
        if (info.version === 'Unknown') {
          const hashMatch = info.url.match(/production\/([a-f0-9]+)\//);
          if (hashMatch && hashMatch[1] && hashGroups[hashMatch[1]]) {
            info.version = hashGroups[hashMatch[1]].version;
            console.log(`Updated Unknown version to ${info.version} based on build hash ${hashMatch[1]}`);
          }
        }
      }
    }
  }
}

// Execute main function
main().catch(error => {
  console.error('Unhandled error:', error instanceof Error ? error.message : 'Unknown error');
  process.exit(1);
}); 