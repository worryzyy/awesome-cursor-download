# Cursor AI 下载链接追踪器 (Node.js 版)

<div align="center">
<p align="center">
  <a href="https://cn.cursorhistory.com" target="_blank"><img alt="访问Cursor历史版本网站" src="https://img.shields.io/badge/🌐_访问Cursor历史版本网站-0078D7?style=for-the-badge&logo=cursor&logoColor=white"></a>
</p>
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

```bash
npm install
```

### 编译

```bash
npm run build
```

### 运行

```bash
npm start
```

或者

```bash
npm run update
```

## 文件说明

- `scripts/track-downloads.ts`: 主要脚本，负责获取最新链接并更新历史记录
- `cursor-version-archive.json`: 存储所有版本的下载链接历史
- `README.md`: 包含所有版本下载链接的表格

## Cursor AI 下载链接

下面提供了 Cursor AI 各版本的官方下载链接，多种视图方便您选择合适的版本。

## 最新版本

<!-- LATEST_VERSION_CARD_START -->
<div align="center">
<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
<h1 style="text-align: center; margin-bottom: 0;">🚀 Cursor 1.4.2</h1>
<p style="text-align: center; color: #666; margin-top: 10px; margin-bottom: 20px;">发布日期: 2025-08-06</p>

| Windows | macOS | Linux |
|:---:|:---:|:---:|
| ![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white) | ![macOS](https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white) | ![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black) |
| [x64 下载](https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/win32/x64/system-setup/CursorSetup-x64-1.4.2.exe) | [通用版 下载](https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/darwin/universal/Cursor-darwin-universal.dmg) | [x64 下载](https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/linux/x64/Cursor-1.4.2-x86_64.AppImage) |
| [ARM64 下载](https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/win32/arm64/system-setup/CursorSetup-arm64-1.4.2.exe) | [Intel 下载](https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/darwin/x64/Cursor-darwin-x64.dmg) | [ARM64 下载](https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/linux/arm64/Cursor-1.4.2-aarch64.AppImage) |
|  | [M芯片 下载](https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/darwin/arm64/Cursor-darwin-arm64.dmg) |  |

</div>
</div>
<!-- LATEST_VERSION_CARD_END -->

## 所有版本下载表格

