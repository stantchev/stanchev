import { format, parseISO } from 'date-fns';
import { bg } from 'date-fns/locale';

// Format date to Bulgarian format
export const formatDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'd MMMM yyyy', { locale: bg });
};

// Generate meta description from content
export const generateMetaDescription = (content: string, maxLength = 160): string => {
  // Remove markdown formatting
  let plainText = content
    .replace(/#+\s?(.*)/g, '$1') // Remove headings
    .replace(/\*\*(.*)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*)\*/g, '$1') // Remove italic
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
    .replace(/\n/g, ' ') // Replace newlines with spaces
    .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
    .trim();

  // Truncate to maxLength
  if (plainText.length > maxLength) {
    plainText = plainText.substring(0, maxLength - 3) + '...';
  }

  return plainText;
};

// Slugify text for URLs
export const slugify = (text: string): string => {
  const cyrillicToLatin: Record<string, string> = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh',
    'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
    'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sht', 'ъ': 'a', 'ь': '',
    'ю': 'yu', 'я': 'ya'
  };
  
  return text
    .toLowerCase()
    .replace(/[а-я]/g, (match) => cyrillicToLatin[match] || match)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
};