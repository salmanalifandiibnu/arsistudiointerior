import fs from 'fs';
import path from 'path';
import https from 'https';

const baseDir = path.resolve('F:/One-Page Website/Arsi Studio Interior/public/images/materials');

const materialImages = [
  // 1. Multiplek Board (Plywood cross-section layers)
  { url: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80", dest: "multiplek.jpg" },
  
  // 2. Blockboard (Solid wood block core)
  { url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80", dest: "blockboard.jpg" },
  
  // 3. PVC Board (Waterproof white polymer sheet)
  { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80", dest: "pvc-board.jpg" },
  
  // 4. HDF Board (High-Density Fiberboard smooth surface)
  { url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80", dest: "hdf-board.jpg" },
  
  // 5. HPL TACO (Warm woodgrain texture)
  { url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80", dest: "hpl-taco.jpg" },
  
  // 6. HPL AICA (Japanese architectural stone / luxury finish)
  { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", dest: "hpl-aica.jpg" },
  
  // 7. HPL CARTA (Modern matte minimalist texture)
  { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80", dest: "hpl-carta.jpg" },
  
  // 8. Finishing Cat Duco (Smooth seamless lacquer spray)
  { url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80", dest: "cat-duco.jpg" }
];

async function download(url, destPath) {
  const fullPath = path.join(baseDir, destPath);
  return new Promise((resolve) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, destPath).then(resolve);
      }
      if (response.statusCode !== 200) {
        console.error(`Status ${response.statusCode} for ${url}`);
        return resolve();
      }
      const file = fs.createWriteStream(fullPath);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved: ${destPath}`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error ${destPath}:`, err.message);
      resolve();
    });
  });
}

async function run() {
  console.log("Downloading 8 material illustrations...");
  for (const item of materialImages) {
    await download(item.url, item.dest);
  }
  console.log("All 8 material illustrations downloaded successfully!");
}

run();
