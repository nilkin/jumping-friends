// src/index.html → index.html
// Oyun skriptini Babel ilə ES5-ə çevirir ki, köhnə brauzerlərdə (məs. köhnə LG webOS TV) də işləsin.
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const acorn = require('acorn');

const SRC = path.join(__dirname, 'src', 'index.html');
const OUT = path.join(__dirname, 'index.html');

const html = fs.readFileSync(SRC, 'utf8');
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (!m) throw new Error('src/index.html-də <script> bloku tapılmadı');

const { code } = babel.transformSync(m[1], {
  babelrc: false,
  configFile: false,
  sourceType: 'script',
  presets: [['@babel/preset-env', { targets: { chrome: '26', safari: '6' }, modules: false }]],
  // Kodda for...of və spread yalnız massivlərlə işlənir, ona görə Symbol.iterator lazım deyil
  assumptions: { iterableIsArray: true, arrayLikeIsIterable: false },
  comments: false,
});

// Nəticə həqiqətən ES5-dirmi? Deyilsə, build dayansın.
try {
  acorn.parse(code, { ecmaVersion: 5, sourceType: 'script' });
} catch (e) {
  const line = code.split('\n')[e.loc.line - 1] || '';
  throw new Error(`Çıxış ES5 deyil: ${e.message}\n  ${line.trim().slice(0, 160)}`);
}

const banner = '<!-- AVTOMATİK YARADILIB: redaktə etməyin. Mənbə: src/index.html, build: npm run build -->\n';
const out = html.replace(m[0], () => '<script>\n' + code + '\n</script>')
  .replace(/^<!DOCTYPE html>\n/i, (d) => d + banner);
fs.writeFileSync(OUT, out);
console.log(`index.html hazırdır (${(out.length / 1024).toFixed(1)} KB, ES5)`);
