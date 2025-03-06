import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRenames = {
  'pic1.png': 'bridge-piers-mopa-airport.png',
  'pic2.png': 'underground-surge-pool.png',
  'pic5.png': 'esr-cwr-pump-house.png',
  'pic7.png': 'rcc-chimney-90m.png',
  'pic8.png': 'cement-silos.png',
  'pic10.png': 'clinker-grain-silos.png',
  'pic13.png': 'bridge-piers-construction.png',
  'pic15.png': 'chimney-construction.png',
  'pic16.png': 'silo-construction.png',
  'pic19.png': 'power-plant-project.png',
  'pic22.png': 'industrial-construction.png',
  'pic24.png': 'cement-factory-project.png',
  'pic26.png': 'glass-factory-project.png',
  'pic29.png': 'pharmaceutical-project.png',
  'pic31.png': 'fertilizer-plant.png',
  'pic33.png': 'biogas-plant.png',
  'pic36.png': 'water-treatment.png',
  'pic37.png': 'industrial-facility.png',
  'pic39.png': 'commercial-construction.png',
  'pic40.png': 'residential-project.png',
  'pic41.png': 'infrastructure-project.png',
  'pic42.png': 'industrial-complex.png',
  'pic44.png': 'power-plant-facility.png',
  'pic45.png': 'cement-plant.png',
  'pic48.png': 'glass-manufacturing.png',
  'pic49.png': 'pharmaceutical-facility.png',
  'pic50.png': 'fertilizer-manufacturing.png',
  'pic54.png': 'biogas-facility.png',
  'pic55.png': 'water-management.png',
  'pic56.png': 'industrial-development.png',
  'pic57.png': 'commercial-development.png',
  'pic59.png': 'residential-development.png',
  'pic60.png': 'infrastructure-development.png'
};

const bannerRenames = {
  'banner1.png': 'cement-silo-shun-shing-47m.png',
  'banner2.png': 'clinker-silo-meghna-49m.png',
  'banner3.png': 'cement-silos-pearl-construction.png',
  'banner4.png': 'bridge-piers-mopa-36m.png',
  'banner5.png': 'slipform-jacks-6mt.png',
  'banner6.png': 'bridge-piers-mopa-36m-2.png',
  'banner7.png': 'clinker-silo-fresh-cement-48m.png',
  'banner12.png': 'chimney-maitree-275m.png'
};

function renameFiles(directory, renames) {
  const dirPath = path.join(__dirname, '..', 'public', 'img', directory);
  
  if (!fs.existsSync(dirPath)) {
    console.error(`Directory not found: ${dirPath}`);
    return;
  }

  Object.entries(renames).forEach(([oldName, newName]) => {
    const oldPath = path.join(dirPath, oldName);
    const newPath = path.join(dirPath, newName);

    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${oldName} → ${newName}`);
    } else {
      console.log(`File not found: ${oldName}`);
    }
  });
}

// Rename project images
renameFiles('projects', projectRenames);

// Rename banner images
renameFiles('banner', bannerRenames);

console.log('Image renaming completed!'); 