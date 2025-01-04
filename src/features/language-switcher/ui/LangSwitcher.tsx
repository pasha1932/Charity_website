import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import flagEN from '@/shared/assets/images/icons/flagUS.svg';
import flagUK from '@/shared/assets/images/icons/flagUA.svg';
import icon2 from '@/shared/assets/images/icons/switcher.svg';

const LangSwitcher = () => {
  const { i18n } = useTranslation(); // Хук для роботи з i18n

  const toggleLanguage = () => {
    if (i18n.language === 'uk') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('uk');
    } 
  };

  return ( 
    <button className={styles.btn} onClick={toggleLanguage}>
      <img src={icon2} alt="" className={styles.icon} />
      {i18n.language === 'uk' ? (<img src={flagEN} alt="" className={styles.icon} />) : (<img src={flagUK} alt="" className={styles.icon} />) }
    </button>
  );
}
 
export default LangSwitcher;