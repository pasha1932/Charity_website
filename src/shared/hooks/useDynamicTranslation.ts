import { translateText } from "@/widgets/newsItem/ui/NewsItem";
import { useEffect, useState } from "react";
import i18n from 'i18next';

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
