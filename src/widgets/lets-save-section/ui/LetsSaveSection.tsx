import { VolntBtn } from '@/features/volunteer-button';
import arrow from '../assets/images/MainArrow.png';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

const LetsSaveSection = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <section className={styles.section} id="main">
        <div className={styles.content}>
          <div className={styles.right}>
            <h2 className={styles.title}>{t('world')}</h2>
            <h6 className={styles.subtitle}>{t('connectNeeds')}</h6>
            <VolntBtn />
          </div>
        
          <div className={styles.left}>
            <img src={arrow} alt="arrow" className={styles.img} />
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default LetsSaveSection;