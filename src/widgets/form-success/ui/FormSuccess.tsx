import { GoMainBtn } from "@/features/go-main";
import img from '@/shared/assets/images/formSubm.png';
import styles from './styles.module.scss';
import { useTranslation } from "react-i18next";

const FormSuccess = () => {
  const { t } = useTranslation();
  
  return ( 
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.title}>{t('thanks')}</p>
          <img src={img} alt="" className={styles.img} />
          <GoMainBtn />
        </div>
      </div>
    </section>
   );
}
 
export default FormSuccess;