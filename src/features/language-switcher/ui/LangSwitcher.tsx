import styles from './styles.module.scss';
import icon1 from '@/shared/assets/images/icons/flagUS.svg';
import icon2 from '@/shared/assets/images/icons/switcher.svg';

const LangSwitcher = () => {
  return ( 
    <button className={styles.btn}>
      <img src={icon2} alt="" className={styles.icon} />
      <img src={icon1} alt="" className={styles.icon} />
    </button>
  );
}
 
export default LangSwitcher;