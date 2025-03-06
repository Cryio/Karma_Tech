import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const optimizeImage = async (inputPath, outputPath) => {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Determine if image is PNG or JPEG
    const isPNG = metadata.format === 'png';
    
    // Optimize based on format
    if (isPNG) {
      await image
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(outputPath);
    } else {
      await image
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(outputPath);
    }
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
    
    console.log(`Optimized ${path.basename(inputPath)}: ${savings}% smaller`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
};

const processDirectory = async (dir) => {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.optimized.$1');
      await optimizeImage(fullPath, outputPath);
      
      // Replace original with optimized version
      fs.unlinkSync(fullPath);
      fs.renameSync(outputPath, fullPath);
    }
  }
};

// Start optimization
const publicDir = path.join(__dirname, '../public');
processDirectory(path.join(publicDir, 'img'))
  .then(() => console.log('Image optimization complete!'))
  .catch(console.error); 