# 🚀 SEO Portfolio Website

Професионален SEO портфолио уебсайт, изграден с Next.js 15, TypeScript и модерни технологии за максимална производителност и SEO оптимизация.

## ✨ Особенности

### 🎨 **Дизайн & UX**
- **Responsive дизайн** - перфектно изглежда на всички устройства
- **Модерен UI/UX** - чист и професионален дизайн
- **Бърза навигация** - интуитивен и лесен за използване интерфейс
- **Accessibility** - съвместим с всички браузъри и устройства

### 🏗️ **Техническа архитектура**
- **Next.js 15** - най-новите функции и оптимизации
- **TypeScript** - типова безопасност и по-добър developer experience
- **App Router** - модерен routing подход
- **Server Components** - оптимизирана производителност
- **CSS Modules** - модулни стилове за по-добра поддръжка

### 📱 **Responsive поведение**
- **Mobile-first подход** - оптимизиран за мобилни устройства
- **Adaptive navigation** - различно меню за мобилно и десктоп
- **Flexible layouts** - автоматично адаптиране на съдържанието
- **Touch-friendly** - оптимизиран за touch взаимодействие

## 🛠️ Технологичен стек

### **Frontend**
- **Next.js 15** - React framework с App Router
- **TypeScript** - Статично типизиран JavaScript
- **React 18** - Най-новите React функции
- **Tailwind CSS** - Utility-first CSS framework
- **Sass/SCSS** - CSS препроцесор за стилове

### **Icons & Assets**
- **React Icons** - Обширна библиотека с иконки
- **Heroicons** - Модерни SVG иконки
- **Font Awesome** - Класически иконки
- **Material Design Icons** - Google Material Design иконки

### **Development Tools**
- **ESLint** - Code linting и качество
- **Prettier** - Code formatting
- **TypeScript** - Статичен анализ
- **CSS Modules** - Scoped стилове

## 📁 Структура на проекта

```
src/
├── app/                    # Next.js App Router страници
│   ├── page.tsx           # Начална страница
│   ├── za-men/            # Страница "За мен"
│   ├── seo-uslugi/        # SEO услуги
│   ├── seo-proekti/       # SEO проекти
│   ├── blog/              # SEO блог
│   └── kontakti/          # Контакти
├── components/            # React компоненти
│   ├── Header.tsx         # Навигационно меню
│   ├── Footer.tsx         # Footer компонент
│   └── about/             # Компоненти за "За мен"
├── resources/             # Данни и конфигурация
│   ├── content.tsx        # Съдържание на сайта
│   ├── icons.ts           # Иконки библиотека
│   └── once-ui.config.ts  # Конфигурация
├── utils/                 # Utility функции
│   ├── formatDate.ts      # Форматиране на дати
│   └── utils.ts           # Общи функции
└── types/                 # TypeScript типове
```

## 🚀 Инсталация и стартиране

### **Предварителни изисквания**
- Node.js 18+ 
- npm или yarn

### **Клониране и инсталация**
```bash
# Клониране на проекта
git clone [<repository-url>](https://github.com/stantchev/stanchev)
cd stanchev-main

# Инсталация на зависимости
npm install
# или
yarn install
```

### **Разработка**
```bash
# Стартиране на development сървър
npm run dev
# или
yarn dev

# Отваряне в браузър
open http://localhost:3000
```

### **Production build**
```bash
# Създаване на production build
npm run build
# или
yarn build

# Стартиране на production сървър
npm start
# или
yarn start
```

## 📄 Страници и функционалности

### 🏠 **Начална страница**
- Привлекателен hero секция
- Центрирани call-to-action бутони
- Responsive дизайн за всички устройства
- SEO оптимизирана структура

### 👤 **За мен**
- **Мобилна версия**: Аватар и езици отгоре, съдържание отдолу
- **Десктоп версия**: Аватар вляво (sticky), съдържание вдясно
- Информация за опита и уменията
- Образование и сертификати
- Технически умения с иконки

### 🚀 **SEO услуги**
- **12 различни SEO услуги** с детайлни описания
- **Униформирани картички** 400x430px за перфектен layout
- **Релевантни иконки** за всяка услуга
- **Ценообразуване** и характеристики
- **Responsive grid**: 2 картички на ред (десктоп), 1 (мобилно)

### 📊 **SEO проекти**
- Портфолио от успешни SEO проекти
- Резултати и статистики
- Case studies с детайли

### 📰 **SEO блог**
- **Български дати** - автоматично форматиране
- SEO статии и съвети
- Категоризирано съдържание
- Search-friendly структура

### 📞 **Контакти**
- Лесно свързване
- Контактна информация
- Call-to-action бутони

## 🎯 SEO оптимизации

### **Техническо SEO**
- **Server-side rendering** с Next.js
- **Оптимизирани изображения** с Next.js Image
- **Schema markup** за структурирани данни
- **Sitemap** автоматично генериране
- **Meta tags** за всяка страница

### **Performance**
- **Core Web Vitals** оптимизация
- **Lazy loading** на изображения
- **Code splitting** автоматично
- **Bundle optimization** с Next.js

### **Content SEO**
- **Български език** - пълна локализация
- **Keyword optimization** в съдържанието
- **Internal linking** структура
- **Mobile-first** индексация

## 🌐 Мултиезичност

### **Български език**
- Пълна локализация на съдържанието
- Български дати и формати
- Културно подходящи текстове
- SEO оптимизация за български ключови думи

## 📱 Responsive дизайн

### **Breakpoints**
- **Mobile**: до 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

### **Адаптивни елементи**
- **Navigation**: Иконки само на мобилно, иконки + текст на десктоп
- **Layout**: Vertical на мобилно, horizontal на десктоп
- **Cards**: 1 на ред (мобилно), 2 на ред (десктоп)
- **Typography**: Адаптивни размери на шрифтове

## 🔧 Development

### **Code Quality**
- **TypeScript** за типова безопасност
- **ESLint** за code quality
- **Prettier** за консистентен формат
- **CSS Modules** за scoped стилове

### **Performance**
- **Next.js оптимизации** вградени
- **Image optimization** автоматично
- **Bundle analysis** с webpack-bundle-analyzer
- **Lighthouse scores** над 90+

## 🚀 Deployment

### **Vercel (Препоръчително)**
```bash
# Инсталация на Vercel CLI
npm i -g vercel

# Deployment
vercel

# Production deployment
vercel --prod
```

### **Netlify**
```bash
# Build команда
npm run build

# Publish директория
out/
```

### **Traditional hosting**
```bash
# Static export
npm run build
npm run export

# Upload dist/ папката
```

## 📈 Performance метрики

### **Lighthouse Scores**
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### **Core Web Vitals**
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🤝 Contributing

1. Fork проекта
2. Създай feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit промените (`git commit -m 'Add some AmazingFeature'`)
4. Push към branch (`git push origin feature/AmazingFeature`)
5. Отвори Pull Request

## 📄 Лиценз

Този проект е лицензиран под MIT License - виж [LICENSE](LICENSE) файла за детайли.

## 📞 Контакт

**Станчев** - SEO експерт
- 📧 Email: seo@stanchev.bg
- 🌐 Website: https://stanchev.bg/
- 💼 LinkedIn: [[LinkedIn профил]](https://www.linkedin.com/in/stantcheff/)

---

⭐ Ако този проект ти е полезен, моля дай star на репозиторията!
