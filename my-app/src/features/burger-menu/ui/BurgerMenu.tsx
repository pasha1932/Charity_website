import { useState } from "react";
import styles from './styles.module.scss';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return ( 
    <div className={styles.burgerMenu}>
      <button onClick={toggleMenu} className={styles.burgerButton}>
        ☰
      </button>
      {isOpen && (
        <div className={styles.menu}>
          <button onClick={closeMenu} className={styles.closeButton}>
            ✖
          </button>
          <ul>
            <li>Головна</li>
            <li>Про фонд</li>
            <li>Новини</li>
            <li>Допомога</li>
            <li>Контакти</li>
          </ul>
        </div>
      )}
    </div>
   );
}
 
export default BurgerMenu;