<div align="center">
<!-- VERSION_TABLE_START -->
<table style="width: 100%; border-collapse: collapse;">
  <tr style="background-color: #f8f9fa;">
    <th style="text-align: center; vertical-align: middle; padding: 10px;">版本</th>
    <th style="text-align: center; vertical-align: middle; padding: 10px;">日期</th>
    <th style="text-align: center; vertical-align: middle; padding: 10px;">Windows</th>
    <th style="text-align: center; vertical-align: middle; padding: 10px;">macOS</th>
    <th style="text-align: center; vertical-align: middle; padding: 10px;">Linux</th>
    <th style="text-align: left; vertical-align: middle; padding: 10px;">更新日志</th>
  </tr>
  <tr style="background-color: #f0f8ff;">
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.4.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-08-06</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/win32/x64/system-setup/CursorSetup-x64-1.4.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/win32/arm64/system-setup/CursorSetup-arm64-1.4.2.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/linux/x64/Cursor-1.4.2-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/linux/arm64/Cursor-1.4.2-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.4.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-08-06</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/99b5cf60d85d7216d67a3768cec0e22266159c61/win32/x64/system-setup/CursorSetup-x64-1.4.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/99b5cf60d85d7216d67a3768cec0e22266159c61/win32/arm64/system-setup/CursorSetup-arm64-1.4.1.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/99b5cf60d85d7216d67a3768cec0e22266159c61/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/99b5cf60d85d7216d67a3768cec0e22266159c61/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/99b5cf60d85d7216d67a3768cec0e22266159c61/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/99b5cf60d85d7216d67a3768cec0e22266159c61/linux/x64/Cursor-1.4.1-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/99b5cf60d85d7216d67a3768cec0e22266159c61/linux/arm64/Cursor-1.4.1-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.4.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-08-06</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/2cdf414b520ff31ee87dd841a04d8aa84009eaee/win32/x64/system-setup/CursorSetup-x64-1.4.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/2cdf414b520ff31ee87dd841a04d8aa84009eaee/win32/arm64/system-setup/CursorSetup-arm64-1.4.0.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/2cdf414b520ff31ee87dd841a04d8aa84009eaee/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/2cdf414b520ff31ee87dd841a04d8aa84009eaee/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/2cdf414b520ff31ee87dd841a04d8aa84009eaee/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/2cdf414b520ff31ee87dd841a04d8aa84009eaee/linux/x64/Cursor-1.4.0-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/2cdf414b520ff31ee87dd841a04d8aa84009eaee/linux/arm64/Cursor-1.4.0-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.3.9</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-08-01</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/54c27320fab08c9f5dd5873f07fca101f7a3e076/win32/x64/system-setup/CursorSetup-x64-1.3.9.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/54c27320fab08c9f5dd5873f07fca101f7a3e076/win32/arm64/system-setup/CursorSetup-arm64-1.3.9.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/54c27320fab08c9f5dd5873f07fca101f7a3e076/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/54c27320fab08c9f5dd5873f07fca101f7a3e076/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/54c27320fab08c9f5dd5873f07fca101f7a3e076/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/54c27320fab08c9f5dd5873f07fca101f7a3e076/linux/x64/Cursor-1.3.9-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/54c27320fab08c9f5dd5873f07fca101f7a3e076/linux/arm64/Cursor-1.3.9-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.3.8</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-31</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/a1fa6fc7d2c2f520293aad84aaa38d091dee6fef/win32/x64/system-setup/CursorSetup-x64-1.3.8.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/a1fa6fc7d2c2f520293aad84aaa38d091dee6fef/win32/arm64/system-setup/CursorSetup-arm64-1.3.8.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/a1fa6fc7d2c2f520293aad84aaa38d091dee6fef/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/a1fa6fc7d2c2f520293aad84aaa38d091dee6fef/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/a1fa6fc7d2c2f520293aad84aaa38d091dee6fef/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/a1fa6fc7d2c2f520293aad84aaa38d091dee6fef/linux/x64/Cursor-1.3.8-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/a1fa6fc7d2c2f520293aad84aaa38d091dee6fef/linux/arm64/Cursor-1.3.8-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.3.7</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-31</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/5d56108ff2401c28f239aa2a527ef424ce7719a3/win32/x64/system-setup/CursorSetup-x64-1.3.7.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/5d56108ff2401c28f239aa2a527ef424ce7719a3/win32/arm64/system-setup/CursorSetup-arm64-1.3.7.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/5d56108ff2401c28f239aa2a527ef424ce7719a3/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/5d56108ff2401c28f239aa2a527ef424ce7719a3/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/5d56108ff2401c28f239aa2a527ef424ce7719a3/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/5d56108ff2401c28f239aa2a527ef424ce7719a3/linux/x64/Cursor-1.3.7-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/5d56108ff2401c28f239aa2a527ef424ce7719a3/linux/arm64/Cursor-1.3.7-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.3.6</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-30</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/68b8fe7396ea37d8acdaaaa08ba316ba359a4162/win32/x64/system-setup/CursorSetup-x64-1.3.6.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/68b8fe7396ea37d8acdaaaa08ba316ba359a4162/win32/arm64/system-setup/CursorSetup-arm64-1.3.6.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/68b8fe7396ea37d8acdaaaa08ba316ba359a4162/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/68b8fe7396ea37d8acdaaaa08ba316ba359a4162/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/68b8fe7396ea37d8acdaaaa08ba316ba359a4162/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/68b8fe7396ea37d8acdaaaa08ba316ba359a4162/linux/x64/Cursor-1.3.6-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/68b8fe7396ea37d8acdaaaa08ba316ba359a4162/linux/arm64/Cursor-1.3.6-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.3.5</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-30</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/9f33c2e793460d00cf95c06d957e1d1b8135fadd/win32/x64/system-setup/CursorSetup-x64-1.3.5.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/9f33c2e793460d00cf95c06d957e1d1b8135fadd/win32/arm64/system-setup/CursorSetup-arm64-1.3.5.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/9f33c2e793460d00cf95c06d957e1d1b8135fadd/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/9f33c2e793460d00cf95c06d957e1d1b8135fadd/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/9f33c2e793460d00cf95c06d957e1d1b8135fadd/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/9f33c2e793460d00cf95c06d957e1d1b8135fadd/linux/x64/Cursor-1.3.5-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/9f33c2e793460d00cf95c06d957e1d1b8135fadd/linux/arm64/Cursor-1.3.5-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.3.4</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-29</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/bfb7c44bcb74430be0a6dd5edf885489879f2a2e/win32/x64/system-setup/CursorSetup-x64-1.3.4.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/bfb7c44bcb74430be0a6dd5edf885489879f2a2e/win32/arm64/system-setup/CursorSetup-arm64-1.3.4.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/bfb7c44bcb74430be0a6dd5edf885489879f2a2e/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/bfb7c44bcb74430be0a6dd5edf885489879f2a2e/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/bfb7c44bcb74430be0a6dd5edf885489879f2a2e/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/bfb7c44bcb74430be0a6dd5edf885489879f2a2e/linux/x64/Cursor-1.3.4-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/bfb7c44bcb74430be0a6dd5edf885489879f2a2e/linux/arm64/Cursor-1.3.4-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.3.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-26</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/bbee6a95e82b300524a875b2202fe274c76a5b8e/win32/x64/system-setup/CursorSetup-x64-1.3.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/bbee6a95e82b300524a875b2202fe274c76a5b8e/win32/arm64/system-setup/CursorSetup-arm64-1.3.3.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/bbee6a95e82b300524a875b2202fe274c76a5b8e/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/bbee6a95e82b300524a875b2202fe274c76a5b8e/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/bbee6a95e82b300524a875b2202fe274c76a5b8e/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/bbee6a95e82b300524a875b2202fe274c76a5b8e/linux/x64/Cursor-1.3.3-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/bbee6a95e82b300524a875b2202fe274c76a5b8e/linux/arm64/Cursor-1.3.3-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.3.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-25</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7db9f9f3f612efbde8f318c1a7951aa0926fc1d0/win32/x64/system-setup/CursorSetup-x64-1.3.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/7db9f9f3f612efbde8f318c1a7951aa0926fc1d0/win32/arm64/system-setup/CursorSetup-arm64-1.3.2.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7db9f9f3f612efbde8f318c1a7951aa0926fc1d0/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/7db9f9f3f612efbde8f318c1a7951aa0926fc1d0/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/7db9f9f3f612efbde8f318c1a7951aa0926fc1d0/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7db9f9f3f612efbde8f318c1a7951aa0926fc1d0/linux/x64/Cursor-1.3.2-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/7db9f9f3f612efbde8f318c1a7951aa0926fc1d0/linux/arm64/Cursor-1.3.2-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.3.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-24</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/4e81c182aa53ca18ee09324336db9c760974e443/win32/x64/system-setup/CursorSetup-x64-1.3.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/4e81c182aa53ca18ee09324336db9c760974e443/win32/arm64/system-setup/CursorSetup-arm64-1.3.1.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/4e81c182aa53ca18ee09324336db9c760974e443/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/4e81c182aa53ca18ee09324336db9c760974e443/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/4e81c182aa53ca18ee09324336db9c760974e443/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/4e81c182aa53ca18ee09324336db9c760974e443/linux/x64/Cursor-1.3.1-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/4e81c182aa53ca18ee09324336db9c760974e443/linux/arm64/Cursor-1.3.1-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.3.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-23</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/410000a83355c025daba0c6156955bf08687d081/win32/x64/system-setup/CursorSetup-x64-1.3.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/410000a83355c025daba0c6156955bf08687d081/win32/arm64/system-setup/CursorSetup-arm64-1.3.0.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/410000a83355c025daba0c6156955bf08687d081/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/410000a83355c025daba0c6156955bf08687d081/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/410000a83355c025daba0c6156955bf08687d081/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/410000a83355c025daba0c6156955bf08687d081/linux/x64/Cursor-1.3.0-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/410000a83355c025daba0c6156955bf08687d081/linux/arm64/Cursor-1.3.0-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.2.4</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-10</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/a8e95743c5268be73767c46944a71f4465d05c90/win32/x64/system-setup/CursorSetup-x64-1.2.4.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/a8e95743c5268be73767c46944a71f4465d05c90/win32/arm64/system-setup/CursorSetup-arm64-1.2.4.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/a8e95743c5268be73767c46944a71f4465d05c90/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/a8e95743c5268be73767c46944a71f4465d05c90/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/a8e95743c5268be73767c46944a71f4465d05c90/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/a8e95743c5268be73767c46944a71f4465d05c90/linux/x64/Cursor-1.2.4-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/a8e95743c5268be73767c46944a71f4465d05c90/linux/arm64/Cursor-1.2.4-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.2.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-10</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/3af362bc7c6ffdde67ee75328bc9be679d6f3a45/win32/x64/system-setup/CursorSetup-x64-1.2.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/3af362bc7c6ffdde67ee75328bc9be679d6f3a45/win32/arm64/system-setup/CursorSetup-arm64-1.2.3.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/3af362bc7c6ffdde67ee75328bc9be679d6f3a45/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/3af362bc7c6ffdde67ee75328bc9be679d6f3a45/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/3af362bc7c6ffdde67ee75328bc9be679d6f3a45/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/3af362bc7c6ffdde67ee75328bc9be679d6f3a45/linux/x64/Cursor-1.2.3-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/3af362bc7c6ffdde67ee75328bc9be679d6f3a45/linux/arm64/Cursor-1.2.3-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.2.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-07</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/faa03b17cce93e8a80b7d62d57f5eda6bb6ab9fa/win32/x64/system-setup/CursorSetup-x64-1.2.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/faa03b17cce93e8a80b7d62d57f5eda6bb6ab9fa/win32/arm64/system-setup/CursorSetup-arm64-1.2.2.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/faa03b17cce93e8a80b7d62d57f5eda6bb6ab9fa/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/faa03b17cce93e8a80b7d62d57f5eda6bb6ab9fa/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/faa03b17cce93e8a80b7d62d57f5eda6bb6ab9fa/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/faa03b17cce93e8a80b7d62d57f5eda6bb6ab9fa/linux/x64/Cursor-1.2.2-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/faa03b17cce93e8a80b7d62d57f5eda6bb6ab9fa/linux/arm64/Cursor-1.2.2-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.2.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-03</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/031e7e0ff1e2eda9c1a0f5df67d44053b059c5df/win32/x64/system-setup/CursorSetup-x64-1.2.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/031e7e0ff1e2eda9c1a0f5df67d44053b059c5df/win32/arm64/system-setup/CursorSetup-arm64-1.2.1.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/031e7e0ff1e2eda9c1a0f5df67d44053b059c5df/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/031e7e0ff1e2eda9c1a0f5df67d44053b059c5df/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/031e7e0ff1e2eda9c1a0f5df67d44053b059c5df/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/031e7e0ff1e2eda9c1a0f5df67d44053b059c5df/linux/x64/Cursor-1.2.1-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/031e7e0ff1e2eda9c1a0f5df67d44053b059c5df/linux/arm64/Cursor-1.2.1-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.2.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-01</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/eb5fa4768da0747b79dc34f0b79ab20dbf58202c/win32/x64/system-setup/CursorSetup-x64-1.2.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/eb5fa4768da0747b79dc34f0b79ab20dbf58202c/win32/arm64/system-setup/CursorSetup-arm64-1.2.0.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/eb5fa4768da0747b79dc34f0b79ab20dbf58202c/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/eb5fa4768da0747b79dc34f0b79ab20dbf58202c/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/eb5fa4768da0747b79dc34f0b79ab20dbf58202c/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/eb5fa4768da0747b79dc34f0b79ab20dbf58202c/linux/x64/Cursor-1.2.0-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/eb5fa4768da0747b79dc34f0b79ab20dbf58202c/linux/arm64/Cursor-1.2.0-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.1.7</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-07-01</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7111807980fa9c93aedd455ffa44b682c0dc1356/win32/x64/system-setup/CursorSetup-x64-1.1.7.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/7111807980fa9c93aedd455ffa44b682c0dc1356/win32/arm64/system-setup/CursorSetup-arm64-1.1.7.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7111807980fa9c93aedd455ffa44b682c0dc1356/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/7111807980fa9c93aedd455ffa44b682c0dc1356/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/7111807980fa9c93aedd455ffa44b682c0dc1356/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7111807980fa9c93aedd455ffa44b682c0dc1356/linux/x64/Cursor-1.1.7-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/7111807980fa9c93aedd455ffa44b682c0dc1356/linux/arm64/Cursor-1.1.7-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Small bug fixes and performance improvements</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.1.6</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-06-25</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/5b19bac7a947f54e4caa3eb7e4c5fbf832389853/win32/x64/system-setup/CursorSetup-x64-1.1.6.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/5b19bac7a947f54e4caa3eb7e4c5fbf832389853/win32/arm64/system-setup/CursorSetup-arm64-1.1.6.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/5b19bac7a947f54e4caa3eb7e4c5fbf832389853/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/5b19bac7a947f54e4caa3eb7e4c5fbf832389853/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/5b19bac7a947f54e4caa3eb7e4c5fbf832389853/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/5b19bac7a947f54e4caa3eb7e4c5fbf832389853/linux/x64/Cursor-1.1.6-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/5b19bac7a947f54e4caa3eb7e4c5fbf832389853/linux/arm64/Cursor-1.1.6-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Fixed an agent latency regression that occurs for users using Remote SSH</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.1.5</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-06-21</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/ef5eeb47a684b4c217dfaf0463aa7ea952f8ab95/win32/x64/system-setup/CursorSetup-x64-1.1.5.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/ef5eeb47a684b4c217dfaf0463aa7ea952f8ab95/win32/arm64/system-setup/CursorSetup-arm64-1.1.5.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/ef5eeb47a684b4c217dfaf0463aa7ea952f8ab95/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/ef5eeb47a684b4c217dfaf0463aa7ea952f8ab95/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/ef5eeb47a684b4c217dfaf0463aa7ea952f8ab95/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/ef5eeb47a684b4c217dfaf0463aa7ea952f8ab95/linux/x64/Cursor-1.1.5-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/ef5eeb47a684b4c217dfaf0463aa7ea952f8ab95/linux/arm64/Cursor-1.1.5-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Small performance improvements</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.1.4</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-06-19</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/e86fcc937643bc6385aebd982c1c66012c98caec/win32/x64/system-setup/CursorSetup-x64-1.1.4.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/e86fcc937643bc6385aebd982c1c66012c98caec/win32/arm64/system-setup/CursorSetup-arm64-1.1.4.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/e86fcc937643bc6385aebd982c1c66012c98caec/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/e86fcc937643bc6385aebd982c1c66012c98caec/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/e86fcc937643bc6385aebd982c1c66012c98caec/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/e86fcc937643bc6385aebd982c1c66012c98caec/linux/x64/Cursor-1.1.4-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/e86fcc937643bc6385aebd982c1c66012c98caec/linux/arm64/Cursor-1.1.4-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Improved Background Agent reliability;Fixed search in Chat UI bug</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.1.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-06-15</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/979ba33804ac150108481c14e0b5cb970bda3266/win32/x64/system-setup/CursorSetup-x64-1.1.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/979ba33804ac150108481c14e0b5cb970bda3266/win32/arm64/system-setup/CursorSetup-arm64-1.1.3.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/979ba33804ac150108481c14e0b5cb970bda3266/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/979ba33804ac150108481c14e0b5cb970bda3266/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/979ba33804ac150108481c14e0b5cb970bda3266/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/979ba33804ac150108481c14e0b5cb970bda3266/linux/x64/Cursor-1.1.3-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/979ba33804ac150108481c14e0b5cb970bda3266/linux/arm64/Cursor-1.1.3-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Fixed MCP performance regression;Added PR search and indexing;Improved deeplink experience;Added option to change upstream marketplace provider</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.1.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-06-13</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/87ea1604be1f602f173c5fb67582e647fcef6c48/win32/x64/system-setup/CursorSetup-x64-1.1.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/87ea1604be1f602f173c5fb67582e647fcef6c48/win32/arm64/system-setup/CursorSetup-arm64-1.1.2.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/87ea1604be1f602f173c5fb67582e647fcef6c48/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/87ea1604be1f602f173c5fb67582e647fcef6c48/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/87ea1604be1f602f173c5fb67582e647fcef6c48/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/87ea1604be1f602f173c5fb67582e647fcef6c48/linux/x64/Cursor-1.1.2-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/87ea1604be1f602f173c5fb67582e647fcef6c48/linux/arm64/Cursor-1.1.2-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Improved client side performance</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.1.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-06-12</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/f81622395bb52bc30ed251a6299eeaf51ab49110/win32/x64/system-setup/CursorSetup-x64-1.1.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/f81622395bb52bc30ed251a6299eeaf51ab49110/win32/arm64/system-setup/CursorSetup-arm64-1.1.1.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/f81622395bb52bc30ed251a6299eeaf51ab49110/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/f81622395bb52bc30ed251a6299eeaf51ab49110/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/f81622395bb52bc30ed251a6299eeaf51ab49110/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/f81622395bb52bc30ed251a6299eeaf51ab49110/linux/x64/Cursor-1.1.1-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/f81622395bb52bc30ed251a6299eeaf51ab49110/linux/arm64/Cursor-1.1.1-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Fixed workspaces indexing issue</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.1.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-06-12</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/b122cddec7bf4e6d7cc8badbae006d08b8e8105c/win32/x64/system-setup/CursorSetup-x64-1.1.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/b122cddec7bf4e6d7cc8badbae006d08b8e8105c/win32/arm64/system-setup/CursorSetup-arm64-1.1.0.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/b122cddec7bf4e6d7cc8badbae006d08b8e8105c/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/b122cddec7bf4e6d7cc8badbae006d08b8e8105c/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/b122cddec7bf4e6d7cc8badbae006d08b8e8105c/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/b122cddec7bf4e6d7cc8badbae006d08b8e8105c/linux/x64/Cursor-1.1.0-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/b122cddec7bf4e6d7cc8badbae006d08b8e8105c/linux/arm64/Cursor-1.1.0-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.0.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-06-07</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/5491d1158b9f2bf4c483cff438c7cc162fd7d131/win32/x64/system-setup/CursorSetup-x64-1.0.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/5491d1158b9f2bf4c483cff438c7cc162fd7d131/win32/arm64/system-setup/CursorSetup-arm64-1.0.1.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/5491d1158b9f2bf4c483cff438c7cc162fd7d131/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/5491d1158b9f2bf4c483cff438c7cc162fd7d131/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/5491d1158b9f2bf4c483cff438c7cc162fd7d131/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/5491d1158b9f2bf4c483cff438c7cc162fd7d131/linux/x64/Cursor-1.0.1-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/5491d1158b9f2bf4c483cff438c7cc162fd7d131/linux/arm64/Cursor-1.0.1-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">1.0.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-06-05</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/53b99ce608cba35127ae3a050c1738a959750865/win32/x64/system-setup/CursorSetup-x64-1.0.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/53b99ce608cba35127ae3a050c1738a959750865/win32/arm64/system-setup/CursorSetup-arm64-1.0.0.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/53b99ce608cba35127ae3a050c1738a959750865/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/53b99ce608cba35127ae3a050c1738a959750865/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/53b99ce608cba35127ae3a050c1738a959750865/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/53b99ce608cba35127ae3a050c1738a959750865/linux/x64/Cursor-1.0.0-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/53b99ce608cba35127ae3a050c1738a959750865/linux/arm64/Cursor-1.0.0-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Automatic code review with BugBot;Background Agent for everyone;Agent in Jupyter Notebooks;Memories;MCP one-click install and OAuth support;Richer Chat responses;New Settings and Dashboard</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.51.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-06-03</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/f364e608fc11d38303429b80fd1e1f32d7587d43/win32/x64/system-setup/CursorSetup-x64-0.51.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/f364e608fc11d38303429b80fd1e1f32d7587d43/win32/arm64/system-setup/CursorSetup-arm64-0.51.2.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/f364e608fc11d38303429b80fd1e1f32d7587d43/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/f364e608fc11d38303429b80fd1e1f32d7587d43/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/f364e608fc11d38303429b80fd1e1f32d7587d43/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/f364e608fc11d38303429b80fd1e1f32d7587d43/linux/x64/Cursor-0.51.2-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/f364e608fc11d38303429b80fd1e1f32d7587d43/linux/arm64/Cursor-0.51.2-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.51.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-05-31</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/a9dd46cbd249a30044eaae1526eb6ca1ec2f7568/win32/x64/system-setup/CursorSetup-x64-0.51.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/a9dd46cbd249a30044eaae1526eb6ca1ec2f7568/win32/arm64/system-setup/CursorSetup-arm64-0.51.1.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/a9dd46cbd249a30044eaae1526eb6ca1ec2f7568/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/a9dd46cbd249a30044eaae1526eb6ca1ec2f7568/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/a9dd46cbd249a30044eaae1526eb6ca1ec2f7568/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/a9dd46cbd249a30044eaae1526eb6ca1ec2f7568/linux/x64/Cursor-0.51.1-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/a9dd46cbd249a30044eaae1526eb6ca1ec2f7568/linux/arm64/Cursor-0.51.1-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.51.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-05-30</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/adaabf32700c570904618df5bd7166988f3d079b/win32/x64/system-setup/CursorSetup-x64-0.51.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/adaabf32700c570904618df5bd7166988f3d079b/win32/arm64/system-setup/CursorSetup-arm64-0.51.0.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/adaabf32700c570904618df5bd7166988f3d079b/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/adaabf32700c570904618df5bd7166988f3d079b/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/adaabf32700c570904618df5bd7166988f3d079b/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/adaabf32700c570904618df5bd7166988f3d079b/linux/x64/Cursor-0.51.0-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/adaabf32700c570904618df5bd7166988f3d079b/linux/arm64/Cursor-0.51.0-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.50.7</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-05-24</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/02270c8441bdc4b2fdbc30e6f470a589ec78d60d/win32/x64/system-setup/CursorSetup-x64-0.50.7.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/02270c8441bdc4b2fdbc30e6f470a589ec78d60d/win32/arm64/system-setup/CursorSetup-arm64-0.50.7.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/02270c8441bdc4b2fdbc30e6f470a589ec78d60d/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/02270c8441bdc4b2fdbc30e6f470a589ec78d60d/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/02270c8441bdc4b2fdbc30e6f470a589ec78d60d/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/02270c8441bdc4b2fdbc30e6f470a589ec78d60d/linux/x64/Cursor-0.50.7-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/02270c8441bdc4b2fdbc30e6f470a589ec78d60d/linux/arm64/Cursor-0.50.7-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.50.6</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-05-23</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/f3f2ad556456ff2df80332923bb1e2a818110d1b/win32/x64/system-setup/CursorSetup-x64-0.50.6.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/f3f2ad556456ff2df80332923bb1e2a818110d1b/win32/arm64/system-setup/CursorSetup-arm64-0.50.6.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/f3f2ad556456ff2df80332923bb1e2a818110d1b/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/f3f2ad556456ff2df80332923bb1e2a818110d1b/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/f3f2ad556456ff2df80332923bb1e2a818110d1b/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/f3f2ad556456ff2df80332923bb1e2a818110d1b/linux/x64/Cursor-0.50.6-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/f3f2ad556456ff2df80332923bb1e2a818110d1b/linux/arm64/Cursor-0.50.6-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.50.5</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-05-18</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/96e5b01ca25f8fbd4c4c10bc69b15f6228c80771/win32/x64/system-setup/CursorSetup-x64-0.50.5.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/96e5b01ca25f8fbd4c4c10bc69b15f6228c80771/win32/arm64/system-setup/CursorSetup-arm64-0.50.5.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/96e5b01ca25f8fbd4c4c10bc69b15f6228c80771/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/96e5b01ca25f8fbd4c4c10bc69b15f6228c80771/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/96e5b01ca25f8fbd4c4c10bc69b15f6228c80771/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/96e5b01ca25f8fbd4c4c10bc69b15f6228c80771/linux/x64/Cursor-0.50.5-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/96e5b01ca25f8fbd4c4c10bc69b15f6228c80771/linux/arm64/Cursor-0.50.5-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.50.4</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-05-14</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/8ea935e79a50a02da912a034bbeda84a6d3d355d/win32/x64/system-setup/CursorSetup-x64-0.50.4.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/8ea935e79a50a02da912a034bbeda84a6d3d355d/win32/arm64/system-setup/CursorSetup-arm64-0.50.4.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/8ea935e79a50a02da912a034bbeda84a6d3d355d/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/8ea935e79a50a02da912a034bbeda84a6d3d355d/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/8ea935e79a50a02da912a034bbeda84a6d3d355d/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/8ea935e79a50a02da912a034bbeda84a6d3d355d/linux/x64/Cursor-0.50.4-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/8ea935e79a50a02da912a034bbeda84a6d3d355d/linux/arm64/Cursor-0.50.4-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.50.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-05-13</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7ae22cf8cd5af9e08b62585dd03d10f5f610acf9/win32/x64/system-setup/CursorSetup-x64-0.50.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/7ae22cf8cd5af9e08b62585dd03d10f5f610acf9/win32/arm64/system-setup/CursorSetup-arm64-0.50.3.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7ae22cf8cd5af9e08b62585dd03d10f5f610acf9/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/7ae22cf8cd5af9e08b62585dd03d10f5f610acf9/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/7ae22cf8cd5af9e08b62585dd03d10f5f610acf9/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7ae22cf8cd5af9e08b62585dd03d10f5f610acf9/linux/x64/Cursor-0.50.3-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/7ae22cf8cd5af9e08b62585dd03d10f5f610acf9/linux/arm64/Cursor-0.50.3-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.50.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-05-13</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/fc3e38722d374aeba23729a31220a4f0662e3c9b/win32/x64/system-setup/CursorSetup-x64-0.50.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/fc3e38722d374aeba23729a31220a4f0662e3c9b/win32/arm64/system-setup/CursorSetup-arm64-0.50.2.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/fc3e38722d374aeba23729a31220a4f0662e3c9b/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/fc3e38722d374aeba23729a31220a4f0662e3c9b/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/fc3e38722d374aeba23729a31220a4f0662e3c9b/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/fc3e38722d374aeba23729a31220a4f0662e3c9b/linux/x64/Cursor-0.50.2-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/fc3e38722d374aeba23729a31220a4f0662e3c9b/linux/arm64/Cursor-0.50.2-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.50.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-05-11</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/81bf18c2ba01d6e7e886875bdb6d1d04ac31c1f7/win32/x64/system-setup/CursorSetup-x64-0.50.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/81bf18c2ba01d6e7e886875bdb6d1d04ac31c1f7/win32/arm64/system-setup/CursorSetup-arm64-0.50.1.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/81bf18c2ba01d6e7e886875bdb6d1d04ac31c1f7/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/81bf18c2ba01d6e7e886875bdb6d1d04ac31c1f7/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/81bf18c2ba01d6e7e886875bdb6d1d04ac31c1f7/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/81bf18c2ba01d6e7e886875bdb6d1d04ac31c1f7/linux/x64/Cursor-0.50.1-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/81bf18c2ba01d6e7e886875bdb6d1d04ac31c1f7/linux/arm64/Cursor-0.50.1-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.50.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-05-09</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/bbfa51c1211255cbbde8b558e014a593f44051f4/win32/x64/system-setup/CursorSetup-x64-0.50.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/bbfa51c1211255cbbde8b558e014a593f44051f4/win32/arm64/system-setup/CursorSetup-arm64-0.50.0.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/bbfa51c1211255cbbde8b558e014a593f44051f4/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/bbfa51c1211255cbbde8b558e014a593f44051f4/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/bbfa51c1211255cbbde8b558e014a593f44051f4/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/bbfa51c1211255cbbde8b558e014a593f44051f4/linux/x64/Cursor-0.50.0-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/bbfa51c1211255cbbde8b558e014a593f44051f4/linux/arm64/Cursor-0.50.0-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.49.6</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-04-25</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/0781e811de386a0c5bcb07ceb259df8ff8246a52/win32/x64/system-setup/CursorSetup-x64-0.49.6.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/0781e811de386a0c5bcb07ceb259df8ff8246a52/win32/arm64/system-setup/CursorSetup-arm64-0.49.6.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/0781e811de386a0c5bcb07ceb259df8ff8246a52/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/0781e811de386a0c5bcb07ceb259df8ff8246a52/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/0781e811de386a0c5bcb07ceb259df8ff8246a52/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/0781e811de386a0c5bcb07ceb259df8ff8246a52/linux/x64/Cursor-0.49.6-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/0781e811de386a0c5bcb07ceb259df8ff8246a52/linux/arm64/Cursor-0.49.6-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.49.5</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-04-24</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/fd861c8a80c0f9e4e35294b1915ee8a7b29ae858/win32/x64/system-setup/CursorSetup-x64-0.49.5.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/fd861c8a80c0f9e4e35294b1915ee8a7b29ae858/win32/arm64/system-setup/CursorSetup-arm64-0.49.5.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/fd861c8a80c0f9e4e35294b1915ee8a7b29ae858/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/fd861c8a80c0f9e4e35294b1915ee8a7b29ae858/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/fd861c8a80c0f9e4e35294b1915ee8a7b29ae858/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/fd861c8a80c0f9e4e35294b1915ee8a7b29ae858/linux/x64/Cursor-0.49.5-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/fd861c8a80c0f9e4e35294b1915ee8a7b29ae858/linux/arm64/Cursor-0.49.5-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.49.4</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-04-22</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/ec408037b24566b11e6132c58bbe6ad27046eb91/win32/x64/system-setup/CursorSetup-x64-0.49.4.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/ec408037b24566b11e6132c58bbe6ad27046eb91/win32/arm64/system-setup/CursorSetup-arm64-0.49.4.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/ec408037b24566b11e6132c58bbe6ad27046eb91/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/ec408037b24566b11e6132c58bbe6ad27046eb91/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/ec408037b24566b11e6132c58bbe6ad27046eb91/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/ec408037b24566b11e6132c58bbe6ad27046eb91/linux/x64/Cursor-0.49.4-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/ec408037b24566b11e6132c58bbe6ad27046eb91/linux/arm64/Cursor-0.49.4-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.49.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-04-21</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/224bc1da1a36703c583d62e407d4bccbb8c6a641/win32/x64/system-setup/CursorSetup-x64-0.49.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/224bc1da1a36703c583d62e407d4bccbb8c6a641/win32/arm64/system-setup/CursorSetup-arm64-0.49.3.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/224bc1da1a36703c583d62e407d4bccbb8c6a641/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/224bc1da1a36703c583d62e407d4bccbb8c6a641/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/224bc1da1a36703c583d62e407d4bccbb8c6a641/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/224bc1da1a36703c583d62e407d4bccbb8c6a641/linux/x64/Cursor-0.49.3-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/224bc1da1a36703c583d62e407d4bccbb8c6a641/linux/arm64/Cursor-0.49.3-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.49.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-04-19</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/1d0a7a3b734be5aea27e30d0c56d2a6e2c79da74/win32/x64/system-setup/CursorSetup-x64-0.49.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/1d0a7a3b734be5aea27e30d0c56d2a6e2c79da74/win32/arm64/system-setup/CursorSetup-arm64-0.49.2.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/1d0a7a3b734be5aea27e30d0c56d2a6e2c79da74/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/1d0a7a3b734be5aea27e30d0c56d2a6e2c79da74/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/1d0a7a3b734be5aea27e30d0c56d2a6e2c79da74/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/1d0a7a3b734be5aea27e30d0c56d2a6e2c79da74/linux/x64/Cursor-0.49.2-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/1d0a7a3b734be5aea27e30d0c56d2a6e2c79da74/linux/arm64/Cursor-0.49.2-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.49.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-04-17</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/4c8fb291b08c52a5d2fee1b4463620092c4ed7ca/win32/x64/system-setup/CursorSetup-x64-0.49.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/4c8fb291b08c52a5d2fee1b4463620092c4ed7ca/win32/arm64/system-setup/CursorSetup-arm64-0.49.1.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/4c8fb291b08c52a5d2fee1b4463620092c4ed7ca/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/4c8fb291b08c52a5d2fee1b4463620092c4ed7ca/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/4c8fb291b08c52a5d2fee1b4463620092c4ed7ca/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/4c8fb291b08c52a5d2fee1b4463620092c4ed7ca/linux/x64/Cursor-0.49.1-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/4c8fb291b08c52a5d2fee1b4463620092c4ed7ca/linux/arm64/Cursor-0.49.1-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.49.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-04-16</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/88a47f0edd42a2ba73afb018ada9fe9eda7df75f/win32/x64/system-setup/CursorSetup-x64-0.49.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/88a47f0edd42a2ba73afb018ada9fe9eda7df75f/win32/arm64/system-setup/CursorSetup-arm64-0.49.0.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/88a47f0edd42a2ba73afb018ada9fe9eda7df75f/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/88a47f0edd42a2ba73afb018ada9fe9eda7df75f/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/88a47f0edd42a2ba73afb018ada9fe9eda7df75f/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/88a47f0edd42a2ba73afb018ada9fe9eda7df75f/linux/x64/Cursor-0.49.0-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/88a47f0edd42a2ba73afb018ada9fe9eda7df75f/linux/arm64/Cursor-0.49.0-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.48.9</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-04-13</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/win32/x64/system-setup/CursorSetup-x64-0.48.9.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/win32/arm64/system-setup/CursorSetup-arm64-0.48.9.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/linux/x64/Cursor-0.48.9-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/linux/arm64/Cursor-0.48.9-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Lower memory usage from indexing</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.48.8</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-04-07</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7801a556824585b7f2721900066bc87c4a09b743/win32/x64/system-setup/CursorSetup-x64-0.48.8.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/7801a556824585b7f2721900066bc87c4a09b743/win32/arm64/system-setup/CursorSetup-arm64-0.48.8.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7801a556824585b7f2721900066bc87c4a09b743/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/7801a556824585b7f2721900066bc87c4a09b743/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/7801a556824585b7f2721900066bc87c4a09b743/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7801a556824585b7f2721900066bc87c4a09b743/linux/x64/Cursor-0.48.8-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/7801a556824585b7f2721900066bc87c4a09b743/linux/arm64/Cursor-0.48.8-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Improves CPU performance from @-symbols search</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.48.7</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-04-02</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/1d623c4cc1d3bb6e0fe4f1d5434b47b958b05876/win32/x64/system-setup/CursorSetup-x64-0.48.7.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/1d623c4cc1d3bb6e0fe4f1d5434b47b958b05876/win32/arm64/system-setup/CursorSetup-arm64-0.48.7.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/1d623c4cc1d3bb6e0fe4f1d5434b47b958b05876/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/1d623c4cc1d3bb6e0fe4f1d5434b47b958b05876/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/1d623c4cc1d3bb6e0fe4f1d5434b47b958b05876/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/1d623c4cc1d3bb6e0fe4f1d5434b47b958b05876/linux/x64/Cursor-0.48.7-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/1d623c4cc1d3bb6e0fe4f1d5434b47b958b05876/linux/arm64/Cursor-0.48.7-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;"> Fixes an issue where some chats could get deleted on update</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.48.6</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-31</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/1649e229afdef8fd1d18ea173f063563f1e722ef/win32/x64/user-setup/CursorUserSetup-x64-0.48.6.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/1649e229afdef8fd1d18ea173f063563f1e722ef/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.6.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/1649e229afdef8fd1d18ea173f063563f1e722ef/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/1649e229afdef8fd1d18ea173f063563f1e722ef/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/1649e229afdef8fd1d18ea173f063563f1e722ef/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/1649e229afdef8fd1d18ea173f063563f1e722ef/linux/x64/Cursor-0.48.6-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/1649e229afdef8fd1d18ea173f063563f1e722ef/linux/arm64/Cursor-0.48.6-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Creates a new chat after the AI Pane has been closed for long enough</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.48.5</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-31</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/ec8ef865575596e5c64d3b6cf9a933b93ad4ac02/win32/x64/user-setup/CursorUserSetup-x64-0.48.5.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/ec8ef865575596e5c64d3b6cf9a933b93ad4ac02/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.5.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/ec8ef865575596e5c64d3b6cf9a933b93ad4ac02/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/ec8ef865575596e5c64d3b6cf9a933b93ad4ac02/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/ec8ef865575596e5c64d3b6cf9a933b93ad4ac02/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/ec8ef865575596e5c64d3b6cf9a933b93ad4ac02/linux/x64/Cursor-0.48.5-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/ec8ef865575596e5c64d3b6cf9a933b93ad4ac02/linux/arm64/Cursor-0.48.5-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Change management for Cmd+Backspace -> Cmd+Shift+Backspace</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.48.4</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-29</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/2d6a87f894b91f2d4a045294e1ad36d208023ccb/win32/x64/user-setup/CursorUserSetup-x64-0.48.4.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/2d6a87f894b91f2d4a045294e1ad36d208023ccb/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.4.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/2d6a87f894b91f2d4a045294e1ad36d208023ccb/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/2d6a87f894b91f2d4a045294e1ad36d208023ccb/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/2d6a87f894b91f2d4a045294e1ad36d208023ccb/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/2d6a87f894b91f2d4a045294e1ad36d208023ccb/linux/x64/Cursor-0.48.4-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/2d6a87f894b91f2d4a045294e1ad36d208023ccb/linux/arm64/Cursor-0.48.4-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Image support for Gemini 2.5 Pro</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.48.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-29</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/d0f2e6e7e022d8e024f7eb7d085cadf3d1f4df20/win32/x64/user-setup/CursorUserSetup-x64-0.48.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/d0f2e6e7e022d8e024f7eb7d085cadf3d1f4df20/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.3.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/d0f2e6e7e022d8e024f7eb7d085cadf3d1f4df20/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/d0f2e6e7e022d8e024f7eb7d085cadf3d1f4df20/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/d0f2e6e7e022d8e024f7eb7d085cadf3d1f4df20/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/d0f2e6e7e022d8e024f7eb7d085cadf3d1f4df20/linux/x64/Cursor-0.48.3-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/d0f2e6e7e022d8e024f7eb7d085cadf3d1f4df20/linux/arm64/Cursor-0.48.3-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Chat Tabs UX improvements (Cmd/Ctrl+T for new tab), Max-mode support for Gemini 2.5 Pro</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.48.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-26</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7d6318dfcfbf7c12a87e33c06978f23167a6de3c/win32/x64/user-setup/CursorUserSetup-x64-0.48.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/7d6318dfcfbf7c12a87e33c06978f23167a6de3c/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.2.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7d6318dfcfbf7c12a87e33c06978f23167a6de3c/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/7d6318dfcfbf7c12a87e33c06978f23167a6de3c/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/7d6318dfcfbf7c12a87e33c06978f23167a6de3c/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7d6318dfcfbf7c12a87e33c06978f23167a6de3c/linux/x64/Cursor-0.48.2-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/7d6318dfcfbf7c12a87e33c06978f23167a6de3c/linux/arm64/Cursor-0.48.2-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Allows users to accept/reject file edited in another chat tab.</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.48.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-24</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/0139db98f117ab50fcaaf7a0b1c69d345bd98a14/win32/x64/user-setup/CursorUserSetup-x64-0.48.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/0139db98f117ab50fcaaf7a0b1c69d345bd98a14/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.1.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/0139db98f117ab50fcaaf7a0b1c69d345bd98a14/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/0139db98f117ab50fcaaf7a0b1c69d345bd98a14/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/0139db98f117ab50fcaaf7a0b1c69d345bd98a14/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/0139db98f117ab50fcaaf7a0b1c69d345bd98a14/linux/x64/Cursor-0.48.1-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/0139db98f117ab50fcaaf7a0b1c69d345bd98a14/linux/arm64/Cursor-0.48.1-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">New onboarding</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.48.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-24</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/3def0c1e43c375c98c36c3e60d2304e1c465bd5c/win32/x64/user-setup/CursorUserSetup-x64-0.48.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/3def0c1e43c375c98c36c3e60d2304e1c465bd5c/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.0.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/3def0c1e43c375c98c36c3e60d2304e1c465bd5c/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/3def0c1e43c375c98c36c3e60d2304e1c465bd5c/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/3def0c1e43c375c98c36c3e60d2304e1c465bd5c/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/3def0c1e43c375c98c36c3e60d2304e1c465bd5c/linux/x64/Cursor-0.48.0-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/3def0c1e43c375c98c36c3e60d2304e1c465bd5c/linux/arm64/Cursor-0.48.0-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.47.9</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-23</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/b6fb41b5f36bda05cab7109606e7404a65d1ff32/win32/x64/user-setup/CursorUserSetup-x64-0.47.9.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/b6fb41b5f36bda05cab7109606e7404a65d1ff32/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.9.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/b6fb41b5f36bda05cab7109606e7404a65d1ff32/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/b6fb41b5f36bda05cab7109606e7404a65d1ff32/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/b6fb41b5f36bda05cab7109606e7404a65d1ff32/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/b6fb41b5f36bda05cab7109606e7404a65d1ff32/linux/x64/Cursor-0.47.9-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/b6fb41b5f36bda05cab7109606e7404a65d1ff32/linux/arm64/Cursor-0.47.9-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Performance improvements related to memory usage</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.47.8</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-20</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/win32/x64/user-setup/CursorUserSetup-x64-0.47.8.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.8.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/linux/x64/Cursor-0.47.8-82ef0f61c01d079d1b7e5ab04d88499d5af500e3.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/linux/arm64/Cursor-0.47.8-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;"> UI fix for scrollable model name</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.47.7</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-18</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/33ec0dad159bc0ad620f6bbda539efe90c39748d/win32/x64/user-setup/CursorUserSetup-x64-0.47.7.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/33ec0dad159bc0ad620f6bbda539efe90c39748d/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.7.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/33ec0dad159bc0ad620f6bbda539efe90c39748d/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/33ec0dad159bc0ad620f6bbda539efe90c39748d/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/33ec0dad159bc0ad620f6bbda539efe90c39748d/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.7-33ec0dad159bc0ad620f6bbda539efe90c39748d.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.7-33ec0dad159bc0ad620f6bbda539efe90c39748d.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">MAX mode for 3.7 Sonnet with and without thinking</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.47.6</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-17</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/6a1a6fbc55483584e7022f491c8a167ccac86f22/win32/x64/user-setup/CursorUserSetup-x64-0.47.6.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/6a1a6fbc55483584e7022f491c8a167ccac86f22/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.6.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/6a1a6fbc55483584e7022f491c8a167ccac86f22/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/6a1a6fbc55483584e7022f491c8a167ccac86f22/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/6a1a6fbc55483584e7022f491c8a167ccac86f22/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.6-6a1a6fbc55483584e7022f491c8a167ccac86f22.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.6-6a1a6fbc55483584e7022f491c8a167ccac86f22.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Faster applies, warns user when edits fails because of cursorignore</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.47.5</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-14</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/53d6da1322f934a1058e7569ee0847b24879d18c/win32/x64/user-setup/CursorUserSetup-x64-0.47.5.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/53d6da1322f934a1058e7569ee0847b24879d18c/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.5.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/53d6da1322f934a1058e7569ee0847b24879d18c/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/53d6da1322f934a1058e7569ee0847b24879d18c/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/53d6da1322f934a1058e7569ee0847b24879d18c/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.5-53d6da1322f934a1058e7569ee0847b24879d18c.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.5-53d6da1322f934a1058e7569ee0847b24879d18c.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Client-side support for upcoming MAX mode compatbility for Claude 3.7 Sonnet</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.47.4</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-14</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/8f8a2000673d2c48f6cac5eea2f3f9f2ed5e4ec2/win32/x64/user-setup/CursorUserSetup-x64-0.47.4.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/8f8a2000673d2c48f6cac5eea2f3f9f2ed5e4ec2/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.4.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/8f8a2000673d2c48f6cac5eea2f3f9f2ed5e4ec2/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/8f8a2000673d2c48f6cac5eea2f3f9f2ed5e4ec2/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/8f8a2000673d2c48f6cac5eea2f3f9f2ed5e4ec2/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.4-8f8a2000673d2c48f6cac5eea2f3f9f2ed5e4ec2.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.4-8f8a2000673d2c48f6cac5eea2f3f9f2ed5e4ec2.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Fixes an edge case where red diffs stick around in the editor</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.47.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-13</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/dab1538cd064aebd4292f9de48b05022c974aff6/win32/x64/user-setup/CursorUserSetup-x64-0.47.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/dab1538cd064aebd4292f9de48b05022c974aff6/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.3.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/dab1538cd064aebd4292f9de48b05022c974aff6/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/dab1538cd064aebd4292f9de48b05022c974aff6/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/dab1538cd064aebd4292f9de48b05022c974aff6/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.3-dab1538cd064aebd4292f9de48b05022c974aff6.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.3-dab1538cd064aebd4292f9de48b05022c974aff6.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Fixes an issue with tool call errors on file edits</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.47.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-13</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/bed609aa4a57e9d82664006f152d3f77589eed10/win32/x64/user-setup/CursorUserSetup-x64-0.47.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/bed609aa4a57e9d82664006f152d3f77589eed10/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.2.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/bed609aa4a57e9d82664006f152d3f77589eed10/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/bed609aa4a57e9d82664006f152d3f77589eed10/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/bed609aa4a57e9d82664006f152d3f77589eed10/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.2-bed609aa4a57e9d82664006f152d3f77589eed10.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.2-bed609aa4a57e9d82664006f152d3f77589eed10.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Cursor Tab accepts work with single-line selections</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.47.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-11</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/aafb3fe1326c939656bd06f325a9e17679aeec7f/win32/x64/user-setup/CursorUserSetup-x64-0.47.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/aafb3fe1326c939656bd06f325a9e17679aeec7f/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.1.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/aafb3fe1326c939656bd06f325a9e17679aeec7f/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/aafb3fe1326c939656bd06f325a9e17679aeec7f/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/aafb3fe1326c939656bd06f325a9e17679aeec7f/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.1-aafb3fe1326c939656bd06f325a9e17679aeec7f.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.1-aafb3fe1326c939656bd06f325a9e17679aeec7f.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Improved performance, added back play button to apply code blocks</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.47.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-11</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/4a602340d7b014d700647120bae9079607f2ae9b/win32/x64/user-setup/CursorUserSetup-x64-0.47.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/4a602340d7b014d700647120bae9079607f2ae9b/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.0.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/4a602340d7b014d700647120bae9079607f2ae9b/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/4a602340d7b014d700647120bae9079607f2ae9b/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/4a602340d7b014d700647120bae9079607f2ae9b/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.0-4a602340d7b014d700647120bae9079607f2ae9b.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.0-4a602340d7b014d700647120bae9079607f2ae9b.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.46.11</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-07</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/ae378be9dc2f5f1a6a1a220c6e25f9f03c8d4e19/win32/x64/user-setup/CursorUserSetup-x64-0.46.11.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/ae378be9dc2f5f1a6a1a220c6e25f9f03c8d4e19/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.11.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/ae378be9dc2f5f1a6a1a220c6e25f9f03c8d4e19/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/ae378be9dc2f5f1a6a1a220c6e25f9f03c8d4e19/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/ae378be9dc2f5f1a6a1a220c6e25f9f03c8d4e19/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.11-ae378be9dc2f5f1a6a1a220c6e25f9f03c8d4e19.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.11-ae378be9dc2f5f1a6a1a220c6e25f9f03c8d4e19.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Release track picker (prerelease or standard), fix for dmg installer not working in rare cases</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.46.10</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-06</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/7b3e0d45d4f952938dbd8e1e29c1b17003198481/win32/x64/user-setup/CursorUserSetup-x64-0.46.10.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/7b3e0d45d4f952938dbd8e1e29c1b17003198481/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.10.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/7b3e0d45d4f952938dbd8e1e29c1b17003198481/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/7b3e0d45d4f952938dbd8e1e29c1b17003198481/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/7b3e0d45d4f952938dbd8e1e29c1b17003198481/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.10-7b3e0d45d4f952938dbd8e1e29c1b17003198481.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.10-7b3e0d45d4f952938dbd8e1e29c1b17003198481.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Fix for chat/apply not working with .github and other . prefixed folders, and small performance fixes.</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.46.9</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-05</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3395357a4ee2975d5d03595e7607ee84e3db0f2c/win32/x64/user-setup/CursorUserSetup-x64-0.46.9.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3395357a4ee2975d5d03595e7607ee84e3db0f2c/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.9.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3395357a4ee2975d5d03595e7607ee84e3db0f2c/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3395357a4ee2975d5d03595e7607ee84e3db0f2c/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3395357a4ee2975d5d03595e7607ee84e3db0f2c/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.9-3395357a4ee2975d5d03595e7607ee84e3db0f2c.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.9-3395357a4ee2975d5d03595e7607ee84e3db0f2c.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Memory and performances fixes, composer/chat remembers your last mode selection, http/1.1 support for agent/chat, linux python env vars fixed, cursorignore fixes</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.46.8</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-01</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/be4f0962469499f009005e66867c8402202ff0b7/win32/x64/user-setup/CursorUserSetup-x64-0.46.8.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/be4f0962469499f009005e66867c8402202ff0b7/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.8.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/be4f0962469499f009005e66867c8402202ff0b7/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/be4f0962469499f009005e66867c8402202ff0b7/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/be4f0962469499f009005e66867c8402202ff0b7/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.8-be4f0962469499f009005e66867c8402202ff0b7.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.8-be4f0962469499f009005e66867c8402202ff0b7.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Fix for windows 'rename tools' update error, fix for some users unable to cancel agent terminal commands</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.46.7</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-02-27</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3611c5390c448b242ab97e328493bb8ef7241e61/win32/x64/user-setup/CursorUserSetup-x64-0.46.7.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3611c5390c448b242ab97e328493bb8ef7241e61/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.7.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3611c5390c448b242ab97e328493bb8ef7241e61/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3611c5390c448b242ab97e328493bb8ef7241e61/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3611c5390c448b242ab97e328493bb8ef7241e61/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.7-3611c5390c448b242ab97e328493bb8ef7241e61.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.7-3611c5390c448b242ab97e328493bb8ef7241e61.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Improved memory usage and performance</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.46.6</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-02-26</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/5ac4b6282478aa0f4d1bfc032412616523788843/win32/x64/user-setup/CursorUserSetup-x64-0.46.6.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/5ac4b6282478aa0f4d1bfc032412616523788843/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.6.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/5ac4b6282478aa0f4d1bfc032412616523788843/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/5ac4b6282478aa0f4d1bfc032412616523788843/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/5ac4b6282478aa0f4d1bfc032412616523788843/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.6-5ac4b6282478aa0f4d1bfc032412616523788843.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.6-5ac4b6282478aa0f4d1bfc032412616523788843.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Improved Windows installation process</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.46.5</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-02-26</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/9fa6e431b47f723d1bac24802102dd2fd8ea72b0/win32/x64/user-setup/CursorUserSetup-x64-0.46.5.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/9fa6e431b47f723d1bac24802102dd2fd8ea72b0/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.5.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/9fa6e431b47f723d1bac24802102dd2fd8ea72b0/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/9fa6e431b47f723d1bac24802102dd2fd8ea72b0/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/9fa6e431b47f723d1bac24802102dd2fd8ea72b0/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.5-9fa6e431b47f723d1bac24802102dd2fd8ea72b0.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.5-9fa6e431b47f723d1bac24802102dd2fd8ea72b0.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Resolved issues with extended tool calls, long Composer sessions, and retry functionality</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.46.4</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-02-25</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/db71624816f6d52f6e54f47c37cdc7df23e22623/win32/x64/user-setup/CursorUserSetup-x64-0.46.4.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/db71624816f6d52f6e54f47c37cdc7df23e22623/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.4.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/db71624816f6d52f6e54f47c37cdc7df23e22623/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/db71624816f6d52f6e54f47c37cdc7df23e22623/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/db71624816f6d52f6e54f47c37cdc7df23e22623/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.4-db71624816f6d52f6e54f47c37cdc7df23e22623.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.4-db71624816f6d52f6e54f47c37cdc7df23e22623.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Added support for multiple image attachments and fixed "User aborted request" error</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.46.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-02-25</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/fce3511bab261b4c986797f3e1e40e7621bbd012/win32/x64/user-setup/CursorUserSetup-x64-0.46.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/fce3511bab261b4c986797f3e1e40e7621bbd012/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.3.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/fce3511bab261b4c986797f3e1e40e7621bbd012/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/fce3511bab261b4c986797f3e1e40e7621bbd012/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/fce3511bab261b4c986797f3e1e40e7621bbd012/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.3-fce3511bab261b4c986797f3e1e40e7621bbd012.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.3-fce3511bab261b4c986797f3e1e40e7621bbd012.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Enhanced download reliability, fixed keybinding issue</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.46.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-02-23</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/84b9c6d907219bb8c2874f299540eb6a079187ab/win32/x64/user-setup/CursorUserSetup-x64-0.46.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/84b9c6d907219bb8c2874f299540eb6a079187ab/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.2.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/84b9c6d907219bb8c2874f299540eb6a079187ab/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/84b9c6d907219bb8c2874f299540eb6a079187ab/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/84b9c6d907219bb8c2874f299540eb6a079187ab/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.2-84b9c6d907219bb8c2874f299540eb6a079187ab.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.2-84b9c6d907219bb8c2874f299540eb6a079187ab.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Improved MCP reliability, added option to disable yolo mode for MCP</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.46.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-02-23</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/69ce6c261e430e5be69213f1e721e50142477715/win32/x64/user-setup/CursorUserSetup-x64-0.46.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/69ce6c261e430e5be69213f1e721e50142477715/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.1.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/69ce6c261e430e5be69213f1e721e50142477715/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/69ce6c261e430e5be69213f1e721e50142477715/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/69ce6c261e430e5be69213f1e721e50142477715/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.1-69ce6c261e430e5be69213f1e721e50142477715.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.1-69ce6c261e430e5be69213f1e721e50142477715.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">Fixed HTTP2 and system certificate errors, resolved memory leaks</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.46.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-02-22</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/aff57e1d9a74ed627fb5bd393e347079514436a7/win32/x64/user-setup/CursorUserSetup-x64-0.46.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/aff57e1d9a74ed627fb5bd393e347079514436a7/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.0.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/aff57e1d9a74ed627fb5bd393e347079514436a7/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/aff57e1d9a74ed627fb5bd393e347079514436a7/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/aff57e1d9a74ed627fb5bd393e347079514436a7/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.0-aff57e1d9a74ed627fb5bd393e347079514436a7.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.0-aff57e1d9a74ed627fb5bd393e347079514436a7.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.17</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-05</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.17/windows/x64/Cursor-Setup-0.45.17.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.17/windows/arm64/Cursor-Setup-0.45.17-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.17/macos/universal/Cursor-0.45.17-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.17/macos/x64/Cursor-0.45.17.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.17/macos/arm64/Cursor-0.45.17-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.17/linux/x64/Cursor-0.45.17.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.14</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-02-19</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.14/windows/x64/Cursor-Setup-0.45.14.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.14/windows/arm64/Cursor-Setup-0.45.14-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.14/macos/x64/Cursor-0.45.14.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.14/macos/arm64/Cursor-0.45.14-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.14/linux/x64/Cursor-0.45.14.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.12</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-02-18</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.12/windows/x64/Cursor-Setup-0.45.12.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.12/windows/arm64/Cursor-Setup-0.45.12-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.12/macos/x64/Cursor-0.45.12.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.12/macos/arm64/Cursor-0.45.12-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.12/linux/x64/Cursor-0.45.12.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.11</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-02-07</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.11/windows/x64/Cursor-Setup-0.45.11.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.11/windows/arm64/Cursor-Setup-0.45.11-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.11/macos/x64/Cursor-0.45.11.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.11/macos/arm64/Cursor-0.45.11-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.11/linux/x64/Cursor-0.45.11.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.10</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-02-05</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.10/windows/x64/Cursor-Setup-0.45.10.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.10/windows/arm64/Cursor-Setup-0.45.10-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.10/macos/x64/Cursor-0.45.10.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.10/macos/arm64/Cursor-0.45.10-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.10/linux/x64/Cursor-0.45.10.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.9</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-02-02</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.9/windows/x64/Cursor-Setup-0.45.9.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.9/windows/arm64/Cursor-Setup-0.45.9-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.9/macos/x64/Cursor-0.45.9.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.9/macos/arm64/Cursor-0.45.9-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.9/linux/x64/Cursor-0.45.9.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.8</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-02-01</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.8/windows/x64/Cursor-Setup-0.45.8.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.8/windows/arm64/Cursor-Setup-0.45.8-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.8/macos/x64/Cursor-0.45.8.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.8/macos/arm64/Cursor-0.45.8-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.8/linux/x64/Cursor-0.45.8.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.7</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-01-30</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.7/windows/x64/Cursor-Setup-0.45.7.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.7/windows/arm64/Cursor-Setup-0.45.7-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.7/macos/x64/Cursor-0.45.7.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.7/macos/arm64/Cursor-0.45.7-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.7/linux/x64/Cursor-0.45.7.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.6</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-01-30</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.6/windows/x64/Cursor-Setup-0.45.6.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.6/windows/arm64/Cursor-Setup-0.45.6-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.6/macos/x64/Cursor-0.45.6.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.6/macos/arm64/Cursor-0.45.6-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.6/linux/x64/Cursor-0.45.6.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.5</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-01-28</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.5/windows/x64/Cursor-Setup-0.45.5.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.5/windows/arm64/Cursor-Setup-0.45.5-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.5/macos/x64/Cursor-0.45.5.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.5/macos/arm64/Cursor-0.45.5-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.5/linux/x64/Cursor-0.45.5.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.4</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-01-26</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.4/windows/x64/Cursor-Setup-0.45.4.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.4/windows/arm64/Cursor-Setup-0.45.4-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.4/macos/x64/Cursor-0.45.4.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.4/macos/arm64/Cursor-0.45.4-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.4/linux/x64/Cursor-0.45.4.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-01-24</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.3/windows/x64/Cursor-Setup-0.45.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.3/windows/arm64/Cursor-Setup-0.45.3-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.3/macos/x64/Cursor-0.45.3.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.3/macos/arm64/Cursor-0.45.3-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.3/linux/x64/Cursor-0.45.3.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-01-23</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.2/windows/x64/Cursor-Setup-0.45.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.2/windows/arm64/Cursor-Setup-0.45.2-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.2/macos/x64/Cursor-0.45.2.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.2/macos/arm64/Cursor-0.45.2-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.2/linux/x64/Cursor-0.45.2.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-01-21</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.1/windows/x64/Cursor-Setup-0.45.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.1/windows/arm64/Cursor-Setup-0.45.1-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.1/macos/x64/Cursor-0.45.1.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.1/macos/arm64/Cursor-0.45.1-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.1/linux/x64/Cursor-0.45.1.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.45.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-01-20</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.0/windows/x64/Cursor-Setup-0.45.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.0/windows/arm64/Cursor-Setup-0.45.0-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.0/macos/x64/Cursor-0.45.0.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.45.0/macos/arm64/Cursor-0.45.0-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.45.0/linux/x64/Cursor-0.45.0.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.44.11</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-01-03</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.11/windows/x64/Cursor-Setup-0.44.11.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.11/windows/arm64/Cursor-Setup-0.44.11-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.11/macos/x64/Cursor-0.44.11.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.11/macos/arm64/Cursor-0.44.11-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.11/linux/x64/Cursor-0.44.11.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.44.10</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-01-02</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.10/windows/x64/Cursor-Setup-0.44.10.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.10/windows/arm64/Cursor-Setup-0.44.10-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.10/macos/x64/Cursor-0.44.10.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.10/macos/arm64/Cursor-0.44.10-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.10/linux/x64/Cursor-0.44.10.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.44.9</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-12-26</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.9/windows/x64/Cursor-Setup-0.44.9.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.9/windows/arm64/Cursor-Setup-0.44.9-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.9/macos/x64/Cursor-0.44.9.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.9/macos/arm64/Cursor-0.44.9-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.9/linux/x64/Cursor-0.44.9.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.44.8</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-12-22</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.8/windows/x64/Cursor-Setup-0.44.8.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.8/windows/arm64/Cursor-Setup-0.44.8-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.8/macos/x64/Cursor-0.44.8.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.8/macos/arm64/Cursor-0.44.8-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.8/linux/x64/Cursor-0.44.8.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.44.7</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-12-22</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.7/windows/x64/Cursor-Setup-0.44.7.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.7/windows/arm64/Cursor-Setup-0.44.7-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.7/macos/x64/Cursor-0.44.7.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.7/macos/arm64/Cursor-0.44.7-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.7/linux/x64/Cursor-0.44.7.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.44.6</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-12-21</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.6/windows/x64/Cursor-Setup-0.44.6.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.6/windows/arm64/Cursor-Setup-0.44.6-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.6/macos/x64/Cursor-0.44.6.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.6/macos/arm64/Cursor-0.44.6-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.6/linux/x64/Cursor-0.44.6.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.44.5</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-12-20</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.5/windows/x64/Cursor-Setup-0.44.5.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.5/windows/arm64/Cursor-Setup-0.44.5-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.5/macos/x64/Cursor-0.44.5.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.5/macos/arm64/Cursor-0.44.5-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.5/linux/x64/Cursor-0.44.5.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.44.4</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-12-19</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.4/windows/x64/Cursor-Setup-0.44.4.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.4/windows/arm64/Cursor-Setup-0.44.4-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.4/macos/x64/Cursor-0.44.4.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.4/macos/arm64/Cursor-0.44.4-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.4/linux/x64/Cursor-0.44.4.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.44.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-12-18</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.3/windows/x64/Cursor-Setup-0.44.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.3/windows/arm64/Cursor-Setup-0.44.3-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.3/macos/x64/Cursor-0.44.3.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.3/macos/arm64/Cursor-0.44.3-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.3/linux/x64/Cursor-0.44.3.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.44.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-12-18</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.2/windows/x64/Cursor-Setup-0.44.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.2/windows/arm64/Cursor-Setup-0.44.2-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.2/macos/x64/Cursor-0.44.2.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.2/macos/arm64/Cursor-0.44.2-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.2/linux/x64/Cursor-0.44.2.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.44.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-12-18</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.0/windows/x64/Cursor-Setup-0.44.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.0/windows/arm64/Cursor-Setup-0.44.0-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.0/macos/x64/Cursor-0.44.0.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.44.0/macos/arm64/Cursor-0.44.0-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.44.0/linux/x64/Cursor-0.44.0.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.43.6</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-12-06</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.6/windows/x64/Cursor-Setup-0.43.6.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.43.6/windows/arm64/Cursor-Setup-0.43.6-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.6/macos/x64/Cursor-0.43.6.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.43.6/macos/arm64/Cursor-0.43.6-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.6/linux/x64/Cursor-0.43.6.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.43.5</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-11-27</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.5/windows/x64/Cursor-Setup-0.43.5.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.43.5/windows/arm64/Cursor-Setup-0.43.5-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.5/macos/x64/Cursor-0.43.5.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.43.5/macos/arm64/Cursor-0.43.5-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.5/linux/x64/Cursor-0.43.5.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.43.4</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-11-26</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.4/windows/x64/Cursor-Setup-0.43.4.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.43.4/windows/arm64/Cursor-Setup-0.43.4-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.4/macos/x64/Cursor-0.43.4.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.43.4/macos/arm64/Cursor-0.43.4-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.4/linux/x64/Cursor-0.43.4.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.43.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-11-24</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.3/windows/x64/Cursor-Setup-0.43.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.43.3/windows/arm64/Cursor-Setup-0.43.3-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.3/macos/x64/Cursor-0.43.3.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.43.3/macos/arm64/Cursor-0.43.3-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.3/linux/x64/Cursor-0.43.3.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.43.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-11-24</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.1/windows/x64/Cursor-Setup-0.43.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.43.1/windows/arm64/Cursor-Setup-0.43.1-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.1/macos/x64/Cursor-0.43.1.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.43.1/macos/arm64/Cursor-0.43.1-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.1/linux/x64/Cursor-0.43.1.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.43.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-11-24</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.0/windows/x64/Cursor-Setup-0.43.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.43.0/windows/arm64/Cursor-Setup-0.43.0-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.0/macos/x64/Cursor-0.43.0.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.43.0/macos/arm64/Cursor-0.43.0-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.43.0/linux/x64/Cursor-0.43.0.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.42.5</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-11-14</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.5/windows/x64/Cursor-Setup-0.42.5.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.42.5/windows/arm64/Cursor-Setup-0.42.5-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.5/macos/x64/Cursor-0.42.5.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.42.5/macos/arm64/Cursor-0.42.5-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.5/linux/x64/Cursor-0.42.5.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.42.4</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-10-29</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.4/windows/x64/Cursor-Setup-0.42.4.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.42.4/windows/arm64/Cursor-Setup-0.42.4-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.4/macos/x64/Cursor-0.42.4.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.42.4/macos/arm64/Cursor-0.42.4-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.4/linux/x64/Cursor-0.42.4.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.42.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-10-16</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.3/windows/x64/Cursor-Setup-0.42.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.3/macos/x64/Cursor-0.42.3.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.42.3/macos/arm64/Cursor-0.42.3-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.3/linux/x64/Cursor-0.42.3.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.42.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-10-12</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.2/windows/x64/Cursor-Setup-0.42.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.2/macos/x64/Cursor-0.42.2.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.42.2/macos/arm64/Cursor-0.42.2-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.2/linux/x64/Cursor-0.42.2.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.42.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-10-11</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.1/windows/x64/Cursor-Setup-0.42.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.1/macos/x64/Cursor-0.42.1.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.42.1/macos/arm64/Cursor-0.42.1-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.1/linux/x64/Cursor-0.42.1.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.42.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-10-09</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.0/windows/x64/Cursor-Setup-0.42.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.0/macos/x64/Cursor-0.42.0.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.42.0/macos/arm64/Cursor-0.42.0-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.42.0/linux/x64/Cursor-0.42.0.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.41.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-09-25</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.41.3/windows/x64/Cursor-Setup-0.41.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.41.3/macos/x64/Cursor-0.41.3.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.41.3/macos/arm64/Cursor-0.41.3-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.41.3/linux/x64/Cursor-0.41.3.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.41.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-09-21</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.41.2/windows/x64/Cursor-Setup-0.41.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.41.2/macos/x64/Cursor-0.41.2.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.41.2/macos/arm64/Cursor-0.41.2-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.41.2/linux/x64/Cursor-0.41.2.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.41.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-09-18</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.41.1/windows/x64/Cursor-Setup-0.41.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.41.1/macos/x64/Cursor-0.41.1.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.41.1/macos/arm64/Cursor-0.41.1-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.41.1/linux/x64/Cursor-0.41.1.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.40.4</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-09-05</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.4/windows/x64/Cursor-Setup-0.40.4.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.4/macos/x64/Cursor-0.40.4.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.40.4/macos/arm64/Cursor-0.40.4-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.4/linux/x64/Cursor-0.40.4.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.40.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-08-29</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.3/windows/x64/Cursor-Setup-0.40.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.3/macos/x64/Cursor-0.40.3.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.40.3/macos/arm64/Cursor-0.40.3-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.3/linux/x64/Cursor-0.40.3.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.40.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-08-28</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.2/windows/x64/Cursor-Setup-0.40.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.2/macos/x64/Cursor-0.40.2.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.40.2/macos/arm64/Cursor-0.40.2-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.2/linux/x64/Cursor-0.40.2.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.40.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-08-24</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.1/windows/x64/Cursor-Setup-0.40.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.1/macos/x64/Cursor-0.40.1.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.40.1/macos/arm64/Cursor-0.40.1-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.1/linux/x64/Cursor-0.40.1.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.40.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-08-22</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.0/windows/x64/Cursor-Setup-0.40.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.0/macos/x64/Cursor-0.40.0.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.40.0/macos/arm64/Cursor-0.40.0-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.40.0/linux/x64/Cursor-0.40.0.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.39.6</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-08-19</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.6/windows/x64/Cursor-Setup-0.39.6.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.6/macos/x64/Cursor-0.39.6.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.39.6/macos/arm64/Cursor-0.39.6-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.6/linux/x64/Cursor-0.39.6.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.39.5</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-08-14</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.5/windows/x64/Cursor-Setup-0.39.5.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.5/macos/x64/Cursor-0.39.5.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.39.5/macos/arm64/Cursor-0.39.5-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.5/linux/x64/Cursor-0.39.5.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.39.4</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-08-10</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.4/windows/x64/Cursor-Setup-0.39.4.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.4/macos/x64/Cursor-0.39.4.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.39.4/macos/arm64/Cursor-0.39.4-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.4/linux/x64/Cursor-0.39.4.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.39.3</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-08-09</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.3/windows/x64/Cursor-Setup-0.39.3.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.3/macos/x64/Cursor-0.39.3.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.39.3/macos/arm64/Cursor-0.39.3-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.3/linux/x64/Cursor-0.39.3.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.39.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-08-08</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.2/windows/x64/Cursor-Setup-0.39.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.2/macos/x64/Cursor-0.39.2.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.39.2/macos/arm64/Cursor-0.39.2-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.2/linux/x64/Cursor-0.39.2.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.39.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-08-07</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.1/windows/x64/Cursor-Setup-0.39.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.1/macos/x64/Cursor-0.39.1.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.39.1/macos/arm64/Cursor-0.39.1-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.1/linux/x64/Cursor-0.39.1.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.39.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-08-02</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.0/windows/x64/Cursor-Setup-0.39.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.0/macos/x64/Cursor-0.39.0.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.39.0/macos/arm64/Cursor-0.39.0-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.39.0/linux/x64/Cursor-0.39.0.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.38.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-07-25</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.38.1/windows/x64/Cursor-Setup-0.38.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.38.1/macos/x64/Cursor-0.38.1.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.38.1/macos/arm64/Cursor-0.38.1-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.38.1/linux/x64/Cursor-0.38.1.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.38.0</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-07-23</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.38.0/windows/x64/Cursor-Setup-0.38.0.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.38.0/macos/x64/Cursor-0.38.0.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.38.0/macos/arm64/Cursor-0.38.0-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.38.0/linux/x64/Cursor-0.38.0.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.37.1</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-07-14</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.37.1/windows/x64/Cursor-Setup-0.37.1.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.37.1/macos/x64/Cursor-0.37.1.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.37.1/macos/arm64/Cursor-0.37.1-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.37.1/linux/x64/Cursor-0.37.1.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.36.2</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2024-07-07</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.36.2/windows/x64/Cursor-Setup-0.36.2.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.36.2/macos/x64/Cursor-0.36.2.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.36.2/macos/arm64/Cursor-0.36.2-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.36.2/linux/x64/Cursor-0.36.2.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
</table>
<!-- VERSION_TABLE_END -->
</div>

