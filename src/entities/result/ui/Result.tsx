import styles from './styles.module.scss';

type Props = {
  count: number,
  title: string,
};

const Result: React.FC<Props> = ({count, title}) => {
  return ( 
    <div className={styles.result}>
      <h2 className={styles.count}>{count.toLocaleString('ru')}</h2>
      <p className={styles.text}>{title}</p>
    </div>
   );
}
 
export default Result;