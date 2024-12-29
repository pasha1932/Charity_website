import Logo from '@/entities/logo/ui/Logo';
import styles from './styles.module.scss';
import Navbar from '@/features/navbar/ui/Navbar';
import FastDonateBtn from '@/features/fast-donate-button/ui/FastDonateBtn';
import LangSwitcher from '@/features/language-switcher/ui/LangSwitcher';

const Header = () => {
  return (
    <header
      className={styles.header}
    > 
      <div className="container">
        <div className={styles.content}>
          <Logo />
          <Navbar />
          <FastDonateBtn />
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
