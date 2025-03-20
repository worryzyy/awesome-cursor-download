import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

/**
 * 版本历史迁移工具
 * 
 * 此脚本用于从其他项目或位置迁移版本历史文件到当前项目中
 */

// Get dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 从源位置迁移版本历史文件到当前项目
 */
function migrateVersionHistory() {
  const sourceHistoryPath = path.join(process.cwd(), '..', 'cursor-version-archive.json');
  const targetHistoryPath = path.join(process.cwd(), 'cursor-version-archive.json');
  
  if (fs.existsSync(sourceHistoryPath)) {
    try {
      console.log(`Migrating version history from ${sourceHistoryPath} to ${targetHistoryPath}`);
      fs.copyFileSync(sourceHistoryPath, targetHistoryPath);
      console.log('Version history migrated successfully');
    } catch (error) {
      console.error('Error migrating version history:', error instanceof Error ? error.message : 'Unknown error');
    }
  } else {
    console.error(`Source history file not found at ${sourceHistoryPath}`);
  }
}

// Execute main function
migrateVersionHistory(); 