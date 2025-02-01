import { useGetNewsItemQuery } from "@/widgets/news/api/api";
import { useParams } from "react-router-dom";
import styles from './styles.module.scss';
import { useEffect, useRef } from "react";
import BtnBack from "@/shared/ui/button-back/ui/BtnBack";
import { OtherNews } from "@/features/other-news";
import { translateData } from "@/admin/translating/translate";


const NewsItem = () => {
  const { id } = useParams();
  const { data } = useGetNewsItemQuery({ id: id?.toString() });
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // if (data) {
    //   const news = {
    //     title: 'Новина',
    //   }
    //   translateData(news, 'en').then((translated) => {
    //     console.log(translated);
    //     // Виведе:
    //     // {
    //     //   title: "Привіт світе!",
    //     //   description: "Це опис."
    //     // }
    //   });
    // }
    const fetchTranslation = async () => {
      const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
          q: "international bankFDSFFD",
          source: "auto",
          target: "uk",
          format: "text",
          alternatives: 1,
          api_key: ""
        }),
        headers: { "Content-Type": "application/json" }
      });
      
      console.log(await res.json());
    };

    fetchTranslation();
    if (bottomRef.current && data?.content) {
      // Очищаємо вміст перед вставкою нового тексту
      bottomRef.current.innerHTML = '';
      bottomRef.current.insertAdjacentHTML('afterbegin', data.content);
    }
  }, [data]);
  return (
    <section className={styles.section}>
      <div className="container">
        <BtnBack />
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.left}>
              <img src={data?.coverImageUrl} alt="" className={styles.img} />
              <h4 className={styles.titles}>{data?.title}</h4>
            </div>
            <OtherNews />
          </div>
          <div id="bottom" ref={bottomRef} className={styles.bottom}>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default NewsItem;