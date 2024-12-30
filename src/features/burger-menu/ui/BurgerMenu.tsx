import { useState } from "react";
import { CONTENT_NAVIGATION_MENU } from '@/shared/consts/contentNavMenu';
import styles from './styles.module.scss';
import { Link, NavLink } from "react-router-dom";

const navContent = CONTENT_NAVIGATION_MENU.map((item) => (
  <li className={styles.navItem} key={item.title}>
    <NavLink to={item.link} className={styles.navLink}>{item.title}</NavLink>
  </li>
))

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
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
                  {navContent}
                  <li className={styles.navItem}>
                    <Link to='/payment' className={`${styles.navLink} ${styles.navLinkYellow}`}>Швидкий донат</Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link to='/payment' className={styles.navLink}>Змінити мову</Link>
                  </li>
                </ul>
              </nav>
        </div>
      )}
    </div>
   );
}
 
export default BurgerMenu;