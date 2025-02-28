import { useGetNewsItemQuery } from "@/widgets/news/api/api";
import { useParams } from "react-router-dom";
import styles from './styles.module.scss';
import { useRef } from "react";
import BtnBack from "@/shared/ui/button-back/ui/BtnBack";
import { OtherNews } from "@/features/other-news";
import { useDynamicTranslation } from "@/shared/hooks/useDynamicTranslation";

const NewsItem = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetNewsItemQuery({ id: id?.toString() });
  const bottomRef = useRef<HTMLDivElement>(null);
  const titleContent = useDynamicTranslation(`news_title_${id}`, data?.title || '');
  const textContent = useDynamicTranslation(`news_text_${id}`, data?.content || '');
  return (
    <section className={styles.section}>
      <div className="container">
        <BtnBack />
        {!isLoading && <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.left}>
              <img src={data?.coverImageUrl} alt="" className={styles.img} />
              <h4 className={styles.titles}>{titleContent}</h4>
            </div>
            <OtherNews />
          </div>
          <div id="bottom" ref={bottomRef} className={styles.bottom}>
            {textContent}
          </div>
        </div>}
      </div>
    </section>
  );
}
 
export default NewsItem;