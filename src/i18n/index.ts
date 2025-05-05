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