## 详细版本卡片视图

<!-- DETAILED_CARDS_START -->

<details>
<summary><b>版本 1.4.2</b> (2025-08-06)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.4.2 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/win32/x64/system-setup/CursorSetup-x64-1.4.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/win32/arm64/system-setup/CursorSetup-arm64-1.4.2.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/linux/x64/Cursor-1.4.2-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/07aa3b4519da4feab4761c58da3eeedd253a1671/linux/arm64/Cursor-1.4.2-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.4.1</b> (2025-08-06)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.4.1 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/99b5cf60d85d7216d67a3768cec0e22266159c61/win32/x64/system-setup/CursorSetup-x64-1.4.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/99b5cf60d85d7216d67a3768cec0e22266159c61/win32/arm64/system-setup/CursorSetup-arm64-1.4.1.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/99b5cf60d85d7216d67a3768cec0e22266159c61/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/99b5cf60d85d7216d67a3768cec0e22266159c61/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/99b5cf60d85d7216d67a3768cec0e22266159c61/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/99b5cf60d85d7216d67a3768cec0e22266159c61/linux/x64/Cursor-1.4.1-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/99b5cf60d85d7216d67a3768cec0e22266159c61/linux/arm64/Cursor-1.4.1-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.4.0</b> (2025-08-06)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.4.0 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/2cdf414b520ff31ee87dd841a04d8aa84009eaee/win32/x64/system-setup/CursorSetup-x64-1.4.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/2cdf414b520ff31ee87dd841a04d8aa84009eaee/win32/arm64/system-setup/CursorSetup-arm64-1.4.0.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/2cdf414b520ff31ee87dd841a04d8aa84009eaee/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/2cdf414b520ff31ee87dd841a04d8aa84009eaee/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/2cdf414b520ff31ee87dd841a04d8aa84009eaee/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/2cdf414b520ff31ee87dd841a04d8aa84009eaee/linux/x64/Cursor-1.4.0-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/2cdf414b520ff31ee87dd841a04d8aa84009eaee/linux/arm64/Cursor-1.4.0-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.3.9</b> (2025-08-01)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.3.9 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/54c27320fab08c9f5dd5873f07fca101f7a3e076/win32/x64/system-setup/CursorSetup-x64-1.3.9.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/54c27320fab08c9f5dd5873f07fca101f7a3e076/win32/arm64/system-setup/CursorSetup-arm64-1.3.9.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/54c27320fab08c9f5dd5873f07fca101f7a3e076/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/54c27320fab08c9f5dd5873f07fca101f7a3e076/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/54c27320fab08c9f5dd5873f07fca101f7a3e076/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/54c27320fab08c9f5dd5873f07fca101f7a3e076/linux/x64/Cursor-1.3.9-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/54c27320fab08c9f5dd5873f07fca101f7a3e076/linux/arm64/Cursor-1.3.9-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.3.8</b> (2025-07-31)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.3.8 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/a1fa6fc7d2c2f520293aad84aaa38d091dee6fef/win32/x64/system-setup/CursorSetup-x64-1.3.8.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/a1fa6fc7d2c2f520293aad84aaa38d091dee6fef/win32/arm64/system-setup/CursorSetup-arm64-1.3.8.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/a1fa6fc7d2c2f520293aad84aaa38d091dee6fef/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/a1fa6fc7d2c2f520293aad84aaa38d091dee6fef/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/a1fa6fc7d2c2f520293aad84aaa38d091dee6fef/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/a1fa6fc7d2c2f520293aad84aaa38d091dee6fef/linux/x64/Cursor-1.3.8-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/a1fa6fc7d2c2f520293aad84aaa38d091dee6fef/linux/arm64/Cursor-1.3.8-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.3.7</b> (2025-07-31)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.3.7 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/5d56108ff2401c28f239aa2a527ef424ce7719a3/win32/x64/system-setup/CursorSetup-x64-1.3.7.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/5d56108ff2401c28f239aa2a527ef424ce7719a3/win32/arm64/system-setup/CursorSetup-arm64-1.3.7.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/5d56108ff2401c28f239aa2a527ef424ce7719a3/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/5d56108ff2401c28f239aa2a527ef424ce7719a3/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/5d56108ff2401c28f239aa2a527ef424ce7719a3/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/5d56108ff2401c28f239aa2a527ef424ce7719a3/linux/x64/Cursor-1.3.7-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/5d56108ff2401c28f239aa2a527ef424ce7719a3/linux/arm64/Cursor-1.3.7-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.3.6</b> (2025-07-30)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.3.6 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/68b8fe7396ea37d8acdaaaa08ba316ba359a4162/win32/x64/system-setup/CursorSetup-x64-1.3.6.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/68b8fe7396ea37d8acdaaaa08ba316ba359a4162/win32/arm64/system-setup/CursorSetup-arm64-1.3.6.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/68b8fe7396ea37d8acdaaaa08ba316ba359a4162/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/68b8fe7396ea37d8acdaaaa08ba316ba359a4162/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/68b8fe7396ea37d8acdaaaa08ba316ba359a4162/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/68b8fe7396ea37d8acdaaaa08ba316ba359a4162/linux/x64/Cursor-1.3.6-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/68b8fe7396ea37d8acdaaaa08ba316ba359a4162/linux/arm64/Cursor-1.3.6-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.3.5</b> (2025-07-30)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.3.5 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/9f33c2e793460d00cf95c06d957e1d1b8135fadd/win32/x64/system-setup/CursorSetup-x64-1.3.5.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/9f33c2e793460d00cf95c06d957e1d1b8135fadd/win32/arm64/system-setup/CursorSetup-arm64-1.3.5.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/9f33c2e793460d00cf95c06d957e1d1b8135fadd/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/9f33c2e793460d00cf95c06d957e1d1b8135fadd/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/9f33c2e793460d00cf95c06d957e1d1b8135fadd/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/9f33c2e793460d00cf95c06d957e1d1b8135fadd/linux/x64/Cursor-1.3.5-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/9f33c2e793460d00cf95c06d957e1d1b8135fadd/linux/arm64/Cursor-1.3.5-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.3.4</b> (2025-07-29)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.3.4 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/bfb7c44bcb74430be0a6dd5edf885489879f2a2e/win32/x64/system-setup/CursorSetup-x64-1.3.4.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/bfb7c44bcb74430be0a6dd5edf885489879f2a2e/win32/arm64/system-setup/CursorSetup-arm64-1.3.4.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/bfb7c44bcb74430be0a6dd5edf885489879f2a2e/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/bfb7c44bcb74430be0a6dd5edf885489879f2a2e/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/bfb7c44bcb74430be0a6dd5edf885489879f2a2e/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/bfb7c44bcb74430be0a6dd5edf885489879f2a2e/linux/x64/Cursor-1.3.4-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/bfb7c44bcb74430be0a6dd5edf885489879f2a2e/linux/arm64/Cursor-1.3.4-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.3.3</b> (2025-07-26)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.3.3 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/bbee6a95e82b300524a875b2202fe274c76a5b8e/win32/x64/system-setup/CursorSetup-x64-1.3.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/bbee6a95e82b300524a875b2202fe274c76a5b8e/win32/arm64/system-setup/CursorSetup-arm64-1.3.3.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/bbee6a95e82b300524a875b2202fe274c76a5b8e/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/bbee6a95e82b300524a875b2202fe274c76a5b8e/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/bbee6a95e82b300524a875b2202fe274c76a5b8e/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/bbee6a95e82b300524a875b2202fe274c76a5b8e/linux/x64/Cursor-1.3.3-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/bbee6a95e82b300524a875b2202fe274c76a5b8e/linux/arm64/Cursor-1.3.3-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.3.2</b> (2025-07-25)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.3.2 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/7db9f9f3f612efbde8f318c1a7951aa0926fc1d0/win32/x64/system-setup/CursorSetup-x64-1.3.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/7db9f9f3f612efbde8f318c1a7951aa0926fc1d0/win32/arm64/system-setup/CursorSetup-arm64-1.3.2.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/7db9f9f3f612efbde8f318c1a7951aa0926fc1d0/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/7db9f9f3f612efbde8f318c1a7951aa0926fc1d0/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/7db9f9f3f612efbde8f318c1a7951aa0926fc1d0/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/7db9f9f3f612efbde8f318c1a7951aa0926fc1d0/linux/x64/Cursor-1.3.2-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/7db9f9f3f612efbde8f318c1a7951aa0926fc1d0/linux/arm64/Cursor-1.3.2-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.3.1</b> (2025-07-24)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.3.1 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/4e81c182aa53ca18ee09324336db9c760974e443/win32/x64/system-setup/CursorSetup-x64-1.3.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/4e81c182aa53ca18ee09324336db9c760974e443/win32/arm64/system-setup/CursorSetup-arm64-1.3.1.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/4e81c182aa53ca18ee09324336db9c760974e443/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/4e81c182aa53ca18ee09324336db9c760974e443/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/4e81c182aa53ca18ee09324336db9c760974e443/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/4e81c182aa53ca18ee09324336db9c760974e443/linux/x64/Cursor-1.3.1-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/4e81c182aa53ca18ee09324336db9c760974e443/linux/arm64/Cursor-1.3.1-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.3.0</b> (2025-07-23)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.3.0 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/410000a83355c025daba0c6156955bf08687d081/win32/x64/system-setup/CursorSetup-x64-1.3.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/410000a83355c025daba0c6156955bf08687d081/win32/arm64/system-setup/CursorSetup-arm64-1.3.0.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/410000a83355c025daba0c6156955bf08687d081/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/410000a83355c025daba0c6156955bf08687d081/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/410000a83355c025daba0c6156955bf08687d081/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/410000a83355c025daba0c6156955bf08687d081/linux/x64/Cursor-1.3.0-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/410000a83355c025daba0c6156955bf08687d081/linux/arm64/Cursor-1.3.0-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.2.4</b> (2025-07-10)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.2.4 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/a8e95743c5268be73767c46944a71f4465d05c90/win32/x64/system-setup/CursorSetup-x64-1.2.4.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/a8e95743c5268be73767c46944a71f4465d05c90/win32/arm64/system-setup/CursorSetup-arm64-1.2.4.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/a8e95743c5268be73767c46944a71f4465d05c90/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/a8e95743c5268be73767c46944a71f4465d05c90/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/a8e95743c5268be73767c46944a71f4465d05c90/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/a8e95743c5268be73767c46944a71f4465d05c90/linux/x64/Cursor-1.2.4-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/a8e95743c5268be73767c46944a71f4465d05c90/linux/arm64/Cursor-1.2.4-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.2.3</b> (2025-07-10)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.2.3 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/3af362bc7c6ffdde67ee75328bc9be679d6f3a45/win32/x64/system-setup/CursorSetup-x64-1.2.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/3af362bc7c6ffdde67ee75328bc9be679d6f3a45/win32/arm64/system-setup/CursorSetup-arm64-1.2.3.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/3af362bc7c6ffdde67ee75328bc9be679d6f3a45/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/3af362bc7c6ffdde67ee75328bc9be679d6f3a45/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/3af362bc7c6ffdde67ee75328bc9be679d6f3a45/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/3af362bc7c6ffdde67ee75328bc9be679d6f3a45/linux/x64/Cursor-1.2.3-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/3af362bc7c6ffdde67ee75328bc9be679d6f3a45/linux/arm64/Cursor-1.2.3-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.2.2</b> (2025-07-07)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.2.2 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/faa03b17cce93e8a80b7d62d57f5eda6bb6ab9fa/win32/x64/system-setup/CursorSetup-x64-1.2.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/faa03b17cce93e8a80b7d62d57f5eda6bb6ab9fa/win32/arm64/system-setup/CursorSetup-arm64-1.2.2.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/faa03b17cce93e8a80b7d62d57f5eda6bb6ab9fa/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/faa03b17cce93e8a80b7d62d57f5eda6bb6ab9fa/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/faa03b17cce93e8a80b7d62d57f5eda6bb6ab9fa/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/faa03b17cce93e8a80b7d62d57f5eda6bb6ab9fa/linux/x64/Cursor-1.2.2-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/faa03b17cce93e8a80b7d62d57f5eda6bb6ab9fa/linux/arm64/Cursor-1.2.2-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.2.1</b> (2025-07-03)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.2.1 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/031e7e0ff1e2eda9c1a0f5df67d44053b059c5df/win32/x64/system-setup/CursorSetup-x64-1.2.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/031e7e0ff1e2eda9c1a0f5df67d44053b059c5df/win32/arm64/system-setup/CursorSetup-arm64-1.2.1.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/031e7e0ff1e2eda9c1a0f5df67d44053b059c5df/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/031e7e0ff1e2eda9c1a0f5df67d44053b059c5df/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/031e7e0ff1e2eda9c1a0f5df67d44053b059c5df/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/031e7e0ff1e2eda9c1a0f5df67d44053b059c5df/linux/x64/Cursor-1.2.1-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/031e7e0ff1e2eda9c1a0f5df67d44053b059c5df/linux/arm64/Cursor-1.2.1-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.2.0</b> (2025-07-01)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.2.0 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/eb5fa4768da0747b79dc34f0b79ab20dbf58202c/win32/x64/system-setup/CursorSetup-x64-1.2.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/eb5fa4768da0747b79dc34f0b79ab20dbf58202c/win32/arm64/system-setup/CursorSetup-arm64-1.2.0.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/eb5fa4768da0747b79dc34f0b79ab20dbf58202c/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/eb5fa4768da0747b79dc34f0b79ab20dbf58202c/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/eb5fa4768da0747b79dc34f0b79ab20dbf58202c/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/eb5fa4768da0747b79dc34f0b79ab20dbf58202c/linux/x64/Cursor-1.2.0-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/eb5fa4768da0747b79dc34f0b79ab20dbf58202c/linux/arm64/Cursor-1.2.0-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.1.7</b> (2025-07-01)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.1.7 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/7111807980fa9c93aedd455ffa44b682c0dc1356/win32/x64/system-setup/CursorSetup-x64-1.1.7.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/7111807980fa9c93aedd455ffa44b682c0dc1356/win32/arm64/system-setup/CursorSetup-arm64-1.1.7.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/7111807980fa9c93aedd455ffa44b682c0dc1356/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/7111807980fa9c93aedd455ffa44b682c0dc1356/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/7111807980fa9c93aedd455ffa44b682c0dc1356/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/7111807980fa9c93aedd455ffa44b682c0dc1356/linux/x64/Cursor-1.1.7-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/7111807980fa9c93aedd455ffa44b682c0dc1356/linux/arm64/Cursor-1.1.7-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.1.6</b> (2025-06-25)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.1.6 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/5b19bac7a947f54e4caa3eb7e4c5fbf832389853/win32/x64/system-setup/CursorSetup-x64-1.1.6.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/5b19bac7a947f54e4caa3eb7e4c5fbf832389853/win32/arm64/system-setup/CursorSetup-arm64-1.1.6.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/5b19bac7a947f54e4caa3eb7e4c5fbf832389853/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/5b19bac7a947f54e4caa3eb7e4c5fbf832389853/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/5b19bac7a947f54e4caa3eb7e4c5fbf832389853/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/5b19bac7a947f54e4caa3eb7e4c5fbf832389853/linux/x64/Cursor-1.1.6-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/5b19bac7a947f54e4caa3eb7e4c5fbf832389853/linux/arm64/Cursor-1.1.6-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.1.5</b> (2025-06-21)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.1.5 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/ef5eeb47a684b4c217dfaf0463aa7ea952f8ab95/win32/x64/system-setup/CursorSetup-x64-1.1.5.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/ef5eeb47a684b4c217dfaf0463aa7ea952f8ab95/win32/arm64/system-setup/CursorSetup-arm64-1.1.5.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/ef5eeb47a684b4c217dfaf0463aa7ea952f8ab95/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/ef5eeb47a684b4c217dfaf0463aa7ea952f8ab95/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/ef5eeb47a684b4c217dfaf0463aa7ea952f8ab95/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/ef5eeb47a684b4c217dfaf0463aa7ea952f8ab95/linux/x64/Cursor-1.1.5-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/ef5eeb47a684b4c217dfaf0463aa7ea952f8ab95/linux/arm64/Cursor-1.1.5-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.1.4</b> (2025-06-19)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.1.4 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/e86fcc937643bc6385aebd982c1c66012c98caec/win32/x64/system-setup/CursorSetup-x64-1.1.4.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/e86fcc937643bc6385aebd982c1c66012c98caec/win32/arm64/system-setup/CursorSetup-arm64-1.1.4.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/e86fcc937643bc6385aebd982c1c66012c98caec/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/e86fcc937643bc6385aebd982c1c66012c98caec/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/e86fcc937643bc6385aebd982c1c66012c98caec/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/e86fcc937643bc6385aebd982c1c66012c98caec/linux/x64/Cursor-1.1.4-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/e86fcc937643bc6385aebd982c1c66012c98caec/linux/arm64/Cursor-1.1.4-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.1.3</b> (2025-06-15)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.1.3 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/979ba33804ac150108481c14e0b5cb970bda3266/win32/x64/system-setup/CursorSetup-x64-1.1.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/979ba33804ac150108481c14e0b5cb970bda3266/win32/arm64/system-setup/CursorSetup-arm64-1.1.3.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/979ba33804ac150108481c14e0b5cb970bda3266/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/979ba33804ac150108481c14e0b5cb970bda3266/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/979ba33804ac150108481c14e0b5cb970bda3266/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/979ba33804ac150108481c14e0b5cb970bda3266/linux/x64/Cursor-1.1.3-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/979ba33804ac150108481c14e0b5cb970bda3266/linux/arm64/Cursor-1.1.3-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.1.2</b> (2025-06-13)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.1.2 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/87ea1604be1f602f173c5fb67582e647fcef6c48/win32/x64/system-setup/CursorSetup-x64-1.1.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/87ea1604be1f602f173c5fb67582e647fcef6c48/win32/arm64/system-setup/CursorSetup-arm64-1.1.2.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/87ea1604be1f602f173c5fb67582e647fcef6c48/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/87ea1604be1f602f173c5fb67582e647fcef6c48/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/87ea1604be1f602f173c5fb67582e647fcef6c48/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/87ea1604be1f602f173c5fb67582e647fcef6c48/linux/x64/Cursor-1.1.2-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/87ea1604be1f602f173c5fb67582e647fcef6c48/linux/arm64/Cursor-1.1.2-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.1.1</b> (2025-06-12)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.1.1 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/f81622395bb52bc30ed251a6299eeaf51ab49110/win32/x64/system-setup/CursorSetup-x64-1.1.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/f81622395bb52bc30ed251a6299eeaf51ab49110/win32/arm64/system-setup/CursorSetup-arm64-1.1.1.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/f81622395bb52bc30ed251a6299eeaf51ab49110/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/f81622395bb52bc30ed251a6299eeaf51ab49110/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/f81622395bb52bc30ed251a6299eeaf51ab49110/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/f81622395bb52bc30ed251a6299eeaf51ab49110/linux/x64/Cursor-1.1.1-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/f81622395bb52bc30ed251a6299eeaf51ab49110/linux/arm64/Cursor-1.1.1-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.1.0</b> (2025-06-12)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.1.0 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/b122cddec7bf4e6d7cc8badbae006d08b8e8105c/win32/x64/system-setup/CursorSetup-x64-1.1.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/b122cddec7bf4e6d7cc8badbae006d08b8e8105c/win32/arm64/system-setup/CursorSetup-arm64-1.1.0.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/b122cddec7bf4e6d7cc8badbae006d08b8e8105c/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/b122cddec7bf4e6d7cc8badbae006d08b8e8105c/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/b122cddec7bf4e6d7cc8badbae006d08b8e8105c/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/b122cddec7bf4e6d7cc8badbae006d08b8e8105c/linux/x64/Cursor-1.1.0-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/b122cddec7bf4e6d7cc8badbae006d08b8e8105c/linux/arm64/Cursor-1.1.0-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.0.1</b> (2025-06-07)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.0.1 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/5491d1158b9f2bf4c483cff438c7cc162fd7d131/win32/x64/system-setup/CursorSetup-x64-1.0.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/5491d1158b9f2bf4c483cff438c7cc162fd7d131/win32/arm64/system-setup/CursorSetup-arm64-1.0.1.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/5491d1158b9f2bf4c483cff438c7cc162fd7d131/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/5491d1158b9f2bf4c483cff438c7cc162fd7d131/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/5491d1158b9f2bf4c483cff438c7cc162fd7d131/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/5491d1158b9f2bf4c483cff438c7cc162fd7d131/linux/x64/Cursor-1.0.1-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/5491d1158b9f2bf4c483cff438c7cc162fd7d131/linux/arm64/Cursor-1.0.1-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 1.0.0</b> (2025-06-05)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 1.0.0 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/53b99ce608cba35127ae3a050c1738a959750865/win32/x64/system-setup/CursorSetup-x64-1.0.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/53b99ce608cba35127ae3a050c1738a959750865/win32/arm64/system-setup/CursorSetup-arm64-1.0.0.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/53b99ce608cba35127ae3a050c1738a959750865/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/53b99ce608cba35127ae3a050c1738a959750865/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/53b99ce608cba35127ae3a050c1738a959750865/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/53b99ce608cba35127ae3a050c1738a959750865/linux/x64/Cursor-1.0.0-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/53b99ce608cba35127ae3a050c1738a959750865/linux/arm64/Cursor-1.0.0-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.51.2</b> (2025-06-03)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.51.2 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/f364e608fc11d38303429b80fd1e1f32d7587d43/win32/x64/system-setup/CursorSetup-x64-0.51.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/f364e608fc11d38303429b80fd1e1f32d7587d43/win32/arm64/system-setup/CursorSetup-arm64-0.51.2.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/f364e608fc11d38303429b80fd1e1f32d7587d43/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/f364e608fc11d38303429b80fd1e1f32d7587d43/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/f364e608fc11d38303429b80fd1e1f32d7587d43/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/f364e608fc11d38303429b80fd1e1f32d7587d43/linux/x64/Cursor-0.51.2-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/f364e608fc11d38303429b80fd1e1f32d7587d43/linux/arm64/Cursor-0.51.2-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.51.1</b> (2025-05-31)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.51.1 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/a9dd46cbd249a30044eaae1526eb6ca1ec2f7568/win32/x64/system-setup/CursorSetup-x64-0.51.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/a9dd46cbd249a30044eaae1526eb6ca1ec2f7568/win32/arm64/system-setup/CursorSetup-arm64-0.51.1.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/a9dd46cbd249a30044eaae1526eb6ca1ec2f7568/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/a9dd46cbd249a30044eaae1526eb6ca1ec2f7568/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/a9dd46cbd249a30044eaae1526eb6ca1ec2f7568/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/a9dd46cbd249a30044eaae1526eb6ca1ec2f7568/linux/x64/Cursor-0.51.1-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/a9dd46cbd249a30044eaae1526eb6ca1ec2f7568/linux/arm64/Cursor-0.51.1-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.51.0</b> (2025-05-30)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.51.0 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/adaabf32700c570904618df5bd7166988f3d079b/win32/x64/system-setup/CursorSetup-x64-0.51.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/adaabf32700c570904618df5bd7166988f3d079b/win32/arm64/system-setup/CursorSetup-arm64-0.51.0.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/adaabf32700c570904618df5bd7166988f3d079b/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/adaabf32700c570904618df5bd7166988f3d079b/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/adaabf32700c570904618df5bd7166988f3d079b/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/adaabf32700c570904618df5bd7166988f3d079b/linux/x64/Cursor-0.51.0-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/adaabf32700c570904618df5bd7166988f3d079b/linux/arm64/Cursor-0.51.0-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.50.7</b> (2025-05-24)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.50.7 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/02270c8441bdc4b2fdbc30e6f470a589ec78d60d/win32/x64/system-setup/CursorSetup-x64-0.50.7.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/02270c8441bdc4b2fdbc30e6f470a589ec78d60d/win32/arm64/system-setup/CursorSetup-arm64-0.50.7.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/02270c8441bdc4b2fdbc30e6f470a589ec78d60d/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/02270c8441bdc4b2fdbc30e6f470a589ec78d60d/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/02270c8441bdc4b2fdbc30e6f470a589ec78d60d/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/02270c8441bdc4b2fdbc30e6f470a589ec78d60d/linux/x64/Cursor-0.50.7-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/02270c8441bdc4b2fdbc30e6f470a589ec78d60d/linux/arm64/Cursor-0.50.7-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.50.6</b> (2025-05-23)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.50.6 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/f3f2ad556456ff2df80332923bb1e2a818110d1b/win32/x64/system-setup/CursorSetup-x64-0.50.6.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/f3f2ad556456ff2df80332923bb1e2a818110d1b/win32/arm64/system-setup/CursorSetup-arm64-0.50.6.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/f3f2ad556456ff2df80332923bb1e2a818110d1b/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/f3f2ad556456ff2df80332923bb1e2a818110d1b/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/f3f2ad556456ff2df80332923bb1e2a818110d1b/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/f3f2ad556456ff2df80332923bb1e2a818110d1b/linux/x64/Cursor-0.50.6-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/f3f2ad556456ff2df80332923bb1e2a818110d1b/linux/arm64/Cursor-0.50.6-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.50.5</b> (2025-05-18)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.50.5 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/96e5b01ca25f8fbd4c4c10bc69b15f6228c80771/win32/x64/system-setup/CursorSetup-x64-0.50.5.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/96e5b01ca25f8fbd4c4c10bc69b15f6228c80771/win32/arm64/system-setup/CursorSetup-arm64-0.50.5.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/96e5b01ca25f8fbd4c4c10bc69b15f6228c80771/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/96e5b01ca25f8fbd4c4c10bc69b15f6228c80771/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/96e5b01ca25f8fbd4c4c10bc69b15f6228c80771/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/96e5b01ca25f8fbd4c4c10bc69b15f6228c80771/linux/x64/Cursor-0.50.5-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/96e5b01ca25f8fbd4c4c10bc69b15f6228c80771/linux/arm64/Cursor-0.50.5-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.50.4</b> (2025-05-14)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.50.4 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/8ea935e79a50a02da912a034bbeda84a6d3d355d/win32/x64/system-setup/CursorSetup-x64-0.50.4.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/8ea935e79a50a02da912a034bbeda84a6d3d355d/win32/arm64/system-setup/CursorSetup-arm64-0.50.4.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/8ea935e79a50a02da912a034bbeda84a6d3d355d/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/8ea935e79a50a02da912a034bbeda84a6d3d355d/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/8ea935e79a50a02da912a034bbeda84a6d3d355d/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/8ea935e79a50a02da912a034bbeda84a6d3d355d/linux/x64/Cursor-0.50.4-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/8ea935e79a50a02da912a034bbeda84a6d3d355d/linux/arm64/Cursor-0.50.4-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.50.3</b> (2025-05-13)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.50.3 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/7ae22cf8cd5af9e08b62585dd03d10f5f610acf9/win32/x64/system-setup/CursorSetup-x64-0.50.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/7ae22cf8cd5af9e08b62585dd03d10f5f610acf9/win32/arm64/system-setup/CursorSetup-arm64-0.50.3.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/7ae22cf8cd5af9e08b62585dd03d10f5f610acf9/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/7ae22cf8cd5af9e08b62585dd03d10f5f610acf9/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/7ae22cf8cd5af9e08b62585dd03d10f5f610acf9/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/7ae22cf8cd5af9e08b62585dd03d10f5f610acf9/linux/x64/Cursor-0.50.3-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/7ae22cf8cd5af9e08b62585dd03d10f5f610acf9/linux/arm64/Cursor-0.50.3-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.50.2</b> (2025-05-13)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.50.2 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/fc3e38722d374aeba23729a31220a4f0662e3c9b/win32/x64/system-setup/CursorSetup-x64-0.50.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/fc3e38722d374aeba23729a31220a4f0662e3c9b/win32/arm64/system-setup/CursorSetup-arm64-0.50.2.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/fc3e38722d374aeba23729a31220a4f0662e3c9b/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/fc3e38722d374aeba23729a31220a4f0662e3c9b/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/fc3e38722d374aeba23729a31220a4f0662e3c9b/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/fc3e38722d374aeba23729a31220a4f0662e3c9b/linux/x64/Cursor-0.50.2-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/fc3e38722d374aeba23729a31220a4f0662e3c9b/linux/arm64/Cursor-0.50.2-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.50.1</b> (2025-05-11)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.50.1 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/81bf18c2ba01d6e7e886875bdb6d1d04ac31c1f7/win32/x64/system-setup/CursorSetup-x64-0.50.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/81bf18c2ba01d6e7e886875bdb6d1d04ac31c1f7/win32/arm64/system-setup/CursorSetup-arm64-0.50.1.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/81bf18c2ba01d6e7e886875bdb6d1d04ac31c1f7/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/81bf18c2ba01d6e7e886875bdb6d1d04ac31c1f7/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/81bf18c2ba01d6e7e886875bdb6d1d04ac31c1f7/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/81bf18c2ba01d6e7e886875bdb6d1d04ac31c1f7/linux/x64/Cursor-0.50.1-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/81bf18c2ba01d6e7e886875bdb6d1d04ac31c1f7/linux/arm64/Cursor-0.50.1-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.50.0</b> (2025-05-09)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.50.0 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/bbfa51c1211255cbbde8b558e014a593f44051f4/win32/x64/system-setup/CursorSetup-x64-0.50.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/bbfa51c1211255cbbde8b558e014a593f44051f4/win32/arm64/system-setup/CursorSetup-arm64-0.50.0.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/bbfa51c1211255cbbde8b558e014a593f44051f4/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/bbfa51c1211255cbbde8b558e014a593f44051f4/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/bbfa51c1211255cbbde8b558e014a593f44051f4/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/bbfa51c1211255cbbde8b558e014a593f44051f4/linux/x64/Cursor-0.50.0-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/bbfa51c1211255cbbde8b558e014a593f44051f4/linux/arm64/Cursor-0.50.0-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.49.6</b> (2025-04-25)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.49.6 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/0781e811de386a0c5bcb07ceb259df8ff8246a52/win32/x64/system-setup/CursorSetup-x64-0.49.6.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/0781e811de386a0c5bcb07ceb259df8ff8246a52/win32/arm64/system-setup/CursorSetup-arm64-0.49.6.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/0781e811de386a0c5bcb07ceb259df8ff8246a52/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/0781e811de386a0c5bcb07ceb259df8ff8246a52/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/0781e811de386a0c5bcb07ceb259df8ff8246a52/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/0781e811de386a0c5bcb07ceb259df8ff8246a52/linux/x64/Cursor-0.49.6-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/0781e811de386a0c5bcb07ceb259df8ff8246a52/linux/arm64/Cursor-0.49.6-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.49.5</b> (2025-04-24)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.49.5 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/fd861c8a80c0f9e4e35294b1915ee8a7b29ae858/win32/x64/system-setup/CursorSetup-x64-0.49.5.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/fd861c8a80c0f9e4e35294b1915ee8a7b29ae858/win32/arm64/system-setup/CursorSetup-arm64-0.49.5.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/fd861c8a80c0f9e4e35294b1915ee8a7b29ae858/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/fd861c8a80c0f9e4e35294b1915ee8a7b29ae858/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/fd861c8a80c0f9e4e35294b1915ee8a7b29ae858/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/fd861c8a80c0f9e4e35294b1915ee8a7b29ae858/linux/x64/Cursor-0.49.5-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/fd861c8a80c0f9e4e35294b1915ee8a7b29ae858/linux/arm64/Cursor-0.49.5-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.49.4</b> (2025-04-22)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.49.4 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/ec408037b24566b11e6132c58bbe6ad27046eb91/win32/x64/system-setup/CursorSetup-x64-0.49.4.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/ec408037b24566b11e6132c58bbe6ad27046eb91/win32/arm64/system-setup/CursorSetup-arm64-0.49.4.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/ec408037b24566b11e6132c58bbe6ad27046eb91/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/ec408037b24566b11e6132c58bbe6ad27046eb91/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/ec408037b24566b11e6132c58bbe6ad27046eb91/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/ec408037b24566b11e6132c58bbe6ad27046eb91/linux/x64/Cursor-0.49.4-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/ec408037b24566b11e6132c58bbe6ad27046eb91/linux/arm64/Cursor-0.49.4-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.49.3</b> (2025-04-21)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.49.3 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/224bc1da1a36703c583d62e407d4bccbb8c6a641/win32/x64/system-setup/CursorSetup-x64-0.49.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/224bc1da1a36703c583d62e407d4bccbb8c6a641/win32/arm64/system-setup/CursorSetup-arm64-0.49.3.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/224bc1da1a36703c583d62e407d4bccbb8c6a641/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/224bc1da1a36703c583d62e407d4bccbb8c6a641/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/224bc1da1a36703c583d62e407d4bccbb8c6a641/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/224bc1da1a36703c583d62e407d4bccbb8c6a641/linux/x64/Cursor-0.49.3-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/224bc1da1a36703c583d62e407d4bccbb8c6a641/linux/arm64/Cursor-0.49.3-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.49.2</b> (2025-04-19)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.49.2 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/1d0a7a3b734be5aea27e30d0c56d2a6e2c79da74/win32/x64/system-setup/CursorSetup-x64-0.49.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/1d0a7a3b734be5aea27e30d0c56d2a6e2c79da74/win32/arm64/system-setup/CursorSetup-arm64-0.49.2.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/1d0a7a3b734be5aea27e30d0c56d2a6e2c79da74/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/1d0a7a3b734be5aea27e30d0c56d2a6e2c79da74/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/1d0a7a3b734be5aea27e30d0c56d2a6e2c79da74/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/1d0a7a3b734be5aea27e30d0c56d2a6e2c79da74/linux/x64/Cursor-0.49.2-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/1d0a7a3b734be5aea27e30d0c56d2a6e2c79da74/linux/arm64/Cursor-0.49.2-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.49.1</b> (2025-04-17)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.49.1 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/4c8fb291b08c52a5d2fee1b4463620092c4ed7ca/win32/x64/system-setup/CursorSetup-x64-0.49.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/4c8fb291b08c52a5d2fee1b4463620092c4ed7ca/win32/arm64/system-setup/CursorSetup-arm64-0.49.1.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/4c8fb291b08c52a5d2fee1b4463620092c4ed7ca/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/4c8fb291b08c52a5d2fee1b4463620092c4ed7ca/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/4c8fb291b08c52a5d2fee1b4463620092c4ed7ca/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/4c8fb291b08c52a5d2fee1b4463620092c4ed7ca/linux/x64/Cursor-0.49.1-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/4c8fb291b08c52a5d2fee1b4463620092c4ed7ca/linux/arm64/Cursor-0.49.1-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.49.0</b> (2025-04-16)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.49.0 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/88a47f0edd42a2ba73afb018ada9fe9eda7df75f/win32/x64/system-setup/CursorSetup-x64-0.49.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/88a47f0edd42a2ba73afb018ada9fe9eda7df75f/win32/arm64/system-setup/CursorSetup-arm64-0.49.0.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/88a47f0edd42a2ba73afb018ada9fe9eda7df75f/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/88a47f0edd42a2ba73afb018ada9fe9eda7df75f/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/88a47f0edd42a2ba73afb018ada9fe9eda7df75f/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/88a47f0edd42a2ba73afb018ada9fe9eda7df75f/linux/x64/Cursor-0.49.0-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/88a47f0edd42a2ba73afb018ada9fe9eda7df75f/linux/arm64/Cursor-0.49.0-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.48.9</b> (2025-04-13)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.48.9 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/win32/x64/system-setup/CursorSetup-x64-0.48.9.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/win32/arm64/system-setup/CursorSetup-arm64-0.48.9.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/linux/x64/Cursor-0.48.9-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/61e99179e4080fecf9d8b92c6e2e3e00fbfb53f4/linux/arm64/Cursor-0.48.9-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.48.8</b> (2025-04-07)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.48.8 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/7801a556824585b7f2721900066bc87c4a09b743/win32/x64/system-setup/CursorSetup-x64-0.48.8.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/7801a556824585b7f2721900066bc87c4a09b743/win32/arm64/system-setup/CursorSetup-arm64-0.48.8.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/7801a556824585b7f2721900066bc87c4a09b743/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/7801a556824585b7f2721900066bc87c4a09b743/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/7801a556824585b7f2721900066bc87c4a09b743/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/7801a556824585b7f2721900066bc87c4a09b743/linux/x64/Cursor-0.48.8-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/7801a556824585b7f2721900066bc87c4a09b743/linux/arm64/Cursor-0.48.8-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.48.7</b> (2025-04-02)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.48.7 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/1d623c4cc1d3bb6e0fe4f1d5434b47b958b05876/win32/x64/system-setup/CursorSetup-x64-0.48.7.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/1d623c4cc1d3bb6e0fe4f1d5434b47b958b05876/win32/arm64/system-setup/CursorSetup-arm64-0.48.7.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/1d623c4cc1d3bb6e0fe4f1d5434b47b958b05876/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/1d623c4cc1d3bb6e0fe4f1d5434b47b958b05876/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/1d623c4cc1d3bb6e0fe4f1d5434b47b958b05876/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/1d623c4cc1d3bb6e0fe4f1d5434b47b958b05876/linux/x64/Cursor-0.48.7-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/1d623c4cc1d3bb6e0fe4f1d5434b47b958b05876/linux/arm64/Cursor-0.48.7-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.48.6</b> (2025-03-31)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.48.6 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/1649e229afdef8fd1d18ea173f063563f1e722ef/win32/x64/user-setup/CursorUserSetup-x64-0.48.6.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/1649e229afdef8fd1d18ea173f063563f1e722ef/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.6.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/1649e229afdef8fd1d18ea173f063563f1e722ef/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/1649e229afdef8fd1d18ea173f063563f1e722ef/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/1649e229afdef8fd1d18ea173f063563f1e722ef/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/1649e229afdef8fd1d18ea173f063563f1e722ef/linux/x64/Cursor-0.48.6-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/1649e229afdef8fd1d18ea173f063563f1e722ef/linux/arm64/Cursor-0.48.6-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.48.5</b> (2025-03-31)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.48.5 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/ec8ef865575596e5c64d3b6cf9a933b93ad4ac02/win32/x64/user-setup/CursorUserSetup-x64-0.48.5.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/ec8ef865575596e5c64d3b6cf9a933b93ad4ac02/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.5.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/ec8ef865575596e5c64d3b6cf9a933b93ad4ac02/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/ec8ef865575596e5c64d3b6cf9a933b93ad4ac02/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/ec8ef865575596e5c64d3b6cf9a933b93ad4ac02/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/ec8ef865575596e5c64d3b6cf9a933b93ad4ac02/linux/x64/Cursor-0.48.5-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/ec8ef865575596e5c64d3b6cf9a933b93ad4ac02/linux/arm64/Cursor-0.48.5-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.48.4</b> (2025-03-29)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.48.4 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/2d6a87f894b91f2d4a045294e1ad36d208023ccb/win32/x64/user-setup/CursorUserSetup-x64-0.48.4.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/2d6a87f894b91f2d4a045294e1ad36d208023ccb/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.4.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/2d6a87f894b91f2d4a045294e1ad36d208023ccb/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/2d6a87f894b91f2d4a045294e1ad36d208023ccb/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/2d6a87f894b91f2d4a045294e1ad36d208023ccb/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/2d6a87f894b91f2d4a045294e1ad36d208023ccb/linux/x64/Cursor-0.48.4-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/2d6a87f894b91f2d4a045294e1ad36d208023ccb/linux/arm64/Cursor-0.48.4-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.48.3</b> (2025-03-29)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.48.3 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/d0f2e6e7e022d8e024f7eb7d085cadf3d1f4df20/win32/x64/user-setup/CursorUserSetup-x64-0.48.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/d0f2e6e7e022d8e024f7eb7d085cadf3d1f4df20/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.3.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/d0f2e6e7e022d8e024f7eb7d085cadf3d1f4df20/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/d0f2e6e7e022d8e024f7eb7d085cadf3d1f4df20/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/d0f2e6e7e022d8e024f7eb7d085cadf3d1f4df20/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/d0f2e6e7e022d8e024f7eb7d085cadf3d1f4df20/linux/x64/Cursor-0.48.3-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/d0f2e6e7e022d8e024f7eb7d085cadf3d1f4df20/linux/arm64/Cursor-0.48.3-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.48.2</b> (2025-03-26)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.48.2 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/7d6318dfcfbf7c12a87e33c06978f23167a6de3c/win32/x64/user-setup/CursorUserSetup-x64-0.48.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/7d6318dfcfbf7c12a87e33c06978f23167a6de3c/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.2.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/7d6318dfcfbf7c12a87e33c06978f23167a6de3c/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/7d6318dfcfbf7c12a87e33c06978f23167a6de3c/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/7d6318dfcfbf7c12a87e33c06978f23167a6de3c/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/7d6318dfcfbf7c12a87e33c06978f23167a6de3c/linux/x64/Cursor-0.48.2-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/7d6318dfcfbf7c12a87e33c06978f23167a6de3c/linux/arm64/Cursor-0.48.2-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.48.1</b> (2025-03-24)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.48.1 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/0139db98f117ab50fcaaf7a0b1c69d345bd98a14/win32/x64/user-setup/CursorUserSetup-x64-0.48.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/0139db98f117ab50fcaaf7a0b1c69d345bd98a14/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.1.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/0139db98f117ab50fcaaf7a0b1c69d345bd98a14/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/0139db98f117ab50fcaaf7a0b1c69d345bd98a14/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/0139db98f117ab50fcaaf7a0b1c69d345bd98a14/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/0139db98f117ab50fcaaf7a0b1c69d345bd98a14/linux/x64/Cursor-0.48.1-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/0139db98f117ab50fcaaf7a0b1c69d345bd98a14/linux/arm64/Cursor-0.48.1-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.48.0</b> (2025-03-24)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.48.0 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/3def0c1e43c375c98c36c3e60d2304e1c465bd5c/win32/x64/user-setup/CursorUserSetup-x64-0.48.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/3def0c1e43c375c98c36c3e60d2304e1c465bd5c/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.0.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/3def0c1e43c375c98c36c3e60d2304e1c465bd5c/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/3def0c1e43c375c98c36c3e60d2304e1c465bd5c/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/3def0c1e43c375c98c36c3e60d2304e1c465bd5c/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/3def0c1e43c375c98c36c3e60d2304e1c465bd5c/linux/x64/Cursor-0.48.0-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/3def0c1e43c375c98c36c3e60d2304e1c465bd5c/linux/arm64/Cursor-0.48.0-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.47.9</b> (2025-03-23)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.47.9 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/b6fb41b5f36bda05cab7109606e7404a65d1ff32/win32/x64/user-setup/CursorUserSetup-x64-0.47.9.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/b6fb41b5f36bda05cab7109606e7404a65d1ff32/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.9.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/b6fb41b5f36bda05cab7109606e7404a65d1ff32/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/b6fb41b5f36bda05cab7109606e7404a65d1ff32/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/b6fb41b5f36bda05cab7109606e7404a65d1ff32/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/b6fb41b5f36bda05cab7109606e7404a65d1ff32/linux/x64/Cursor-0.47.9-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/b6fb41b5f36bda05cab7109606e7404a65d1ff32/linux/arm64/Cursor-0.47.9-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.47.8</b> (2025-03-20)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.47.8 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/win32/x64/user-setup/CursorUserSetup-x64-0.47.8.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.8.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/linux/x64/Cursor-0.47.8-82ef0f61c01d079d1b7e5ab04d88499d5af500e3.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/linux/arm64/Cursor-0.47.8-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.47.7</b> (2025-03-18)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.47.7 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/33ec0dad159bc0ad620f6bbda539efe90c39748d/win32/x64/user-setup/CursorUserSetup-x64-0.47.7.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/33ec0dad159bc0ad620f6bbda539efe90c39748d/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.7.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/33ec0dad159bc0ad620f6bbda539efe90c39748d/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/33ec0dad159bc0ad620f6bbda539efe90c39748d/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/33ec0dad159bc0ad620f6bbda539efe90c39748d/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.7-33ec0dad159bc0ad620f6bbda539efe90c39748d.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.7-33ec0dad159bc0ad620f6bbda539efe90c39748d.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.47.6</b> (2025-03-17)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.47.6 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/6a1a6fbc55483584e7022f491c8a167ccac86f22/win32/x64/user-setup/CursorUserSetup-x64-0.47.6.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/6a1a6fbc55483584e7022f491c8a167ccac86f22/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.6.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/6a1a6fbc55483584e7022f491c8a167ccac86f22/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/6a1a6fbc55483584e7022f491c8a167ccac86f22/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/6a1a6fbc55483584e7022f491c8a167ccac86f22/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.6-6a1a6fbc55483584e7022f491c8a167ccac86f22.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.6-6a1a6fbc55483584e7022f491c8a167ccac86f22.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.47.5</b> (2025-03-14)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.47.5 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/53d6da1322f934a1058e7569ee0847b24879d18c/win32/x64/user-setup/CursorUserSetup-x64-0.47.5.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/53d6da1322f934a1058e7569ee0847b24879d18c/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.5.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/53d6da1322f934a1058e7569ee0847b24879d18c/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/53d6da1322f934a1058e7569ee0847b24879d18c/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/53d6da1322f934a1058e7569ee0847b24879d18c/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.5-53d6da1322f934a1058e7569ee0847b24879d18c.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.5-53d6da1322f934a1058e7569ee0847b24879d18c.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.47.4</b> (2025-03-14)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.47.4 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/8f8a2000673d2c48f6cac5eea2f3f9f2ed5e4ec2/win32/x64/user-setup/CursorUserSetup-x64-0.47.4.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/8f8a2000673d2c48f6cac5eea2f3f9f2ed5e4ec2/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.4.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/8f8a2000673d2c48f6cac5eea2f3f9f2ed5e4ec2/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/8f8a2000673d2c48f6cac5eea2f3f9f2ed5e4ec2/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/8f8a2000673d2c48f6cac5eea2f3f9f2ed5e4ec2/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.4-8f8a2000673d2c48f6cac5eea2f3f9f2ed5e4ec2.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.4-8f8a2000673d2c48f6cac5eea2f3f9f2ed5e4ec2.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.47.3</b> (2025-03-13)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.47.3 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/dab1538cd064aebd4292f9de48b05022c974aff6/win32/x64/user-setup/CursorUserSetup-x64-0.47.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/dab1538cd064aebd4292f9de48b05022c974aff6/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.3.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/dab1538cd064aebd4292f9de48b05022c974aff6/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/dab1538cd064aebd4292f9de48b05022c974aff6/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/dab1538cd064aebd4292f9de48b05022c974aff6/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.3-dab1538cd064aebd4292f9de48b05022c974aff6.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.3-dab1538cd064aebd4292f9de48b05022c974aff6.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.47.2</b> (2025-03-13)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.47.2 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/bed609aa4a57e9d82664006f152d3f77589eed10/win32/x64/user-setup/CursorUserSetup-x64-0.47.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/bed609aa4a57e9d82664006f152d3f77589eed10/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.2.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/bed609aa4a57e9d82664006f152d3f77589eed10/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/bed609aa4a57e9d82664006f152d3f77589eed10/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/bed609aa4a57e9d82664006f152d3f77589eed10/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.2-bed609aa4a57e9d82664006f152d3f77589eed10.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.2-bed609aa4a57e9d82664006f152d3f77589eed10.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.47.1</b> (2025-03-11)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.47.1 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/aafb3fe1326c939656bd06f325a9e17679aeec7f/win32/x64/user-setup/CursorUserSetup-x64-0.47.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/aafb3fe1326c939656bd06f325a9e17679aeec7f/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.1.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/aafb3fe1326c939656bd06f325a9e17679aeec7f/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/aafb3fe1326c939656bd06f325a9e17679aeec7f/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/aafb3fe1326c939656bd06f325a9e17679aeec7f/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.1-aafb3fe1326c939656bd06f325a9e17679aeec7f.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.1-aafb3fe1326c939656bd06f325a9e17679aeec7f.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.47.0</b> (2025-03-11)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.47.0 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/4a602340d7b014d700647120bae9079607f2ae9b/win32/x64/user-setup/CursorUserSetup-x64-0.47.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/4a602340d7b014d700647120bae9079607f2ae9b/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.0.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/4a602340d7b014d700647120bae9079607f2ae9b/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/4a602340d7b014d700647120bae9079607f2ae9b/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/4a602340d7b014d700647120bae9079607f2ae9b/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/client/linux/x64/appimage/Cursor-0.47.0-4a602340d7b014d700647120bae9079607f2ae9b.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/client/linux/arm64/appimage/Cursor-0.47.0-4a602340d7b014d700647120bae9079607f2ae9b.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.46.11</b> (2025-03-07)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.46.11 下载链接</h3>

