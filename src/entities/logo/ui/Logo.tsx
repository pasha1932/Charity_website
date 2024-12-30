import styles from './styles.module.scss';
import logo from '@/shared/assets/images/icons/logo.svg';

const Logo = () => {
  return ( 
    <div className={styles.logo}>
      <img src={logo} alt="" className={styles.img} />
      <p className={styles.text}>Можливості</p>
      <span className={styles.subtext}>для кожного</span>
    </div>
   );
}
 
export default Logo;