import styles from './styles.module.scss';
import { useGetNewsQuery } from "@/widgets/news/api/api";
import { Link } from "react-router-dom";

const OtherNews = () => {
  const { data } = useGetNewsQuery({ page: 0, size: 10 });
  const formatDate = (dateString: string) => {
    const date = new Date(dateString); // Перетворюємо строку у дату
    return date.toLocaleDateString('uk-UA', {
      day: 'numeric',    // День без нуля попереду
      month: 'long',     // Повна назва місяця
      year: 'numeric'    // Повний рік
    });
  };

  return (
    <div className={styles.content}>
      <h4 className={styles.title}>Інші новини</h4>
      <div className={styles.list}>
        {data?.content.slice(-3).map(item => (
          <Link to={`/news/${item.id}`} key={item.title}>
          <div className={styles.item}>
            <div className={styles.date}>{formatDate(item.createTime)}</div>
            <p className={styles.itemTitle}>{item.title}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
 
export default OtherNews;