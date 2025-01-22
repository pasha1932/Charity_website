import axios from 'axios';

// URL LibreTranslate API
const API_URL = 'https://libretranslate.com/translate';

// Локальний кеш перекладів
const cache: Record<string, string> = {};

// Функція перекладу
export const translateText = async (text: string, targetLang: string, sourceLang = 'auto'): Promise<string> => {
  const cacheKey = `${sourceLang}-${targetLang}-${text}`; // Унікальний ключ для кешу

  // Перевіряємо кеш
  if (cache[cacheKey]) {
    return cache[cacheKey];
  }

  // Якщо переклад уже є в localStorage
  const storedTranslation = localStorage.getItem(cacheKey);
  if (storedTranslation) {
    cache[cacheKey] = storedTranslation; // Завантажуємо в кеш
    return storedTranslation;
  }

  try {
    // Відправляємо запит на LibreTranslate API
    const response = await axios.post(API_URL, {
      q: text,
      source: sourceLang,
      target: targetLang,
      format: 'text',
    });

    const translatedText = response.data.translatedText;

    // Зберігаємо результат у кеш та localStorage
    cache[cacheKey] = translatedText;
    localStorage.setItem(cacheKey, translatedText);

    return translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return text; // Повертаємо оригінальний текст у разі помилки
  }
};
