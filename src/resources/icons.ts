import { IconType } from "react-icons";

import {
  HiChevronUp,
  HiChevronDown,
  HiChevronRight,
  HiChevronLeft,
  HiArrowUpRight,
  HiOutlineArrowPath,
  HiCheck,
  HiMiniQuestionMarkCircle,
  HiMiniXMark,
  HiOutlineLink,
  HiExclamationTriangle,
  HiInformationCircle,
  HiExclamationCircle,
  HiCheckCircle,
  HiMiniGlobeAsiaAustralia,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiClipboard,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiMoon,
  HiSun,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaThreads,
  FaDev,
  FaXTwitter,
  FaFacebook,
  FaPinterest,
  FaWhatsapp,
  FaReddit,
  FaTelegram,
} from "react-icons/fa6";

import {
  FaSearch,
  FaChartBar,
  FaChartLine,
  FaPalette,
  FaCamera,
  FaWrench,
  FaBox,
  FaLock,
  FaCode,
  FaLightbulb,
  FaCloud,
  FaCog,
  FaPlay,
  FaPause,
  FaStop,
  FaVolumeUp,
  FaShoppingCart,
  FaOpencart,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiReact,
  SiTailwindcss,
  SiNetlify,
  SiSemrush,
  SiYoast,
  SiWordpress,
  SiMagento,
  SiNpm,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiLighthouse,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiVercel,
} from "react-icons/si";

import { GrOptimize } from "react-icons/gr";
import { VscSymbolKeyword } from "react-icons/vsc";
import { MdContentPasteSearch } from "react-icons/md";
import { AiOutlineAudit } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

export const iconLibrary: Record<string, IconType> = {
  chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
  chevronRight: HiChevronRight,
  chevronLeft: HiChevronLeft,
  refresh: HiOutlineArrowPath,
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  helpCircle: HiMiniQuestionMarkCircle,
  infoCircle: HiInformationCircle,
  warningTriangle: HiExclamationTriangle,
  errorCircle: HiExclamationCircle,
  check: HiCheck,
  checkCircle: HiCheckCircle,
  close: HiMiniXMark,
  openLink: HiOutlineLink,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  clipboard: HiClipboard,
  email: HiEnvelope,
  calendar: HiCalendarDays,
  globe: HiMiniGlobeAsiaAustralia,
  globeOutline: HiOutlineGlobeAsiaAustralia,
  rocket: HiOutlineRocketLaunch,
  moon: HiMoon,
  sun: HiSun,
  document: HiOutlineDocument,

  // UI навигация
  home: PiHouseDuotone,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  gallery: PiImageDuotone,

  // Социални мрежи
  discord: FaDiscord,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  devto: FaDev,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,

  // Web Технологии
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  react: SiReact,
  tailwindcss: SiTailwindcss,
  netlify: SiNetlify,
  npm: SiNpm,
  wordpress: SiWordpress,
  magento: SiMagento,
  opencart: FaOpencart,
  photoshop: SiAdobephotoshop,
  lightroom: SiAdobelightroom,
  lighthouse: SiLighthouse,
  vercel: SiVercel,

  // SEO & Generic Icons
  search: FaSearch,
  ahrefs: FaChartBar,
  chartBar: FaChartBar,
  semrush: SiSemrush,
  settings: FaCog,
  chartLine: FaChartLine,
  yoast: SiYoast,
  code: FaCode,
  palette: FaPalette,
  lightbulb: FaLightbulb,
  cloud: FaCloud,
  camera: FaCamera,
  wrench: FaWrench,
  box: FaBox,
  lock: FaLock,
  chrome: FaCode,
  googleanalitycs: SiGoogleanalytics,
  gsconsole: SiGooglesearchconsole,


  // Utility
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  
  // Audio controls
  play: FaPlay,
  pause: FaPause,
  stop: FaStop,
  speaker: FaVolumeUp,

  // Addidional icons
  seoopt: GrOptimize,
  seoecommerce: FaShoppingCart,
  keywordresearch: VscSymbolKeyword,
  contentseo: MdContentPasteSearch,
  seoaudit: AiOutlineAudit,
  localseo: FiMapPin,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;



