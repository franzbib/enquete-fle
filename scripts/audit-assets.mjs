import { readdirSync, statSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = resolve(rootDir, 'public');
const imageExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif']);
const warnBytes = 750 * 1024;
const failBytes = 4 * 1024 * 1024;
const warnings = [];
const failures = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const fullPath = join(dir, name);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (!imageExtensions.has(extname(name).toLowerCase())) continue;

    const displayPath = relative(rootDir, fullPath).replaceAll('\\', '/');
    if (stat.size > failBytes) failures.push(`${displayPath}: ${(stat.size / 1024 / 1024).toFixed(2)} MB`);
    else if (stat.size > warnBytes) warnings.push(`${displayPath}: ${(stat.size / 1024 / 1024).toFixed(2)} MB`);
  }
}

walk(publicDir);

if (warnings.length > 0) {
  console.warn('Large image assets to optimize:');
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (failures.length > 0) {
  console.error('Image assets exceed the 4 MB safety limit:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Asset audit passed with ${warnings.length} optimization warning(s).`);
