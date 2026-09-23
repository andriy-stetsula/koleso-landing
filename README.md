# Колесо — велопрокат у місті

Статична лендинг-сторінка сервісу міського велопрокату: калькулятор вартості поїздки, інтерактивна мапа маршруту, hover/focus-ефекти на всіх кнопках.

## Структура проєкту

```
koleso-landing/
├── index.html      # розмітка сторінки
├── styles.css       # усі стилі
├── script.js        # логіка калькулятора вартості
├── test/
│   └── test.js       # смоук-тести (без зовнішніх залежностей)
├── package.json
└── README.md
```

## Встановлення

```bash
npm install
```

## Запуск локально

```bash
npm start
```

Відкриє сторінку на `http://localhost:3000` (через пакет `serve`).

## Тести

```bash
npm test
```

Перевіряє, що всі файли на місці, стилі містять hover/focus-стани, а скрипт — логіку калькулятора.

## Деплой на GitHub Pages

1. Створіть репозиторій на GitHub і запуште код:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<ваш-акаунт>/<назва-репо>.git
   git push -u origin main
   ```

2. Задеплойте:

   ```bash
   npm run deploy
   ```

   Це запустить тести (`predeploy`), а потім опублікує вміст поточної гілки в гілку `gh-pages` через пакет `gh-pages`.

3. У налаштуваннях репозиторію на GitHub (**Settings → Pages**) оберіть джерело `gh-pages` branch, якщо це не сталося автоматично.

Сайт буде доступний за адресою `https://<ваш-акаунт>.github.io/<назва-репо>/`.
