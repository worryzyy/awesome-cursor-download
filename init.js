#!/usr/bin/env node

/**
 * 初始化脚本 - 帮助用户设置和运行项目
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// 获取 __dirname (ES模块中需要)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 定义颜色输出
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

console.log(`${colors.bright}${colors.blue}=== Cursor AI 下载链接追踪器 (Node.js版) ====${colors.reset}\n`);

// 检查是否已安装依赖
if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
  console.log(`${colors.yellow}正在安装依赖...${colors.reset}`);
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log(`${colors.green}依赖安装成功!${colors.reset}\n`);
  } catch (error) {
    console.error(`${colors.red}依赖安装失败!${colors.reset}`);
    console.error(`${colors.red}错误: ${error.message}${colors.reset}`);
    process.exit(1);
  }
} else {
  console.log(`${colors.green}依赖已安装.${colors.reset}\n`);
}

// 构建项目
console.log(`${colors.yellow}正在构建项目...${colors.reset}`);
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log(`${colors.green}项目构建成功!${colors.reset}\n`);
} catch (error) {
  console.error(`${colors.red}项目构建失败!${colors.reset}`);
  console.error(`${colors.red}错误: ${error.message}${colors.reset}`);
  process.exit(1);
}

// 复制历史记录文件(如果存在)
const sourceHistoryPath = path.join(__dirname, '..', 'cursor-version-archive.json');
const targetHistoryPath = path.join(__dirname, 'cursor-version-archive.json');

if (fs.existsSync(sourceHistoryPath) && !fs.existsSync(targetHistoryPath)) {
  console.log(`${colors.yellow}正在迁移版本历史记录...${colors.reset}`);
  try {
    fs.copyFileSync(sourceHistoryPath, targetHistoryPath);
    console.log(`${colors.green}版本历史记录迁移成功!${colors.reset}\n`);
  } catch (error) {
    console.log(`${colors.yellow}注意: 无法迁移版本历史记录文件. 将创建新的历史记录.${colors.reset}\n`);
  }
} else if (fs.existsSync(targetHistoryPath)) {
  console.log(`${colors.green}版本历史记录文件已存在.${colors.reset}\n`);
} else {
  console.log(`${colors.yellow}未找到源版本历史记录文件. 将创建新的历史记录.${colors.reset}\n`);
}

/**
 * 添加HTML注释标记到README文件
 */
function addMarkersToReadmeFiles() {
  console.log('添加HTML注释标记到README文件...');

  const readmeFiles = ['README.md', 'README_CN.md'];

  for (const readmeFile of readmeFiles) {
    const filePath = path.join(__dirname, readmeFile);

    if (!fs.existsSync(filePath)) {
      console.log(`文件 ${readmeFile} 不存在，跳过`);
      continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 定义需要添加的标记
    const markers = [
      {
        name: 'Latest Version Card',
        startMarker: '<!-- LATEST_VERSION_CARD_START -->',
        endMarker: '<!-- LATEST_VERSION_CARD_END -->',
        startRegex: /## (Latest Version Card|最新版本卡片)\s*\n\s*<div align="center">/,
        startReplacement: (match) => `${match.split('<div')[0]}\n${markers[0].startMarker}\n<div`,
        endRegex: /<\/div>\s*\n\s*<\/div>\s*\n\s*## (All Versions|所有版本)/,
        endReplacement: (match) => `</div>\n</div>\n${markers[0].endMarker}\n\n${match.split('##')[1].startsWith(' ') ? '#' : ''}# ${match.split('##')[1].trim()}`
      },
      {
        name: 'Version Table',
        startMarker: '<!-- VERSION_TABLE_START -->',
        endMarker: '<!-- VERSION_TABLE_END -->',
        startRegex: /<div align="center">\s*\n\s*<table style="width: 100%; border-collapse: collapse;">/,
        startReplacement: (match) => `<div align="center">\n${markers[1].startMarker}\n<table style="width: 100%; border-collapse: collapse;">`,
        endRegex: /<\/table>\s*\n\s*<\/div>\s*\n\s*## (Detailed|详细)/,
        endReplacement: (match) => `</table>\n${markers[1].endMarker}\n</div>\n\n${match.split('##')[1].startsWith(' ') ? '#' : ''}# ${match.split('##')[1].trim()}`
      },
      {
        name: 'Detailed Cards',
        startMarker: '<!-- DETAILED_CARDS_START -->',
        endMarker: '<!-- DETAILED_CARDS_END -->',
        startRegex: /## (Detailed|详细).*\s*\n/,
        startReplacement: (match) => `${match}\n${markers[2].startMarker}\n`,
        endRegex: null, // 无结束正则表达式，因为它会添加到文件末尾
        endReplacement: null
      }
    ];

    // 添加标记
    for (const marker of markers) {
      // 检查起始标记是否存在
      if (!content.includes(marker.startMarker) && marker.startRegex && marker.startRegex.test(content)) {
        content = content.replace(marker.startRegex, marker.startReplacement);
        modified = true;
        console.log(`已添加 ${marker.name} 起始标记到 ${readmeFile}`);
      }

      // 检查结束标记是否存在
      if (!content.includes(marker.endMarker)) {
        if (marker.endRegex && marker.endRegex.test(content)) {
          content = content.replace(marker.endRegex, marker.endReplacement);
          modified = true;
          console.log(`已添加 ${marker.name} 结束标记到 ${readmeFile}`);
        } else if (marker.endMarker && !marker.endRegex) {
          // 如果没有结束正则表达式，则添加到文件末尾
          content += `\n\n${marker.endMarker}\n`;
          modified = true;
          console.log(`已添加 ${marker.name} 结束标记到 ${readmeFile} 的末尾`);
        }
      }
    }

    // 保存修改后的文件
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`文件 ${readmeFile} 已更新`);
    } else {
      console.log(`文件 ${readmeFile} 已包含所有必要的标记，无需修改`);
    }
  }
}

// 执行初始化操作
function init() {
  console.log('开始初始化项目...');

  // 添加HTML注释标记到README文件
  addMarkersToReadmeFiles();

  console.log('初始化完成');
}

// 执行初始化
init();
