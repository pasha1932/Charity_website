import { CONTENT_SOCIALS } from "@/shared/consts/contentSocials";
import styles from './styles.module.scss';
import { useTranslation } from "react-i18next";

const Socials = () => {
  const { t } = useTranslation();

  return ( 
    <div className={styles.socials}>
      <p className={styles.text}>{t('official')}</p>
      <div className={styles.list}>
        {CONTENT_SOCIALS.map(item => (
          <a href={item.link} className={styles.link} key={item.link}>
            <img src={item.img} alt="" className={styles.img} />
          </a>
        ))}
      </div>
    </div>
   );
}
 
export default Socials;