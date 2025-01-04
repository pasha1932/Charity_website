import { DonateBtn } from '@/features/donate-button';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
type Props = {
  title: string,
  img: string,
  endTermin: string,
  collected: string,
}

const Project: React.FC<Props> = ({ title, img, endTermin, collected }) => {
  const style = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 62.86%, rgba(0, 0, 0, 0.7) 82.17%), url(${img}) no-repeat center / cover`,
  };
  const { t } = useTranslation();

  return ( 
    <div
      className={styles.project}
      style={style}>
      <DonateBtn />
      <div className={styles.content} >
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <p className={styles.termin}>{t('end')}</p>
            <p className={styles.text}>{endTermin}</p>
          </div>
          <div className={styles.right}>
            <p className={styles.termin}>{t('collected')}</p>
            <p className={styles.text}>{collected}</p>
            <div className={styles.bar}></div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Project;