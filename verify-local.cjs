const fs = require('fs');
const vm = require('vm');
const path = require('path');

const routes = [
  '/', '/sobre', '/contato', '/solucoes',
  '/solucoes/techstart', '/solucoes/fabrica-de-software',
  '/solucoes/inteligencia-artificial', '/solucoes/mobilidade-corporativa',
  '/solucoes/ux-ui-design', '/solucoes/industria-4-0',
  '/solucoes/it-staff-augmentation',
  '/cases', '/cases/analise-operacional-ia',
  '/cases/modernizacao-sistema-legado', '/cases/redesign-fluxo-cadastro',
  '/cases/monitoramento-industrial-tempo-real', '/cases/ampliacao-capacidade-time-produto'
];
const data = fs.readFileSync('src/data.js', 'utf8');
const figmaCopy = fs.readFileSync('src/figma-copy.js', 'utf8');
const main = fs.readFileSync('src/main.js', 'utf8');
for (const route of routes) {
  let output = '';
  const app = { classList: { add() {}, remove() {} }, set innerHTML(value) { output = value; } };
  const document = {
    title: '',
    addEventListener: () => {},
    getElementById: (id) => id === 'app' ? app : null,
    querySelectorAll: () => [],
    querySelector: () => null
  };
  const context = { window: {scrollY:0,addEventListener:()=>{}}, document, location: { search: '?page=' + encodeURIComponent(route) }, URLSearchParams, console };
  vm.createContext(context);
  vm.runInContext(figmaCopy, context);
  vm.runInContext(data, context);
  vm.runInContext(main, context);
  if (!output.includes('<main>') || !output.includes('<footer')) throw new Error('Incomplete route: ' + route);
  if (output.includes('undefined') || output.includes('>null<')) throw new Error('Unresolved content on ' + route);
  if (route === '/cases') {
    for (const slug of ['analise-operacional-ia','modernizacao-sistema-legado','redesign-fluxo-cadastro','monitoramento-industrial-tempo-real','ampliacao-capacidade-time-produto']) {
      if (!output.includes('href="/cases/' + slug + '"')) throw new Error('Case card without route: ' + slug);
    }
  }
  const assetRefs = [...output.matchAll(/src="\.\/public\/assets\/([^"]+)"/g)].map(m => m[1]);
  for (const ref of assetRefs) {
    const assetFile = path.join('public', 'assets', ref);
    if (!fs.existsSync(assetFile) || fs.statSync(assetFile).size === 0) throw new Error('Missing or empty asset ' + ref + ' on ' + route);
  }
  console.log(route + ': OK (' + output.length + ' chars, ' + assetRefs.length + ' assets)');
}
for (const cssFile of ['src/styles.css', 'src/refinement.css', 'public/assets/fonts.css']) {
  const css = fs.readFileSync(cssFile, 'utf8');
  for (const match of css.matchAll(/url\(['"]?([^)'"\\]+)['"]?\)/g)) {
    if (match[1].startsWith('data:')) continue;
    const assetFile = path.resolve(path.dirname(cssFile), match[1]);
    if (!fs.existsSync(assetFile) || fs.statSync(assetFile).size === 0) throw new Error('Missing CSS asset: ' + assetFile);
  }
}
console.log('CSS and font assets: OK');
