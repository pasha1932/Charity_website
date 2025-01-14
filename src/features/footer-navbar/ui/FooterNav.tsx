import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { NavHashLink } from "react-router-hash-link";

const FooterNav = () => {
  const { t } = useTranslation();

  const CONTENT_FOOTER_NAV = [
    { title: t('about'), link: '#fond' },
    { title: t('guarantee'), link: '#garantees' },
    { title: t('reports'), link: '#news' },
    { title: t('foundingDocuments'), link: '#help' },
  ]

  return ( 
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {CONTENT_FOOTER_NAV.map(item => (
          <li className={styles.navItem} key={item.title}>
             <NavHashLink smooth to={item.link} className={styles.navLink}>{item.title}</NavHashLink>
          </li>
        ))}
      </ul>
    </nav>
   );
}
 
export default FooterNav;