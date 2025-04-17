
## Технологии

- **TypeScript**  
- **React.js**  
- **SCSS**  
- **Webpack**  
- **GSAP** (анимации)  
- **Swiper** (слайдер)  

### 1. Клонирование

```bash
git clone https://github.com/kirillbatzag/testHistory.git
cd testHistory
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Запуск в режиме разработки

```bash
npm start
```

По умолчанию `webpack-dev-server` поднимет локальный сервер на порту **3000**:

- Loopback:  `http://localhost:3000/`
- Сеть:       `http://<ваш‑IP>:3000/`

Откройте в браузере `http://localhost:3000/`.

### 4. Сборка для продакшена

```bash
npm run build
```

Собранные файлы попадут в папку `dist/`.

## Структура проекта

```
testHistory/
├─ src/
│  ├─ components/      # React‑компоненты (CircleData, Switcher, SliderData, и т.д.)
│  ├─ contexts/        # React Context для хранения activeIndex
│  ├─ styles/          # SCSS‑файлы
│  ├─ events.ts        # Массив событий по периодам
│  ├─ App.tsx          # Точка входа приложения
│  └─ index.tsx        # Рендер в DOM
├─ public/
│  └─ index.html       # Шаблон HTML
├─ dist/               # Выходная папка после сборки
├─ webpack.config.js   # Конфигурация Webpack
├─ package.json
└─ tsconfig.json
```

_Проект создан с использованием React, TypeScript, SCSS, Webpack, GSAP и Swiper._