#### Windows
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/ae378be9dc2f5f1a6a1a220c6e25f9f03c8d4e19/win32/x64/user-setup/CursorUserSetup-x64-0.46.11.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/ae378be9dc2f5f1a6a1a220c6e25f9f03c8d4e19/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.11.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/ae378be9dc2f5f1a6a1a220c6e25f9f03c8d4e19/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/ae378be9dc2f5f1a6a1a220c6e25f9f03c8d4e19/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/ae378be9dc2f5f1a6a1a220c6e25f9f03c8d4e19/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.11-ae378be9dc2f5f1a6a1a220c6e25f9f03c8d4e19.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.11-ae378be9dc2f5f1a6a1a220c6e25f9f03c8d4e19.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.46.10</b> (2025-03-06)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.46.10 下载链接</h3>

#### Windows
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/7b3e0d45d4f952938dbd8e1e29c1b17003198481/win32/x64/user-setup/CursorUserSetup-x64-0.46.10.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/7b3e0d45d4f952938dbd8e1e29c1b17003198481/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.10.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/7b3e0d45d4f952938dbd8e1e29c1b17003198481/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/7b3e0d45d4f952938dbd8e1e29c1b17003198481/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/7b3e0d45d4f952938dbd8e1e29c1b17003198481/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.10-7b3e0d45d4f952938dbd8e1e29c1b17003198481.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.10-7b3e0d45d4f952938dbd8e1e29c1b17003198481.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.46.9</b> (2025-03-05)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.46.9 下载链接</h3>

