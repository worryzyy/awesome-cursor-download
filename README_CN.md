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
- `scripts/migrate-history.ts`: 用于迁移版本历史记录的辅助脚本
- `cursor-version-archive.json`: 存储所有版本的下载链接历史
- `README.md`: 包含所有版本下载链接的表格

## Cursor AI 下载链接

下面提供了 Cursor AI 各版本的官方下载链接，多种视图方便您选择合适的版本。

## 最新版本卡片

<!-- LATEST_VERSION_CARD_START -->
<div align="center">
<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">

<div style="background-color: #f8f9fa; border-radius: 10px; padding: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <h3 style="text-align: center; margin-top: 0;">🚀 Cursor 0.48.6</h3>
  <p style="text-align: center; color: #666; margin-bottom: 15px;">发布日期: 2025-03-31</p>
  <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
    <div style="text-align: center; margin: 5px; min-width: 120px;">
      <h4 style="margin: 5px 0;"><img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows"></h4><a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/win32/x64/user-setup/CursorUserSetup-x64-0.48.6.exe"><img src="https://img.shields.io/badge/x64-下载-blue?style=flat-square" alt="Windows x64"></a><br><a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.6.exe"><img src="https://img.shields.io/badge/ARM64-下载-blue?style=flat-square" alt="Windows ARM64"></a>
    </div>
    <div style="text-align: center; margin: 5px; min-width: 120px;">
      <h4 style="margin: 5px 0;"><img src="https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS"></h4><a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-下载-black?style=flat-square" alt="macOS Universal"></a><br><a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-下载-black?style=flat-square" alt="macOS Intel"></a><br><a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-下载-black?style=flat-square" alt="macOS M1/M2/M3"></a>
    </div>
    <div style="text-align: center; margin: 5px; min-width: 120px;">
      <h4 style="margin: 5px 0;"><img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux"></h4><a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/linux/x64/Cursor-0.48.6-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-下载-yellow?style=flat-square" alt="Linux x64"></a><br><a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/linux/arm64/Cursor-0.48.6-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-下载-yellow?style=flat-square" alt="Linux ARM64"></a>
</div>
    </div>
</div>
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
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.48.6</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-31</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/win32/x64/user-setup/CursorUserSetup-x64-0.48.6.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.6.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/linux/x64/Cursor-0.48.6-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/linux/arm64/Cursor-0.48.6-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
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
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.47.8</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-20</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/win32/x64/user-setup/CursorUserSetup-x64-0.47.8.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/win32/arm64/user-setup/CursorUserSetup-arm64-0.47.8.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/linux/x64/Cursor-0.47.8-82ef0f61c01d079d1b7e5ab04d88499d5af500e3.deb.glibc2.25-x86_64.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a> <a href="https://downloads.cursor.com/production/82ef0f61c01d079d1b7e5ab04d88499d5af500e3/linux/arm64/Cursor-0.47.8-aarch64.AppImage"><img src="https://img.shields.io/badge/ARM64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux ARM64"></a></td>
      <td style="text-align: left; vertical-align: middle; padding: 10px;">N/A</td>
    </tr>
  <tr>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">0.46.11</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;">2025-03-07</td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.46.11/windows/x64/Cursor-Setup-0.46.11.exe"><img src="https://img.shields.io/badge/x64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows x64"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.46.11/windows/arm64/Cursor-Setup-0.46.11-arm64.exe"><img src="https://img.shields.io/badge/ARM64-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Windows ARM64"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.46.11/macos/universal/Cursor-0.46.11-universal.dmg"><img src="https://img.shields.io/badge/通用-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Universal"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.46.11/macos/x64/Cursor-0.46.11.dmg"><img src="https://img.shields.io/badge/Intel-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS Intel"></a> <a href="https://storage.googleapis.com/cursor-history-exe/v0.46.11/macos/arm64/Cursor-0.46.11-arm64.dmg"><img src="https://img.shields.io/badge/M芯片-000000?style=flat-square&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a></td>
      <td style="text-align: center; vertical-align: middle; padding: 10px;"><a href="https://storage.googleapis.com/cursor-history-exe/v0.46.11/linux/x64/Cursor-0.46.11.AppImage"><img src="https://img.shields.io/badge/x64-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux x64"></a></td>
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
<summary><b>版本 0.48.6</b> (2025-03-31)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.48.6 下载链接</h3>

#### Windows
<a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/win32/x64/user-setup/CursorUserSetup-x64-0.48.6.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/win32/arm64/user-setup/CursorUserSetup-arm64-0.48.6.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/darwin/universal/Cursor-darwin-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/darwin/x64/Cursor-darwin-x64.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/darwin/arm64/Cursor-darwin-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/linux/x64/Cursor-0.48.6-x86_64.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>
<a href="https://downloads.cursor.com/production/7da827d66e9b56a846349698c70129a436421245/linux/arm64/Cursor-0.48.6-aarch64.AppImage"><img src="https://img.shields.io/badge/Linux_ARM64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux ARM64"></a>

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
<summary><b>版本 0.46.11</b> (2025-03-07)</summary>

<div align="center" style="padding: 20px; margin: 10px 0; border-radius: 5px; background-color: #f8f9fa;">
<h3>Cursor 0.46.11 下载链接</h3>

#### Windows
<a href="https://storage.googleapis.com/cursor-history-exe/v0.46.11/windows/x64/Cursor-Setup-0.46.11.exe"><img src="https://img.shields.io/badge/Windows_x64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows x64"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.46.11/windows/arm64/Cursor-Setup-0.46.11-arm64.exe"><img src="https://img.shields.io/badge/Windows_ARM64-下载-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows ARM64"></a>

#### macOS
<a href="https://storage.googleapis.com/cursor-history-exe/v0.46.11/macos/universal/Cursor-0.46.11-universal.dmg"><img src="https://img.shields.io/badge/macOS_通用-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Universal"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.46.11/macos/x64/Cursor-0.46.11.dmg"><img src="https://img.shields.io/badge/macOS_Intel-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS Intel"></a>
<a href="https://storage.googleapis.com/cursor-history-exe/v0.46.11/macos/arm64/Cursor-0.46.11-arm64.dmg"><img src="https://img.shields.io/badge/macOS_M芯片-下载-000000?style=for-the-badge&logo=apple&logoColor=white" alt="macOS M1/M2/M3"></a>

#### Linux
<a href="https://storage.googleapis.com/cursor-history-exe/v0.46.11/linux/x64/Cursor-0.46.11.AppImage"><img src="https://img.shields.io/badge/Linux_x64-下载-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux x64"></a>

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
