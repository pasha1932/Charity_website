import { useGetNewsItemQuery } from "@/widgets/news/api/api";
import { useParams } from "react-router-dom";
import styles from './styles.module.scss';
import { useEffect, useRef } from "react";
import BtnBack from "@/shared/ui/button-back/ui/BtnBack";
import { OtherNews } from "@/features/other-news";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useDynamicTranslation } from "@/shared/hooks/useDynamicTranslation";

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

const NewsItem = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetNewsItemQuery({ id: id?.toString() });
  const bottomRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();


  
  useDynamicTranslation(`news_title_${id}`, data?.title || '');
  useDynamicTranslation(`news_text_${id}`, data?.content || '');
  return (
    <section className={styles.section}>
      <div className="container">
        <BtnBack />
        {!isLoading && <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.left}>
              <img src={data?.coverImageUrl} alt="" className={styles.img} />
              <h4 className={styles.titles}>{t(`news_title_${id}`)}</h4>
            </div>
            <OtherNews />
          </div>
          <div id="bottom" ref={bottomRef} className={styles.bottom}>
            {t(`news_text_${id}`)}
          </div>
        </div>}
      </div>
    </section>
  );
}
 
export default NewsItem;