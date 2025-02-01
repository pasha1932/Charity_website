import axios from 'axios';

// URL LibreTranslate API
const API_URL = 'https://libretranslate.com/translate';

// Локальний кеш перекладів
const cache: Record<string, string> = {};

// Функція перекладу
export const translateText = async (
  text: string,
  targetLang: string,
  sourceLang = 'auto'
): Promise<string> => {
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
    const response = await axios.post<TranslationResponse>(
      API_URL,
      {
        q: text,
        source: sourceLang,
        target: targetLang,
        format: 'text',
        alternatives: 3,
        api_key: '',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const translatedText = response.data.translatedText;

    // Зберігаємо результат у кеш та localStorage
    cache[cacheKey] = translatedText;
    localStorage.setItem(cacheKey, translatedText);

    return translatedText;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        `API error: ${error.response.status} - ${error.response.statusText}`
      );
    } else {
      console.error('Unexpected error:', error);
    }
    return text; // Повертаємо оригінальний текст у разі помилки
  }
};

// Переклад об'єкта даних
export const translateData = async (
  data: Record<string, string>,
  targetLang: string
): Promise<Record<string, string>> => {
  const entries = await Promise.all(
    Object.entries(data).map(async ([key, value]) => [
      key,
      await translateText(value, targetLang),
    ])
  );

  return Object.fromEntries(entries);
};
