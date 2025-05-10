<<<<<<< HEAD
=======
import { LucideIcon } from 'lucide-react';

>>>>>>> 611847f (Добавяне на промените и .gitignore)
export interface NavLink {
  id: string;
  title: string;
}

export interface Project {
  id: string;
  name: string;
  descriptionKey: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
<<<<<<< HEAD
=======

export interface Service {
  slug: string;
  icon: LucideIcon;
}
>>>>>>> 611847f (Добавяне на промените и .gitignore)
