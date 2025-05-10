import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.contact": "Contact",
      "nav.services": "Services",
      
      "hero.title": "Expert Web Development & SEO Solutions",
      "hero.subtitle": "Elevating your digital presence with cutting-edge web development, optimized SEO strategies, and data-driven results",
      "button.explore": "Explore Projects",
      "button.contact": "Contact Me",
      
      "about.title": "About",
      "about.me": "Me",
      "about.description1": "I'm an expert in security and defense, known for disciplined and strategic thinking, with a strong mission-focused and analytical mindset.",
      "about.description2": "Highly trained and results-driven, I excel in high-pressure environments, solving complex problems and coordinating critical operations with precision.",
      "about.description3": "My approach combines resilience, clarity, and responsibility, ensuring success in challenging situations where stability and focus are essential.",

      "experience.title": "Work",
      "experience.subtitle": "Experience",
      
      "projects.title": "My",
      "projects.subtitle": "Projects",
      "projects.description": "Explore my portfolio of innovative web applications and digital experiences that showcase my skills and creativity.",
      "projects.viewAll": "See All Projects",
      "projects.viewProject": "View Project",
      "projects.smartbg_description": "Smart Bulgaria is an online store offering a wide range of smart devices and electronics for home and office, including smart cameras, TV boxes, lighting, and tools.",
      "projects.keylock_description": "Keylock.bg offers professional key cutting, lock repair, and emergency locksmith services across Sofia, ensuring quick and reliable solutions for all security needs.",
      "projects.insurance_bg_description": "Digital platform for online insurance and price calculation for third-party liability, motor insurance, and other types of insurance in Bulgaria.",
      "projects.oil_standart_description": "Oil Standart is a Bulgarian company trading high-quality oils and lubricants from leading brands such as Mobil, Castrol, and Total.",
      
      "skills.title": "Technical",
      "skills.subtitle": "Skills",
      "skills.description": "A showcase of my technical expertise and proficiency in various technologies and tools.",
      "skills.additional": "Additional",
      "skills.technologies": "Technologies",
      
      "contact.title": "Get In",
      "contact.subtitle": "Touch",
      "contact.description": "Have a project in mind or want to discuss potential collaborations? Feel free to reach out!",
      "contact.form.name": "Your Name",
      "contact.form.email": "Your Email",
      "contact.form.message": "Your Message",
      "contact.form.placeholder.message": "Hi, I'm interested in working with you on...",
      "contact.form.sending": "Sending...",
      "contact.form.send": "Send Message",
      "contact.form.success.title": "Message Sent!",
      "contact.form.success.message": "Thanks for reaching out. I'll get back to you soon.",
      
      "contact.info.title": "Contact Information",
      "contact.info.description": "Feel free to reach out through any of the following channels.",
      "contact.info.email": "Email",
      "contact.info.location": "Location",
      "contact.social.title": "Social Media",
	  "nav.services": "Services",
	  "services.title": "SEO",
	  "services.subtitle": "SERVICES LIST",
	  "services.description":"Everything you need for successful SEO – analysis, strategy, optimization, and results.",
	  "services.backToServices": "Back",
	  "services.learnMore": "Learn more",
	  "services.startProject": "Start a project",
	  "services.keyBenefits": "Key benefits",
	  "services.startProjectDescription": "Ready to take your website to the next level? Get in touch today and let's start your project!",
	  "services.contactUs": "Get in touch",
	  "services.relatedServices": "Related services",

      "services": {
        "technical-seo": {
          "title": "Technical SEO",
          "shortDescription": "Optimize your website's technical foundation for better search engine rankings",
          "fullDescription": "Comprehensive technical SEO services to improve your website's visibility and performance in search engines",
          "benefits": [
            "In-depth technical site audits",
            "Performance optimization",
            "Mobile optimization",
            "Schema markup implementation",
            "Site architecture optimization"
				]
			},
		"link-building": {
			"title": "Link Building",
			"shortDescription": "Boost your site's authority with high-quality backlinks",
			"fullDescription": "Strategic link building services to improve your website’s domain authority, search engine rankings, and organic traffic through quality backlinks",
			"benefits": [
			"White-hat link acquisition",
			"Backlink profile analysis",
			"Outreach to relevant websites",
			"Guest posting and content placement",
			"Improved domain authority and rankings"
  ]
},
"on-page-seo": {
  "title": "On-Page SEO",
  "shortDescription": "Optimize individual pages for better rankings and user experience",
  "fullDescription": "On-page SEO services to ensure your website content and structure are fully optimized for search engines and users alike",
  "benefits": [
    "Keyword optimization",
    "Meta tags and headers improvement",
    "Internal linking strategies",
    "Content relevance and readability",
    "URL and image optimization"
  ]
},
"content-strategy": {
  "title": "Content Strategy",
  "shortDescription": "Plan and create SEO-friendly content that drives traffic",
  "fullDescription": "Tailored content strategies designed to engage users, support SEO goals, and boost organic growth through valuable content",
  "benefits": [
    "Keyword and topic research",
    "Content calendar planning",
    "SEO-focused content creation",
    "User intent targeting",
    "Content performance tracking"
  ]
},
"local-seo": {
  "title": "Local SEO",
  "shortDescription": "Increase visibility in local search results and Google Maps",
  "fullDescription": "Local SEO services to help your business attract nearby customers through optimized listings and local citations",
  "benefits": [
    "Google Business Profile optimization",
    "Local citations and NAP consistency",
    "Local keyword targeting",
    "Review and reputation management",
    "Location-based content creation"
  ]
},
"ecommerce-seo": {
  "title": "Ecommerce SEO",
  "shortDescription": "Optimize your online store for search engines and shoppers",
  "fullDescription": "Ecommerce SEO solutions tailored to improve product visibility, drive traffic, and increase conversions in your online store",
  "benefits": [
    "Product page optimization",
    "Category structure enhancements",
    "Technical improvements for ecommerce platforms",
    "Schema markup for products",
    "Conversion-focused keyword targeting"
  ]
},
"mobile-seo": {
  "title": "Mobile SEO",
  "shortDescription": "Ensure your website is optimized for mobile users and mobile-first indexing",
  "fullDescription": "Mobile SEO services to enhance usability, speed, and search visibility on smartphones and tablets",
  "benefits": [
    "Mobile-friendly design",
    "Responsive layout improvements",
    "Page speed optimization for mobile",
    "Touch usability enhancements",
    "Mobile-first SEO best practices"
  ]
},
"international-seo": {
  "title": "International SEO",
  "shortDescription": "Expand your global reach with multilingual and regional SEO",
  "fullDescription": "International SEO strategies to help your website rank in multiple countries and languages, targeting global audiences effectively",
  "benefits": [
    "Hreflang implementation",
    "Geo-targeting strategies",
    "Multilingual content optimization",
    "International keyword research",
    "Localized technical SEO"
  ]
},
"site-architecture": {
  "title": "Site Architecture",
  "shortDescription": "Create a logical and scalable website structure for better SEO",
  "fullDescription": "Site architecture optimization to improve crawlability, indexation, and user navigation for stronger SEO performance",
  "benefits": [
    "Logical hierarchy and navigation",
    "URL structure improvements",
    "Internal linking enhancements",
    "Flat vs. deep architecture strategy",
    "Better crawl efficiency and user flow"
  ]
},
"seo-audit": {
  "title": "SEO Audit",
  "shortDescription": "Identify and fix SEO issues holding your site back",
  "fullDescription": "Comprehensive SEO audits to uncover technical, content, and structural problems affecting your site's performance",
  "benefits": [
    "Complete website health check",
    "Technical SEO evaluation",
    "On-page and off-page analysis",
    "Actionable recommendations",
    "Improved visibility and rankings"
  ]
},

		},
      "footer.slogan": "Creating the digital experiences of tomorrow",
      "footer.rights": "All rights reserved.",

     "experience.positions": {
        "senior": {
          "title": "Intern",
          "company": "WebStation LTD",
          "date": "2025 - Present",
          "description": "As an SEO Intern, developing and executing strategies to optimize websites for search engines, enhancing organic traffic and improving site rankings."
        },
        "fullstack": {
          "title": "Intern",
          "company": "Cental Office of Military Desctricts",
          "date": "2021 - 2021",
          "description": "Worked with classified data, ensuring military-grade confidentiality, coordinating with intelligence units, and managing personal information under strict privacy regulations."
        },
      }
    }
  },
	
  bg: {
  translation: {
  "nav.home": "Начало",
  "nav.about": "За мен",
  "nav.projects": "Проекти",
  "nav.skills": "Умения",
  "nav.contact": "Контакти",
  "nav.services": "Услуги",

  "hero.title": "Уеб разработка и SEO, които работят за вас",
  "hero.subtitle": "Изграждам силно онлайн присъствие с модерни уеб технологии, ефективни SEO стратегии и решения, водени от данни",
  "button.explore": "Разгледай проектите",
  "button.contact": "Свържи се с мен",

  "about.title": "За",
  "about.me": "мен",
  "about.description1": "Имам опит в сигурността и отбраната, като проявявам дисциплина и стратегическо мислене. Обучен съм да действам под натиск. Съчетавам аналитични умения с фокус върху мисии и цели.",
  "about.description2": "Подготвен съм да вземам решения в критични моменти. Стремя се към резултати и се адаптирам лесно. Решавам проблеми с яснота и визия.",
  "about.description3": "Устойчив съм в трудни ситуации и запазвам контрол. Работя с цел ефективност и сигурност. Координирам между екипи и структури успешно.",

  "experience.title": "Професионален",
  "experience.subtitle": "опит",

  "projects.title": "Моите",
  "projects.subtitle": "проекти",
  "projects.description": "Разгледай селекция от уеб приложения и дигитални решения, които показват моите умения и креативност.",
  "projects.viewAll": "Всички проекти",
  "projects.viewProject": "Детайли за проекта",
  "projects.smartbg_description": "Smart Bulgaria е онлайн магазин, предлагащ разнообразие от умни устройства и електроника за дома и офиса, включително смарт камери, TV боксове, осветление и инструменти.",
  "projects.keylock_description": "Keylock.bg предлага професионално рязане на ключове, ремонт на брави и спешни услуги за ключар в цяла София, осигурявайки бързи и надеждни решения за всички нужди от сигурност.",
  "projects.insurance_bg_description": "Платформа за онлайн застраховки и изчисляване на цени за застраховки за трети лица, автомобилни застраховки и други видове застраховки в България.",
  "projects.oil_standart_description": "Oil Standart е българска компания, търгуваща с висококачествени масла и смазочни материали от водещи марки като Mobil, Castrol и Total.",

  "skills.title": "Технически",
  "skills.subtitle": "умения",
  "skills.description": "Поглед върху технологиите и инструментите, с които работя уверено и ефективно.",
  "skills.additional": "Допълнителни",
  "skills.technologies": "Технологии",

  "contact.title": "Свържи се",
  "contact.subtitle": "с мен",
  "contact.description": "Имаш идея или търсиш партньор за проект? Ще се радвам да обсъдим възможностите!",
  "contact.form.name": "Име",
  "contact.form.email": "Имейл",
  "contact.form.message": "Съобщение",
  "contact.form.placeholder.message": "Здравей, интересувам се от съвместна работа по...",
  "contact.form.sending": "Изпращане...",
  "contact.form.send": "Изпрати",
  "contact.form.success.title": "Съобщението е изпратено!",
  "contact.form.success.message": "Благодаря за запитването! Ще се свържа с теб съвсем скоро.",

  "contact.info.title": "Контактна информация",
  "contact.info.description": "Свържи се с мен чрез предпочитаните канали по-долу.",
  "contact.info.email": "Имейл",
  "contact.info.location": "Местоположение",
  "contact.social.title": "Социални мрежи",
  "nav.services": "Услуги",
  "services.title": "SEO",
  "services.subtitle": "Услуги",
  "services.description": " Всичко, от което се нуждаете за успешно SEO – анализ, стратегия, оптимизация и резултати.",
  "services.backToServices": "Назад",
  "services.learnMore": "Виж тук",
  "services.startProject": "Започни проект",
  "services.keyBenefits": "Предимства",
  "services.startProjectDescription": "Готов да изведеш сайта си на следващото ниво? Свържи се с мен още днес и нека започнем проекта ти!",
  "services.contactUs": "Контакти",
  "services.relatedServices": "Подобни услуги",
  
"services": {
  "technical-seo": {
    "title": "Техническо SEO",
    "shortDescription": "Оптимизирайте техническата основа на уебсайта си за по-добро класиране в търсачките",
    "fullDescription": "Цялостни услуги за техническо SEO с цел подобряване на видимостта и производителността на вашия уебсайт в търсачките",
    "benefits": [
      "Задълбочени технически одити на сайта",
      "Оптимизация на производителността",
      "Мобилна оптимизация",
      "Имплементация на Schema markup",
      "Оптимизация на архитектурата на сайта"
    ]
  },
  "link-building": {
  "title": "Link Building",
  "shortDescription": "Изградете висококачествени линкове за по-добро класиране",
  "fullDescription": "Link building услуги, които повишават авторитета на сайта ви чрез надеждни и релевантни обратни връзки",
  "benefits": [
    "Създаване на беклинкове от авторитетни сайтове",
    "White-hat стратегии за линк билдинг",
    "Анализ на профил на обратни връзки",
    "Идентифициране на нови възможности за линкове",
    "Подобряване на домейн авторитет и SEO резултати"
  ]
},
  "on-page-seo": {
  "title": "On-Page SEO",
  "shortDescription": "Оптимизирайте отделни страници за по-добро класиране и потребителско изживяване",
  "fullDescription": "Услуги за On-page SEO, които гарантират, че съдържанието и структурата на вашия сайт са напълно оптимизирани за търсачки и потребители",
  "benefits": [
    "Оптимизация на ключови думи",
    "Подобряване на мета тагове и заглавия",
    "Стратегии за вътрешно линкване",
    "Актуалност и четливост на съдържанието",
    "Оптимизация на URL адреси и изображения"
  ]
},
"content-strategy": {
  "title": "Контент стратегия",
  "shortDescription": "Планирайте и създавайте SEO съдържание, което привлича трафик",
  "fullDescription": "Индивидуално създадени стратегии за съдържание, които ангажират потребителите, подпомагат SEO целите и стимулират органичен растеж",
  "benefits": [
    "Проучване на ключови думи и теми",
    "Планиране на съдържание чрез календар",
    "Създаване на съдържание с фокус върху SEO",
    "Целево съдържание според потребителското намерение",
    "Проследяване на ефективността на съдържанието"
  ]
},
"local-seo": {
  "title": "Локално SEO",
  "shortDescription": "Увеличете видимостта си в локалните търсения и Google Maps",
  "fullDescription": "Локални SEO услуги, които помагат на вашия бизнес да привлече клиенти в близост чрез оптимизирани профили и локални цитирания",
  "benefits": [
    "Оптимизация на профил в Google Business",
    "Консистентност на локални цитирания и NAP данни",
    "Таргетиране на локални ключови думи",
    "Управление на ревюта и репутация",
    "Създаване на съдържание с локална насоченост"
  ]
},
"ecommerce-seo": {
  "title": "SEO за онлайн магазини",
  "shortDescription": "Оптимизирайте онлайн магазина си за търсачки и купувачи",
  "fullDescription": "SEO решения за онлайн магазини, насочени към подобряване на видимостта на продуктите, увеличаване на трафика и повишаване на конверсиите",
  "benefits": [
    "Оптимизация на продуктови страници",
    "Подобряване на структурата на категориите",
    "Технически подобрения за е-комерс платформи",
    "Схема маркиране за продукти",
    "Ключови думи, насочени към конверсии"
  ]
},
"mobile-seo": {
  "title": "Мобилно SEO",
  "shortDescription": "Уверете се, че сайтът ви е оптимизиран за мобилни устройства и мобилен индекс",
  "fullDescription": "Услуги за мобилно SEO за по-добра използваемост, скорост и видимост в търсачките на смартфони и таблети",
  "benefits": [
    "Дизайн, съобразен с мобилни устройства",
    "Подобрения в отзивчивия изглед",
    "Оптимизация на скоростта за мобилни устройства",
    "Улеснена навигация с докосване",
    "SEO добри практики за мобилно индексиране"
  ]
},
"international-seo": {
  "title": "Международно SEO",
  "shortDescription": "Разширете глобалното си присъствие с мултиезично и регионално SEO",
  "fullDescription": "Международни SEO стратегии, които помагат на вашия сайт да се класира в различни държави и езици, достигайки глобална аудитория",
  "benefits": [
    "Имплементиране на hreflang тагове",
    "Гео-таргетиращи стратегии",
    "Оптимизация на мултиезично съдържание",
    "Проучване на международни ключови думи",
    "Локализирано техническо SEO"
  ]
},
"site-architecture": {
  "title": "Структура на сайта",
  "shortDescription": "Създайте логична и мащабируема структура за по-добро SEO",
  "fullDescription": "Оптимизация на структурата на сайта с цел подобряване на обхождането, индексирането и потребителската навигация",
  "benefits": [
    "Логична йерархия и навигация",
    "Подобрения в URL структурата",
    "Оптимизация на вътрешни връзки",
    "Стратегия за плоска vs. дълбока структура",
    "По-добра ефективност при обхождане и потребителски поток"
  ]
},
"seo-audit": {
  "title": "SEO одит",
  "shortDescription": "Идентифицирайте и отстранете SEO проблеми, които ви задържат назад",
  "fullDescription": "Пълен SEO одит за разкриване на технически, съдържателни и структурни проблеми, които влияят на представянето на сайта",
  "benefits": [
    "Цялостна проверка на състоянието на сайта",
    "Техническа SEO оценка",
    "Анализ на вътрешна и външна оптимизация",
    "Конкретни препоръки за подобрение",
    "По-добра видимост и класиране"
  ]
},
},

  "footer.slogan": "Създавам дигиталните изживявания на бъдещето",
  "footer.rights": "Всички права запазени.",

  "experience.positions": {
        "senior": {
          "title": "Стажант",
          "company": "WebStation ООД",
          "date": "2025 - Настояще",
          "description": "Като SEO стажант, разработвам и изпълнявам стратегии за оптимизация на уебсайтове за търсачки, увеличавам органичния трафик и подобрявам позициите на сайта."
        },
        "fullstack": {
          "title": "Стажант",
          "company": "Централно Военно Окръжие",
          "date": "2021 - 2021",
          "description": "Работих с класифицирана информация, осигурявайки военна степен на конфиденциалност, координирах се със структури на разузнаването и управлявах лични данни при стриктно спазване на регулациите за поверителност."
        },
      }
    }
}
}
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
