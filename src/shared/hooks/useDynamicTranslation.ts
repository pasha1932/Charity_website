import { translateText } from "@/widgets/newsItem/ui/NewsItem";
import { useEffect } from "react";
import i18n from 'i18next';

export const useDynamicTranslation = (key: string, text: string) => {
  useEffect(() => {
    const updateTranslation = async () => {
      const targetLang = i18n.language === "uk" ? "en" : "uk";
      const translatedText = await translateText(text, targetLang);

      i18n.addResource(targetLang, "translation", key, translatedText);
    };

    if (text) updateTranslation();
  }, [text, i18n.language]); // Виконувати при зміні тексту або мови
};
