import Logo from '@/entities/logo/ui/Logo';
import styles from './styles.module.scss';
import Navbar from '@/features/navbar/ui/Navbar';
import FastDonateBtn from '@/features/fast-donate-button/ui/FastDonateBtn';
import LangSwitcher from '@/features/language-switcher/ui/LangSwitcher';
import { useMediaQuery } from 'react-responsive';
import { BurgerMenu } from '@/features/burger-menu';

const Header = () => {
  const isDekstop = useMediaQuery({ query: '(min-width: 1310px)' }); // Ширина екрана >= 1300px
  // const isMobile = useMediaQuery({ query: '(max-width: 1299px)' }); // Ширина екрана < 1300px
  return (
    <header
      className={styles.header}
    > 
      <div className="container">
        <div className={styles.content}>
          <Logo />
          {isDekstop ? <><Navbar />
          <FastDonateBtn />
          <LangSwitcher /></> : <BurgerMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
