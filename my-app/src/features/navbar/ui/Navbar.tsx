import { CONTENT_NAVIGATION_MENU } from '@/shared/consts/contentNavMenu';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

const navContent = CONTENT_NAVIGATION_MENU.map((item) => (
  <li className={styles.navItem} key={item.title}>
    <NavLink to={item.link} className={styles.navLink}>{item.title}</NavLink>
  </li>
))

const Navbar = () => {
  return ( 
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navContent}
      </ul>
    </nav>
   );
}
 
export default Navbar;