// scripts/optimize-images.mjs
// Usage: node scripts/optimize-images.mjs  (requires: npm install sharp)
import sharp from 'sharp';
import { resolve, dirname, extname, basename } from 'path';
import { readdirSync, statSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = resolve(__dirname, '../src/assets');
const OUTPUT_DIR = resolve(__dirname, '../src/assets-optimized');
const MAX_WIDTH = 1200;
const QUALITY = 82;
const MIN_SIZE_KB = 100;

function getAllFiles(dirPath, fileList = []) {
  readdirSync(dirPath).forEach(file => {
    const fp = resolve(dirPath, file);
    if (statSync(fp).isDirectory()) getAllFiles(fp, fileList);
    else fileList.push(fp);
  });
  return fileList;
}

async function optimizeImage(inputPath) {
  const ext = extname(inputPath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;
  const sizeKB = statSync(inputPath).size / 1024;
  if (sizeKB < MIN_SIZE_KB) return;
  const relativePath = inputPath.replace(ASSETS_DIR, '');
  const outputPath = resolve(OUTPUT_DIR, relativePath.replace(ext, '.webp'));
  mkdirSync(dirname(outputPath), { recursive: true });
  try {
    const meta = await sharp(inputPath).metadata();
    const pipeline = sharp(inputPath);
    if (meta.width > MAX_WIDTH) pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    await pipeline.webp({ quality: QUALITY }).toFile(outputPath);
    const newKB = statSync(outputPath).size / 1024;
    const save = ((sizeKB - newKB) / sizeKB * 100).toFixed(1);
    console.log([OK]  : KB -> KB (% saved));
  } catch (e) {
    console.error([ERR] : );
  }
}

const files = getAllFiles(ASSETS_DIR);
let processed = 0;
for (const f of files) {
  const ext = extname(f).toLowerCase();
  if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    if (statSync(f).size / 1024 >= MIN_SIZE_KB) { await optimizeImage(f); processed++; }
  }
}
console.log('Done: ' + processed + ' images optimized -> src/assets-optimized/');
