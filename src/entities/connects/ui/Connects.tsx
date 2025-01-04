import { CONTENT_CONNECTS } from "@/shared/consts/contentConnects";
import styles from './styles.module.scss';
import { useTranslation } from "react-i18next";

const Connects = () => {
  const { t } = useTranslation();

  return ( 
    <div className={styles.connects}>
      <h5 className={styles.title}>{t('connectUs')}</h5>
      <div className={styles.list}>
        {CONTENT_CONNECTS.map(item => (
          <div className={styles.connect} key={item.title}>
            <img src={item.img} alt="" className={styles.icon} />
            <span className={styles.text}>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default Connects;