#### Windows
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3395357a4ee2975d5d03595e7607ee84e3db0f2c/win32/x64/user-setup/CursorUserSetup-x64-0.46.9.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3395357a4ee2975d5d03595e7607ee84e3db0f2c/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.9.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3395357a4ee2975d5d03595e7607ee84e3db0f2c/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3395357a4ee2975d5d03595e7607ee84e3db0f2c/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3395357a4ee2975d5d03595e7607ee84e3db0f2c/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.9-3395357a4ee2975d5d03595e7607ee84e3db0f2c.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.9-3395357a4ee2975d5d03595e7607ee84e3db0f2c.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.46.8</b> (2025-03-01)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.46.8 下载链接</h3>

#### Windows
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/be4f0962469499f009005e66867c8402202ff0b7/win32/x64/user-setup/CursorUserSetup-x64-0.46.8.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/be4f0962469499f009005e66867c8402202ff0b7/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.8.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/be4f0962469499f009005e66867c8402202ff0b7/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/be4f0962469499f009005e66867c8402202ff0b7/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/be4f0962469499f009005e66867c8402202ff0b7/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.8-be4f0962469499f009005e66867c8402202ff0b7.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.8-be4f0962469499f009005e66867c8402202ff0b7.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.46.7</b> (2025-02-27)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.46.7 下载链接</h3>

