import { DoDeposBtn } from '@/features/do-deposition';
import styles from './styles.module.scss';

type Props = {
  title: string,
}
const CryptoMonoTab: React.FC<Props> = ({title}) => {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <h4 className={styles.title}>{title}</h4>
          <h5 className={styles.subtitle}>Стань супергероєм для тих, кому це необхідно</h5>
      </div>
      <div className={styles.bottom}>
        <div className={styles.code}></div>
        <DoDeposBtn disabled={true} title="Відкрити посилання"/>
      </div>
    </div> );
}
 
export default CryptoMonoTab;