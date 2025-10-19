# Aldar Storyboard

Приложение для просмотра историй про Алдара Косе, созданное с помощью React.

## 🔧 Переменные окружения

Приложение использует переменные окружения для настройки HTTP методов и API endpoints. Создайте файл `.env` в корне проекта на основе `env.example`:

```bash
cp env.example .env
```

### Доступные переменные:

- `REACT_APP_HTTP_METHOD_GET` - HTTP метод для GET запросов (по умолчанию: GET)
- `REACT_APP_HTTP_METHOD_POST` - HTTP метод для POST запросов (по умолчанию: POST)
- `REACT_APP_API_BASE_URL` - Базовый URL API (по умолчанию: https://aitysai.kazdev.team)
- `REACT_APP_API_STORIES_ENDPOINT` - Endpoint для получения историй (по умолчанию: /rendered_stories/)
- `REACT_APP_API_TASKS_ENDPOINT` - Endpoint для создания задач (по умолчанию: /story_tasks/)

## Запуск в Docker

### Быстрый запуск с Docker Compose

1. Убедитесь, что у вас установлен Docker и Docker Compose
2. Выполните команду:
```bash
docker-compose up --build
```

3. Откройте браузер и перейдите по адресу: http://localhost:3000

### Запуск с помощью Docker

1. Соберите Docker образ:
```bash
docker build -t aldar-storyboard .
```

2. Запустите контейнер:
```bash
docker run -p 3000:80 aldar-storyboard
```

3. Откройте браузер и перейдите по адресу: http://localhost:3000

### Остановка контейнера

Для остановки контейнера, запущенного через Docker Compose:
```bash
docker-compose down
```

Для остановки контейнера, запущенного через Docker:
```bash
docker stop <container_id>
```

## 🚀 Публикация проекта

### GitHub
1. Создайте новый репозиторий на GitHub
2. Выполните команды:
```bash
git add .
git commit -m "Initial commit: Aldar Storyboard React app"
git branch -M main
git remote add origin https://github.com/ваш-username/aldar-storyboard.git
git push -u origin main
```

### Vercel (Рекомендуется)
1. Зайдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub
3. Нажмите "New Project"
4. Выберите ваш репозиторий
5. Нажмите "Deploy" - проект будет доступен по ссылке

### Netlify
1. Зайдите на [netlify.com](https://netlify.com)
2. Войдите через GitHub
3. Нажмите "New site from Git"
4. Выберите ваш репозиторий
5. Настройки по умолчанию подойдут

### Docker Hub
```bash
# Соберите образ
docker build -t ваш-username/aldar-storyboard .

# Войдите в Docker Hub
docker login

# Загрузите образ
docker push ваш-username/aldar-storyboard
```

### Локальная передача
```bash
# Создайте архив (без node_modules)
tar -czf aldar-storyboard.tar.gz --exclude=node_modules --exclude=.git .
```

## ⚙️ Настройка

### Переменные окружения
Создайте файл `.env` в корне проекта (опционально):
```env
REACT_APP_API_URL=https://aitysai.kazdev.team
REACT_APP_API_TIMEOUT=30000
```

### Требования
- Node.js 16+ 
- npm или yarn
- Docker (для контейнеризации)

## 🛠 Локальная разработка

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