#### Windows
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3611c5390c448b242ab97e328493bb8ef7241e61/win32/x64/user-setup/CursorUserSetup-x64-0.46.7.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3611c5390c448b242ab97e328493bb8ef7241e61/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.7.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3611c5390c448b242ab97e328493bb8ef7241e61/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3611c5390c448b242ab97e328493bb8ef7241e61/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/3611c5390c448b242ab97e328493bb8ef7241e61/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.7-3611c5390c448b242ab97e328493bb8ef7241e61.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.7-3611c5390c448b242ab97e328493bb8ef7241e61.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.46.6</b> (2025-02-26)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.46.6 下载链接</h3>

#### Windows
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/5ac4b6282478aa0f4d1bfc032412616523788843/win32/x64/user-setup/CursorUserSetup-x64-0.46.6.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/5ac4b6282478aa0f4d1bfc032412616523788843/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.6.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/5ac4b6282478aa0f4d1bfc032412616523788843/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/5ac4b6282478aa0f4d1bfc032412616523788843/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/5ac4b6282478aa0f4d1bfc032412616523788843/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.6-5ac4b6282478aa0f4d1bfc032412616523788843.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.6-5ac4b6282478aa0f4d1bfc032412616523788843.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.46.5</b> (2025-02-26)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.46.5 下载链接</h3>

