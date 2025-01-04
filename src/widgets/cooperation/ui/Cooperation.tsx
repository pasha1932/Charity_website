import { PartnerBtn } from "@/features/partner-button";
import img from '@/shared/assets/images/cooperat.png';
import styles from './styles.module.scss';
import { useTranslation } from "react-i18next";

const Cooperation = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className="container">
      <h4 className={styles.title}>{t('cowork')}</h4>
      <div className={styles.content}>
        <div className={styles.left}>
          <h5 className={styles.subtitle}>{t('statem')}</h5>
          <h6 className={styles.text}>{t('queryState')}
          </h6>
          <PartnerBtn />
        </div>
        <img src={img} alt="" className={styles.img} />
          </div>
        </div>
    </section>);
}
 
export default Cooperation;