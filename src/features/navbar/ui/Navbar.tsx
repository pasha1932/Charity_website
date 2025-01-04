import styles from './styles.module.scss';
import { NavHashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { hash } = useLocation();
  const isActive = (iHash: string) => hash === iHash;
  const { t } = useTranslation();

  const CONTENT_NAVIGATION_MENU = [
    { title: t('main'), link: '#main' },
    { title: t('about'), link: '#fond' },
    { title: t('news'), link: '#news' },
    { title: t('help'), link: '#help' },
    { title: t('contacts'), link: '#contacts' },
]

  return ( 
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {CONTENT_NAVIGATION_MENU.map((item) => (
        <li className={styles.navItem} key={item.title}>
            <NavHashLink
              smooth to={item.link}
              className={styles.navLink}
              style={
                isActive(item.link)
                  ? {
                      color: "var(--bg-color-btn)",
                      borderBottom: '1px solid var(--bg-color-btn)',
                    }
                  : {}
              }
            >
              {item.title}
            </NavHashLink>
        </li>
))}
      </ul>
    </nav>
   );
}
 
export default Navbar;