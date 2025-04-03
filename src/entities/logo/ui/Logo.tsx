import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from '@/shared/assets/images/icons/logo.png';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { t } = useTranslation();

  return ( 
    <Link to="/">
      <div className={styles.logo}>
        <img src={logo} alt="" className={styles.img} />
        <div className={styles.block}>
          <p className={styles.text}>{t('logo')}</p>
          <span className={styles.subtext}>{t('forEvery')}</span>
        </div>
      </div>
    </Link >
   );
}
 
export default Logo;