#### Windows
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/9fa6e431b47f723d1bac24802102dd2fd8ea72b0/win32/x64/user-setup/CursorUserSetup-x64-0.46.5.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/9fa6e431b47f723d1bac24802102dd2fd8ea72b0/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.5.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/9fa6e431b47f723d1bac24802102dd2fd8ea72b0/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/9fa6e431b47f723d1bac24802102dd2fd8ea72b0/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/9fa6e431b47f723d1bac24802102dd2fd8ea72b0/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.5-9fa6e431b47f723d1bac24802102dd2fd8ea72b0.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.5-9fa6e431b47f723d1bac24802102dd2fd8ea72b0.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.46.4</b> (2025-02-25)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.46.4 下载链接</h3>

#### Windows
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/db71624816f6d52f6e54f47c37cdc7df23e22623/win32/x64/user-setup/CursorUserSetup-x64-0.46.4.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/db71624816f6d52f6e54f47c37cdc7df23e22623/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.4.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/db71624816f6d52f6e54f47c37cdc7df23e22623/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/db71624816f6d52f6e54f47c37cdc7df23e22623/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/db71624816f6d52f6e54f47c37cdc7df23e22623/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.4-db71624816f6d52f6e54f47c37cdc7df23e22623.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.4-db71624816f6d52f6e54f47c37cdc7df23e22623.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.46.3</b> (2025-02-25)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.46.3 下载链接</h3>

#### Windows
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/fce3511bab261b4c986797f3e1e40e7621bbd012/win32/x64/user-setup/CursorUserSetup-x64-0.46.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/fce3511bab261b4c986797f3e1e40e7621bbd012/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.3.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/fce3511bab261b4c986797f3e1e40e7621bbd012/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/fce3511bab261b4c986797f3e1e40e7621bbd012/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/fce3511bab261b4c986797f3e1e40e7621bbd012/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.3-fce3511bab261b4c986797f3e1e40e7621bbd012.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.3-fce3511bab261b4c986797f3e1e40e7621bbd012.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.46.2</b> (2025-02-23)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.46.2 下载链接</h3>

#### Windows
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/84b9c6d907219bb8c2874f299540eb6a079187ab/win32/x64/user-setup/CursorUserSetup-x64-0.46.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/84b9c6d907219bb8c2874f299540eb6a079187ab/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.2.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/84b9c6d907219bb8c2874f299540eb6a079187ab/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/84b9c6d907219bb8c2874f299540eb6a079187ab/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/84b9c6d907219bb8c2874f299540eb6a079187ab/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.2-84b9c6d907219bb8c2874f299540eb6a079187ab.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.2-84b9c6d907219bb8c2874f299540eb6a079187ab.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.46.1</b> (2025-02-23)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.46.1 下载链接</h3>

#### Windows
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/69ce6c261e430e5be69213f1e721e50142477715/win32/x64/user-setup/CursorUserSetup-x64-0.46.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/69ce6c261e430e5be69213f1e721e50142477715/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.1.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/69ce6c261e430e5be69213f1e721e50142477715/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/69ce6c261e430e5be69213f1e721e50142477715/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/69ce6c261e430e5be69213f1e721e50142477715/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.1-69ce6c261e430e5be69213f1e721e50142477715.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.1-69ce6c261e430e5be69213f1e721e50142477715.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.46.0</b> (2025-02-22)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.46.0 下载链接</h3>

