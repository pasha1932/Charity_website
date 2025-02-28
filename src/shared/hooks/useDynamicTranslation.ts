import { useEffect, useState } from "react";
import axios from "axios";
import i18n from 'i18next';

export const translateText = async (text: string, targetLang: "en" | "uk") => {
  try {
    const response = await axios.get(
      "https://translate.googleapis.com/translate_a/single",
      {
        params: {
          client: "gtx",
          dt: "t",
          sl: "auto", // Автоматичне визначення мови
          tl: targetLang,
          q: text,
        },
      }
    );

    // Відповідь приходить у вигляді вкладених масивів
    return response.data[0].map((t: any) => t[0]).join("");
  } catch (error) {
    console.error("Translation error:", error);
    return text; // Повертаємо оригінальний текст у разі помилки
  }
};

export const useDynamicTranslation = (key: string, text: string) => {
  const [translatedText, setTranslatedText] = useState(text);
  useEffect(() => {
    const updateTranslation = async () => {
      if (!text) return; // Якщо немає тексту, не перекладаємо
      const targetLang = i18n.language === "uk" ? "uk" : "en";
      const translated = await translateText(text, targetLang);
      i18n.addResource(targetLang, "translation", key, translated);
      setTranslatedText(translated); // Оновлюємо стан після перекладу
    };
    updateTranslation();
  }, [text, i18n.language]);
  return translatedText; // Виконувати при зміні тексту або мови
};
