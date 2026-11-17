import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const shadersPkgPath = path.resolve(__dirname, '../node_modules/shaders/package.json');

try {
  if (fs.existsSync(shadersPkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(shadersPkgPath, 'utf8'));
    let modified = false;

    if (pkg.exports) {
      if (pkg.exports['./react']) {
        if (!pkg.exports['./react'].require) {
          pkg.exports['./react'].require = './dist/react/index.js';
          modified = true;
        }
        if (!pkg.exports['./react'].default) {
          pkg.exports['./react'].default = './dist/react/index.js';
          modified = true;
        }
      }
      if (pkg.exports['.']) {
        if (!pkg.exports['.'].require) {
          pkg.exports['.'].require = './dist/index.js';
          modified = true;
        }
        if (!pkg.exports['.'].default) {
          pkg.exports['.'].default = './dist/index.js';
          modified = true;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(shadersPkgPath, JSON.stringify(pkg, null, 2), 'utf8');
      console.log('✅ [postinstall] Successfully patched shaders/package.json for Vercel/Next.js');
    }
  }
} catch (err) {
  console.warn('⚠️ [postinstall] Could not patch shaders/package.json:', err.message);
}
