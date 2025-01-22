import { useGetNewsItemQuery } from "@/widgets/news/api/api";
import { useParams } from "react-router-dom";
import styles from './styles.module.scss';
import { useEffect, useRef } from "react";
import BtnBack from "@/shared/ui/button-back/ui/BtnBack";
import { OtherNews } from "@/features/other-news";


const NewsItem = () => {
  const { id } = useParams();
  const { data } = useGetNewsItemQuery({ id: id?.toString() });
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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