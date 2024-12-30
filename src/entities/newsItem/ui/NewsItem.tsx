import styles from './styles.module.scss';

type Props = {
  title: string,
  img: string,
  date: string,
}

const NewsItem :React.FC<Props> = ({date, img, title }) => {
  
  const style = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 62.86%, rgba(0, 0, 0, 0.7) 82.17%), url(${img}) no-repeat center / cover`,
  };

  return ( 
    <div className={styles.newsItem}>
      <div className={styles.block} style={style}>
        <div className={styles.date}>
          <span className={styles.text}>{date}</span>
        </div>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
   );
}
 
export default NewsItem;