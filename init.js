#!/usr/bin/env node

/**
 * 初始化脚本 - 帮助用户设置和运行项目
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
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

// 询问是否运行更新
console.log(`${colors.bright}${colors.green}初始化完成!${colors.reset}\n`);
