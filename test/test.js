/**
 * Простий набір смоук-тестів без зовнішніх залежностей.
 * Перевіряє, що ключові файли існують і містять очікувані елементи.
 * Запуск: node test/test.js  (або npm test)
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const root = path.join(__dirname, '..');
let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log('  \u2713 ' + name);
    passed++;
  } catch (err) {
    console.error('  \u2717 ' + name);
    console.error('    ' + err.message);
    failed++;
  }
}

console.log('Запуск тестів для koleso-landing\n');

test('index.html існує', () => {
  assert.ok(fs.existsSync(path.join(root, 'index.html')), 'index.html не знайдено');
});

test('styles.css існує', () => {
  assert.ok(fs.existsSync(path.join(root, 'styles.css')), 'styles.css не знайдено');
});

test('script.js існує', () => {
  assert.ok(fs.existsSync(path.join(root, 'script.js')), 'script.js не знайдено');
});

const html = fs.existsSync(path.join(root, 'index.html'))
  ? fs.readFileSync(path.join(root, 'index.html'), 'utf8')
  : '';

test('index.html підключає styles.css', () => {
  assert.ok(html.includes('href="styles.css"'), 'посилання на styles.css відсутнє');
});

test('index.html підключає script.js', () => {
  assert.ok(html.includes('src="script.js"'), 'посилання на script.js відсутнє');
});

test('index.html містить калькулятор вартості', () => {
  assert.ok(html.includes('id="minsRange"'), 'повзунок тривалості відсутній');
  assert.ok(html.includes('id="priceLabel"'), 'блок ціни відсутній');
});

test('index.html містить усі три типи велосипедів', () => {
  ['Міський', 'Електро', 'Вантажний'].forEach((label) => {
    assert.ok(html.includes(label), `тип велосипеда "${label}" відсутній`);
  });
});

const css = fs.existsSync(path.join(root, 'styles.css'))
  ? fs.readFileSync(path.join(root, 'styles.css'), 'utf8')
  : '';

test('styles.css містить hover-стани для кнопок', () => {
  assert.ok(css.includes('.btn-primary:hover'), 'hover для .btn-primary відсутній');
  assert.ok(css.includes('.btn-secondary:hover'), 'hover для .btn-secondary відсутній');
});

test('styles.css містить focus-visible стилі', () => {
  assert.ok(css.includes(':focus-visible'), ':focus-visible відсутній у стилях');
});

const js = fs.existsSync(path.join(root, 'script.js'))
  ? fs.readFileSync(path.join(root, 'script.js'), 'utf8')
  : '';

test('script.js містить логіку розрахунку ціни', () => {
  assert.ok(js.includes('updatePrice'), 'функція updatePrice відсутня');
});

console.log('\n' + passed + ' пройдено, ' + failed + ' провалено');

if (failed > 0) {
  process.exit(1);
}
