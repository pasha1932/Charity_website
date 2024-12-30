import { CONTENT_FOOTER_NAV } from "@/shared/consts/contentFootNav";
import styles from './styles.module.scss';

const FooterNav = () => {
  return ( 
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {CONTENT_FOOTER_NAV.map(item => (
          <li className={styles.navItem} key={item.title}>
            <a href={item.link} className={styles.navLink}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
   );
}
 
export default FooterNav;