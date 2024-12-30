import { NewsItem } from "@/entities/newsItem";
import { CONTENT_NEWS } from "@/shared/consts/contentNews";
import styles from './styles.module.scss';
import { SeeAllBtn } from "@/features/see-all-news";
import { useGetNewsQuery } from '../api/api';



const News = () => {
  const { data, error, isLoading } = useGetNewsQuery({ page: 0, size: 10 });

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка завантаження новин</p>;


  console.log(data)
  return ( 
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Новини</h2>
          <div className={styles.newsList}>
            {CONTENT_NEWS.map(item => <NewsItem
              img={item.img}
              date={item.date}
              title={item.title}
              key={item.title}
            />
        )}
          </div>
          <SeeAllBtn />
        </div>
      </div>
    </section>
   );
}
 
export default News;