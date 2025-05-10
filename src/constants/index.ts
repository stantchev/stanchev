import { NavLink, Project, Experience, Skill } from "../types";
import {
  Search, Link as LinkIcon, FileText, PenTool, MapPin,
  ShoppingCart, Smartphone, Globe2, LayoutGrid, FileSearch
} from 'lucide-react';

export const navLinks: NavLink[] = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services: Service[] = [
  {
    slug: 'technical-seo',
    icon: Search,
  },
  {
    slug: 'link-building',
    icon: LinkIcon,
  },
  {
    slug: 'on-page-seo',
    icon: FileText,
  },
  {
    slug: 'content-strategy',
    icon: PenTool,
  },
  {
    slug: 'local-seo',
    icon: MapPin,
  },
  {
    slug: 'ecommerce-seo',
    icon: ShoppingCart,
  },
  {
    slug: 'mobile-seo',
    icon: Smartphone,
  },
  {
    slug: 'international-seo',
    icon: Globe2,
  },
  {
    slug: 'site-architecture',
    icon: LayoutGrid,
  },
  {
    slug: 'seo-audit',
    icon: FileSearch,
  },
];

export const projects: Project[] = [
  {
    id: "Proj-01",
    name: "Insurance.BG",
    descriptionKey: "projects.insurance_bg_description",
    tags: ["WordPress", "Technical-SEO", "Non-Tech SEO"],
    image: "https://insurance.bg/wp-content/uploads/2024/05/Insurancebg-logo.svg",
    link: "https://insurance.bg/",
  },
  {
    id: "project-2",
    name: "OilStandart.BG",
    descriptionKey: "projects.oil_standart_description",
    tags: ["WordPress", "Technical-SEO", "Non-Tech SEO"],
    image: "https://oil-standart.net/wp-content/uploads/2024/07/logo-oil-standart.svg",
    link: "https://oil-standart.net/",
  },
  {
    id: "project-3",
    name: "KeyLock.BG",
    descriptionKey: "projects.keylock_description",
    tags: ["WordPress", "Technical-SEO", "Non-Tech SEO"],
    image: "https://keylock.bg/wp-content/uploads/2024/09/keylock-logo.svg",
    link: "https://keylock.bg/",
  },
   {
    id: "project-4",
    name: "SmartBulgaria.BG",
    descriptionKey: "projects.smartbg_description",
    tags: ["OpenCart", "Technical-SEO", "Non-Tech SEO"],
    image: "https://smartbulgaria.bg/image/cache/wp/gp/brand/logo-original-big-w-p-200x65.webp",
    link: "https://smartbulgaria.bg/",
  },
];

export const experiences: Experience[] = [
  {
    title: "Senior Frontend Engineer",
    company: "Galactic Systems",
    date: "2023 - Present",
    description:
      "Leading development of cutting-edge web interfaces for space navigation systems. Improved UI performance by 45% through advanced rendering techniques.",
  },
  {
    title: "Full Stack Developer",
    company: "Quantum Solutions",
    date: "2021 - 2023",
    description:
      "Engineered robust applications utilizing React, Node.js, and WebGL. Implemented real-time data visualization for quantum computing metrics.",
  },
  {
    title: "UI/UX Designer",
    company: "Future Interfaces Inc.",
    date: "2019 - 2021",
    description:
      "Designed intuitive user experiences for next-generation applications. Created design systems that improved development workflow by 30%.",
  },
];

export const skills: Skill[] = [
  { name: "WordPress", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "OpenCart", level: 70 },
  { name: "HTML5", level: 70 },
  { name: "Magento", level: 30 },
  { name: "Node.JS", level: 85 },
  { name: "SEO optimization", level: 80 },
  { name: "UI/UX Design", level: 50 },
];
