import { useState } from "react";
import styles from './styles.module.scss';
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { LangSwitcher } from "@/features/language-switcher";
import { useTranslation } from "react-i18next";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { hash } = useLocation();
  const isactive = (iHash: string) => hash === iHash;
  const body = document.body;

  const toggleMenu = () => {
    setIsOpen(true);
    body.classList.add('body-no-scroll');
  }
  const closeMenu = () => {
    setIsOpen(false);
    body.classList.remove('body-no-scroll');
  } 
  
  const CONTENT_NAVIGATION_MENU = [
    { title: t('main'), link: '#main' },
    { title: t('about'), link: '#fond' },
    { title: t('news'), link: '#news' },
    { title: t('help'), link: '#help' },
    { title: t('contacts'), link: '#contacts' },
  ]
  
  return ( 
    <div className={styles.burgerMenu}>
      {!isOpen ? (<button onClick={toggleMenu} className={styles.burgerButton}>
        ☰
      </button>)
        : (<button onClick={closeMenu} className={styles.closeButton}>
          ✖
        </button>)}
      {isOpen && (
        <div className={styles.menu}>
      
          <nav className={styles.navbar}>
                <ul className={styles.navList}>
                  {CONTENT_NAVIGATION_MENU.map((item) => (
                          <li className={styles.navItem} key={item.title} onClick={closeMenu}>
                              <NavHashLink
                                smooth to={item.link}
                                className={styles.navLink}
                                style={
                                  isactive(item.link)
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
                  <li className={styles.navItem}>
                    <Link to='/payment'  onClick={closeMenu} className={`${styles.navLink} ${styles.navLinkYellow}`}>{t('fastDon')}</Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link to='/payment'  onClick={closeMenu} className={styles.navLink}>{t('changeLang')}</Link>
                    <LangSwitcher />
                  </li>
                </ul>
              </nav>
        </div>
      )}
    </div>
   );
}
 
export default BurgerMenu;