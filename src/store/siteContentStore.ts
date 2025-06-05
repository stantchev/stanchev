import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ContentSection {
  id: string;
  content: string;
}

interface SiteContentState {
  sections: ContentSection[];
  updateSection: (id: string, content: string) => void;
  getSection: (id: string) => string;
}

export const useSiteContentStore = create<SiteContentState>()(
  persist(
    (set, get) => ({
      sections: [
        {
          id: 'hero-description',
          content: 'Професионални услуги по оптимизация за търсачки, които ще издигнат вашия бизнес на първите позиции в Google.',
        },
        {
          id: 'services-description',
          content: 'Предлагам пълен набор от SEO услуги, специално адаптирани за българския пазар, които ще издигнат вашия бизнес на ново ниво.',
        },
        {
          id: 'about-description',
          content: 'С над 5 години опит в SEO оптимизацията за българския пазар, помагам на бизнеси да увеличат своята онлайн видимост и да привлекат повече клиенти чрез органично търсене.',
        },
      ],
      updateSection: (id, content) =>
        set((state) => ({
          sections: state.sections.map((section) =>
            section.id === id ? { ...section, content } : section
          ),
        })),
      getSection: (id) => {
        const section = get().sections.find((s) => s.id === id);
        return section ? section.content : '';
      },
    }),
    {
      name: 'site-content-storage',
    }
  )
);