#### Windows
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/aff57e1d9a74ed627fb5bd393e347079514436a7/win32/x64/user-setup/CursorUserSetup-x64-0.46.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/aff57e1d9a74ed627fb5bd393e347079514436a7/win32/arm64/user-setup/CursorUserSetup-arm64-0.46.0.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/aff57e1d9a74ed627fb5bd393e347079514436a7/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/aff57e1d9a74ed627fb5bd393e347079514436a7/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/aff57e1d9a74ed627fb5bd393e347079514436a7/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/x64/appimage/Cursor-0.46.0-aff57e1d9a74ed627fb5bd393e347079514436a7.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://anysphere-binaries.s3.us-east-1.amazonaws.com/production/client/linux/arm64/appimage/Cursor-0.46.0-aff57e1d9a74ed627fb5bd393e347079514436a7.deb.glibc2.28-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.17</b> (2025-03-05)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.17 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.17/windows/x64/Cursor-Setup-0.45.17.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.17/windows/arm64/Cursor-Setup-0.45.17-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.17/macos/universal/Cursor-0.45.17-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.17/macos/x64/Cursor-0.45.17.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.17/macos/arm64/Cursor-0.45.17-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.17/linux/x64/Cursor-0.45.17.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.14</b> (2025-02-19)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.14 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.14/windows/x64/Cursor-Setup-0.45.14.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.14/windows/arm64/Cursor-Setup-0.45.14-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.14/macos/x64/Cursor-0.45.14.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.14/macos/arm64/Cursor-0.45.14-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.14/linux/x64/Cursor-0.45.14.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.12</b> (2025-02-18)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.12 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.12/windows/x64/Cursor-Setup-0.45.12.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.12/windows/arm64/Cursor-Setup-0.45.12-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.12/macos/x64/Cursor-0.45.12.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.12/macos/arm64/Cursor-0.45.12-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.12/linux/x64/Cursor-0.45.12.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.11</b> (2025-02-07)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.11 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.11/windows/x64/Cursor-Setup-0.45.11.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.11/windows/arm64/Cursor-Setup-0.45.11-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.11/macos/x64/Cursor-0.45.11.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.11/macos/arm64/Cursor-0.45.11-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.11/linux/x64/Cursor-0.45.11.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.10</b> (2025-02-05)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.10 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.10/windows/x64/Cursor-Setup-0.45.10.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.10/windows/arm64/Cursor-Setup-0.45.10-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.10/macos/x64/Cursor-0.45.10.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.10/macos/arm64/Cursor-0.45.10-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.10/linux/x64/Cursor-0.45.10.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.9</b> (2025-02-02)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.9 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.9/windows/x64/Cursor-Setup-0.45.9.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.9/windows/arm64/Cursor-Setup-0.45.9-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.9/macos/x64/Cursor-0.45.9.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.9/macos/arm64/Cursor-0.45.9-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.9/linux/x64/Cursor-0.45.9.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.8</b> (2025-02-01)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.8 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.8/windows/x64/Cursor-Setup-0.45.8.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.8/windows/arm64/Cursor-Setup-0.45.8-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.8/macos/x64/Cursor-0.45.8.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.8/macos/arm64/Cursor-0.45.8-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.8/linux/x64/Cursor-0.45.8.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.7</b> (2025-01-30)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.7 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.7/windows/x64/Cursor-Setup-0.45.7.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.7/windows/arm64/Cursor-Setup-0.45.7-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.7/macos/x64/Cursor-0.45.7.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.7/macos/arm64/Cursor-0.45.7-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.7/linux/x64/Cursor-0.45.7.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.6</b> (2025-01-30)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.6 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.6/windows/x64/Cursor-Setup-0.45.6.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.6/windows/arm64/Cursor-Setup-0.45.6-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.6/macos/x64/Cursor-0.45.6.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.6/macos/arm64/Cursor-0.45.6-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.6/linux/x64/Cursor-0.45.6.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.5</b> (2025-01-28)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.5 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.5/windows/x64/Cursor-Setup-0.45.5.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.5/windows/arm64/Cursor-Setup-0.45.5-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.5/macos/x64/Cursor-0.45.5.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.5/macos/arm64/Cursor-0.45.5-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.5/linux/x64/Cursor-0.45.5.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.4</b> (2025-01-26)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.4 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.4/windows/x64/Cursor-Setup-0.45.4.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.4/windows/arm64/Cursor-Setup-0.45.4-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.4/macos/x64/Cursor-0.45.4.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.4/macos/arm64/Cursor-0.45.4-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.4/linux/x64/Cursor-0.45.4.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.3</b> (2025-01-24)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.3 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.3/windows/x64/Cursor-Setup-0.45.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.3/windows/arm64/Cursor-Setup-0.45.3-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.3/macos/x64/Cursor-0.45.3.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.3/macos/arm64/Cursor-0.45.3-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.3/linux/x64/Cursor-0.45.3.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.2</b> (2025-01-23)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.2 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.2/windows/x64/Cursor-Setup-0.45.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.2/windows/arm64/Cursor-Setup-0.45.2-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.2/macos/x64/Cursor-0.45.2.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.2/macos/arm64/Cursor-0.45.2-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.2/linux/x64/Cursor-0.45.2.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.1</b> (2025-01-21)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.1 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.1/windows/x64/Cursor-Setup-0.45.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.1/windows/arm64/Cursor-Setup-0.45.1-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.1/macos/x64/Cursor-0.45.1.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.1/macos/arm64/Cursor-0.45.1-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.1/linux/x64/Cursor-0.45.1.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.45.0</b> (2025-01-20)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.45.0 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.0/windows/x64/Cursor-Setup-0.45.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.0/windows/arm64/Cursor-Setup-0.45.0-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.0/macos/x64/Cursor-0.45.0.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.0/macos/arm64/Cursor-0.45.0-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.45.0/linux/x64/Cursor-0.45.0.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.44.11</b> (2025-01-03)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.44.11 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.11/windows/x64/Cursor-Setup-0.44.11.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.11/windows/arm64/Cursor-Setup-0.44.11-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.11/macos/x64/Cursor-0.44.11.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.11/macos/arm64/Cursor-0.44.11-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.11/linux/x64/Cursor-0.44.11.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.44.10</b> (2025-01-02)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.44.10 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.10/windows/x64/Cursor-Setup-0.44.10.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.10/windows/arm64/Cursor-Setup-0.44.10-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.10/macos/x64/Cursor-0.44.10.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.10/macos/arm64/Cursor-0.44.10-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.10/linux/x64/Cursor-0.44.10.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.44.9</b> (2024-12-26)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.44.9 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.9/windows/x64/Cursor-Setup-0.44.9.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.9/windows/arm64/Cursor-Setup-0.44.9-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.9/macos/x64/Cursor-0.44.9.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.9/macos/arm64/Cursor-0.44.9-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.9/linux/x64/Cursor-0.44.9.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.44.8</b> (2024-12-22)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.44.8 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.8/windows/x64/Cursor-Setup-0.44.8.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.8/windows/arm64/Cursor-Setup-0.44.8-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.8/macos/x64/Cursor-0.44.8.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.8/macos/arm64/Cursor-0.44.8-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.8/linux/x64/Cursor-0.44.8.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.44.7</b> (2024-12-22)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.44.7 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.7/windows/x64/Cursor-Setup-0.44.7.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.7/windows/arm64/Cursor-Setup-0.44.7-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.7/macos/x64/Cursor-0.44.7.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.7/macos/arm64/Cursor-0.44.7-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.7/linux/x64/Cursor-0.44.7.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.44.6</b> (2024-12-21)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.44.6 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.6/windows/x64/Cursor-Setup-0.44.6.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.6/windows/arm64/Cursor-Setup-0.44.6-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.6/macos/x64/Cursor-0.44.6.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.6/macos/arm64/Cursor-0.44.6-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.6/linux/x64/Cursor-0.44.6.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.44.5</b> (2024-12-20)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.44.5 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.5/windows/x64/Cursor-Setup-0.44.5.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.5/windows/arm64/Cursor-Setup-0.44.5-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.5/macos/x64/Cursor-0.44.5.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.5/macos/arm64/Cursor-0.44.5-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.5/linux/x64/Cursor-0.44.5.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.44.4</b> (2024-12-19)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.44.4 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.4/windows/x64/Cursor-Setup-0.44.4.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.4/windows/arm64/Cursor-Setup-0.44.4-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.4/macos/x64/Cursor-0.44.4.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.4/macos/arm64/Cursor-0.44.4-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.4/linux/x64/Cursor-0.44.4.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.44.3</b> (2024-12-18)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.44.3 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.3/windows/x64/Cursor-Setup-0.44.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.3/windows/arm64/Cursor-Setup-0.44.3-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.3/macos/x64/Cursor-0.44.3.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.3/macos/arm64/Cursor-0.44.3-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.3/linux/x64/Cursor-0.44.3.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.44.2</b> (2024-12-18)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.44.2 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.2/windows/x64/Cursor-Setup-0.44.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.2/windows/arm64/Cursor-Setup-0.44.2-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.2/macos/x64/Cursor-0.44.2.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.2/macos/arm64/Cursor-0.44.2-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.2/linux/x64/Cursor-0.44.2.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.44.0</b> (2024-12-18)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.44.0 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.0/windows/x64/Cursor-Setup-0.44.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.0/windows/arm64/Cursor-Setup-0.44.0-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.0/macos/x64/Cursor-0.44.0.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.0/macos/arm64/Cursor-0.44.0-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.44.0/linux/x64/Cursor-0.44.0.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.43.6</b> (2024-12-06)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.43.6 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.6/windows/x64/Cursor-Setup-0.43.6.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.6/windows/arm64/Cursor-Setup-0.43.6-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.6/macos/x64/Cursor-0.43.6.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.6/macos/arm64/Cursor-0.43.6-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.6/linux/x64/Cursor-0.43.6.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.43.5</b> (2024-11-27)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.43.5 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.5/windows/x64/Cursor-Setup-0.43.5.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.5/windows/arm64/Cursor-Setup-0.43.5-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.5/macos/x64/Cursor-0.43.5.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.5/macos/arm64/Cursor-0.43.5-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.5/linux/x64/Cursor-0.43.5.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.43.4</b> (2024-11-26)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.43.4 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.4/windows/x64/Cursor-Setup-0.43.4.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.4/windows/arm64/Cursor-Setup-0.43.4-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.4/macos/x64/Cursor-0.43.4.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.4/macos/arm64/Cursor-0.43.4-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.4/linux/x64/Cursor-0.43.4.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.43.3</b> (2024-11-24)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.43.3 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.3/windows/x64/Cursor-Setup-0.43.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.3/windows/arm64/Cursor-Setup-0.43.3-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.3/macos/x64/Cursor-0.43.3.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.3/macos/arm64/Cursor-0.43.3-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.3/linux/x64/Cursor-0.43.3.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.43.1</b> (2024-11-24)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.43.1 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.1/windows/x64/Cursor-Setup-0.43.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.1/windows/arm64/Cursor-Setup-0.43.1-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.1/macos/x64/Cursor-0.43.1.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.1/macos/arm64/Cursor-0.43.1-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.1/linux/x64/Cursor-0.43.1.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.43.0</b> (2024-11-24)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.43.0 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.0/windows/x64/Cursor-Setup-0.43.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.0/windows/arm64/Cursor-Setup-0.43.0-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.0/macos/x64/Cursor-0.43.0.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.0/macos/arm64/Cursor-0.43.0-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.43.0/linux/x64/Cursor-0.43.0.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.42.5</b> (2024-11-14)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.42.5 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.5/windows/x64/Cursor-Setup-0.42.5.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.5/windows/arm64/Cursor-Setup-0.42.5-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.5/macos/x64/Cursor-0.42.5.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.5/macos/arm64/Cursor-0.42.5-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.5/linux/x64/Cursor-0.42.5.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.42.4</b> (2024-10-29)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.42.4 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.4/windows/x64/Cursor-Setup-0.42.4.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.4/windows/arm64/Cursor-Setup-0.42.4-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.4/macos/x64/Cursor-0.42.4.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.4/macos/arm64/Cursor-0.42.4-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.4/linux/x64/Cursor-0.42.4.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.42.3</b> (2024-10-16)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.42.3 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.3/windows/x64/Cursor-Setup-0.42.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.3/macos/x64/Cursor-0.42.3.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.3/macos/arm64/Cursor-0.42.3-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.3/linux/x64/Cursor-0.42.3.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.42.2</b> (2024-10-12)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.42.2 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.2/windows/x64/Cursor-Setup-0.42.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.2/macos/x64/Cursor-0.42.2.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.2/macos/arm64/Cursor-0.42.2-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.2/linux/x64/Cursor-0.42.2.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.42.1</b> (2024-10-11)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.42.1 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.1/windows/x64/Cursor-Setup-0.42.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.1/macos/x64/Cursor-0.42.1.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.1/macos/arm64/Cursor-0.42.1-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.1/linux/x64/Cursor-0.42.1.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.42.0</b> (2024-10-09)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.42.0 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.0/windows/x64/Cursor-Setup-0.42.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.0/macos/x64/Cursor-0.42.0.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.0/macos/arm64/Cursor-0.42.0-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.42.0/linux/x64/Cursor-0.42.0.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.41.3</b> (2024-09-25)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.41.3 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.41.3/windows/x64/Cursor-Setup-0.41.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.41.3/macos/x64/Cursor-0.41.3.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.41.3/macos/arm64/Cursor-0.41.3-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.41.3/linux/x64/Cursor-0.41.3.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.41.2</b> (2024-09-21)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.41.2 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.41.2/windows/x64/Cursor-Setup-0.41.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.41.2/macos/x64/Cursor-0.41.2.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.41.2/macos/arm64/Cursor-0.41.2-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.41.2/linux/x64/Cursor-0.41.2.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.41.1</b> (2024-09-18)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.41.1 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.41.1/windows/x64/Cursor-Setup-0.41.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.41.1/macos/x64/Cursor-0.41.1.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.41.1/macos/arm64/Cursor-0.41.1-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.41.1/linux/x64/Cursor-0.41.1.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.40.4</b> (2024-09-05)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.40.4 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.4/windows/x64/Cursor-Setup-0.40.4.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.4/macos/x64/Cursor-0.40.4.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.4/macos/arm64/Cursor-0.40.4-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.4/linux/x64/Cursor-0.40.4.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.40.3</b> (2024-08-29)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.40.3 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.3/windows/x64/Cursor-Setup-0.40.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.3/macos/x64/Cursor-0.40.3.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.3/macos/arm64/Cursor-0.40.3-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.3/linux/x64/Cursor-0.40.3.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.40.2</b> (2024-08-28)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.40.2 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.2/windows/x64/Cursor-Setup-0.40.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.2/macos/x64/Cursor-0.40.2.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.2/macos/arm64/Cursor-0.40.2-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.2/linux/x64/Cursor-0.40.2.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.40.1</b> (2024-08-24)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.40.1 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.1/windows/x64/Cursor-Setup-0.40.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.1/macos/x64/Cursor-0.40.1.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.1/macos/arm64/Cursor-0.40.1-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.1/linux/x64/Cursor-0.40.1.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.40.0</b> (2024-08-22)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.40.0 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.0/windows/x64/Cursor-Setup-0.40.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.0/macos/x64/Cursor-0.40.0.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.0/macos/arm64/Cursor-0.40.0-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.40.0/linux/x64/Cursor-0.40.0.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.39.6</b> (2024-08-19)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.39.6 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.6/windows/x64/Cursor-Setup-0.39.6.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.6/macos/x64/Cursor-0.39.6.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.6/macos/arm64/Cursor-0.39.6-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.6/linux/x64/Cursor-0.39.6.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.39.5</b> (2024-08-14)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.39.5 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.5/windows/x64/Cursor-Setup-0.39.5.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.5/macos/x64/Cursor-0.39.5.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.5/macos/arm64/Cursor-0.39.5-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.5/linux/x64/Cursor-0.39.5.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.39.4</b> (2024-08-10)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.39.4 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.4/windows/x64/Cursor-Setup-0.39.4.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.4/macos/x64/Cursor-0.39.4.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.4/macos/arm64/Cursor-0.39.4-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.4/linux/x64/Cursor-0.39.4.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.39.3</b> (2024-08-09)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.39.3 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.3/windows/x64/Cursor-Setup-0.39.3.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.3/macos/x64/Cursor-0.39.3.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.3/macos/arm64/Cursor-0.39.3-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.3/linux/x64/Cursor-0.39.3.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.39.2</b> (2024-08-08)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.39.2 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.2/windows/x64/Cursor-Setup-0.39.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.2/macos/x64/Cursor-0.39.2.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.2/macos/arm64/Cursor-0.39.2-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.2/linux/x64/Cursor-0.39.2.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.39.1</b> (2024-08-07)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.39.1 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.1/windows/x64/Cursor-Setup-0.39.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.1/macos/x64/Cursor-0.39.1.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.1/macos/arm64/Cursor-0.39.1-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.1/linux/x64/Cursor-0.39.1.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.39.0</b> (2024-08-02)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.39.0 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.0/windows/x64/Cursor-Setup-0.39.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.0/macos/x64/Cursor-0.39.0.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.0/macos/arm64/Cursor-0.39.0-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.39.0/linux/x64/Cursor-0.39.0.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.38.1</b> (2024-07-25)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.38.1 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.38.1/windows/x64/Cursor-Setup-0.38.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.38.1/macos/x64/Cursor-0.38.1.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.38.1/macos/arm64/Cursor-0.38.1-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.38.1/linux/x64/Cursor-0.38.1.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.38.0</b> (2024-07-23)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.38.0 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.38.0/windows/x64/Cursor-Setup-0.38.0.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.38.0/macos/x64/Cursor-0.38.0.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.38.0/macos/arm64/Cursor-0.38.0-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.38.0/linux/x64/Cursor-0.38.0.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.37.1</b> (2024-07-14)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.37.1 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.37.1/windows/x64/Cursor-Setup-0.37.1.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.37.1/macos/x64/Cursor-0.37.1.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.37.1/macos/arm64/Cursor-0.37.1-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.37.1/linux/x64/Cursor-0.37.1.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<details>
<summary><b>版本 0.36.2</b> (2024-07-07)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.36.2 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.36.2/windows/x64/Cursor-Setup-0.36.2.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.36.2/macos/x64/Cursor-0.36.2.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.36.2/macos/arm64/Cursor-0.36.2-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.36.2/linux/x64/Cursor-0.36.2.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

</div>
</details>

<!-- DETAILED_CARDS_END -->
