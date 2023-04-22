import { readFileSync, writeFileSync } from 'fs';

// Leer nombre de la librería del fichero package.json
const packageJson = JSON.parse(await readFileSync('package.json', 'utf8'));
const libName = packageJson.name;

// Modificar package.json
packageJson.main = `dist/${libName}.js`;
packageJson.module = `./dist/${libName}.js`;
packageJson.exports = {
  '.': {
    'import': `./dist/${libName}.js`,
    'require': `./dist/${libName}.umd.cjs`,
  },
};
await writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
console.log(`✏️ The library name has been updated to "${libName}".`);
