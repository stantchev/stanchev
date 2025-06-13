// Comprehensive Bulgarian to Latin transliteration
const cyrillicToLatinMap: Record<string, string> = {
  // Lowercase
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh',
  'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
  'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
  'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sht', 'ъ': 'a', 'ь': 'y',
  'ю': 'yu', 'я': 'ya',
  
  // Uppercase
  'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ж': 'Zh',
  'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
  'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F',
  'Х': 'H', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sht', 'Ъ': 'A', 'Ь': 'Y',
  'Ю': 'Yu', 'Я': 'Ya'
};

// Reverse mapping for Latin to Cyrillic
const latinToCyrillicMap: Record<string, string> = {};
Object.entries(cyrillicToLatinMap).forEach(([cyrillic, latin]) => {
  latinToCyrillicMap[latin.toLowerCase()] = cyrillic.toLowerCase();
});

// Special cases for multi-character sequences
const specialCases = {
  'sht': 'щ',
  'zh': 'ж',
  'ch': 'ч',
  'sh': 'ш',
  'ts': 'ц',
  'yu': 'ю',
  'ya': 'я'
};

export function transliterateCyrillicToLatin(text: string): string {
  return text
    .split('')
    .map(char => cyrillicToLatinMap[char] || char)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9\-\/]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function transliterateLatinToCyrillic(text: string): string {
  let result = text.toLowerCase();
  
  // Handle special multi-character cases first
  Object.entries(specialCases).forEach(([latin, cyrillic]) => {
    result = result.replace(new RegExp(latin, 'g'), cyrillic);
  });
  
  // Handle single characters
  Object.entries(latinToCyrillicMap).forEach(([latin, cyrillic]) => {
    if (!Object.keys(specialCases).some(special => latin.includes(special))) {
      result = result.replace(new RegExp(latin, 'g'), cyrillic);
    }
  });
  
  return result;
}

export function createUrlMapping(): Record<string, string> {
  const cyrillicUrls = [
    '/услуги',
    '/за-мен',
    '/контакти',
    '/вход',
    '/политика-за-поверителност',
    '/общи-условия',
    '/бисквитки',
    '/ресурси',
    '/услуги/консултация',
    '/услуги/seo-одит',
    '/услуги/стратегия',
    '/услуги/on-page-оптимизация',
    '/услуги/ключови-думи',
    '/услуги/техническо-seo',
    '/услуги/оптимизация-на-съдържание',
    '/услуги/локално-seo',
    '/услуги/структурирани-данни',
    '/услуги/линк-билдинг',
    '/услуги/seo-мониторинг'
  ];
  
  const mapping: Record<string, string> = {};
  
  cyrillicUrls.forEach(url => {
    const latinUrl = transliterateCyrillicToLatin(url);
    mapping[latinUrl] = url;
    mapping[url] = latinUrl;
  });
  
  // Add manual mappings for special cases
  mapping['/local-seo'] = '/lokalno-seo';
  mapping['/lokalno-seo'] = '/услуги/локално-seo';
  
  return mapping;
}

export function getCanonicalUrl(path: string): string {
  const mapping = createUrlMapping();
  return mapping[path] || path;
}

export function shouldRedirect(path: string): { redirect: boolean; to?: string } {
  const mapping = createUrlMapping();
  
  // Check if this is a Latin URL that should redirect to Cyrillic
  if (mapping[path] && mapping[path] !== path) {
    return { redirect: true, to: mapping[path] };
  }
  
  return { redirect: false };
}