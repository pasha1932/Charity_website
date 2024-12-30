import styles from './styles.module.scss';
import Connects from '@/entities/connects/ui/Connects';
import Socials from '@/entities/socials/ui/Socials';
import { FooterNav } from '@/features/footer-navbar';
import logo from '@/shared/assets/images/icons/logo.svg';

const Footer = () => {
  return ( 
<footer
      className={styles.footer}
    > 
      <div className="container">
        <div className={styles.content}>
          <div className={styles.top}>
            <article className={styles.article}>
              <img src={logo} alt="" />
              <Socials />
            </article>
            <article className={styles.article}>
              <FooterNav />
            </article>
            <article className={styles.article}>
              <div className={styles.reports}>
                <a href="/" className={styles.report}>Звіти</a>
                <a href="/" className={styles.report}>Установчі документи</a>
              </div>
            </article>
            <article className={styles.article}>
              <Connects />
            </article> 
          </div>
          <div className={styles.bottom}>
            <p className={styles.copyright}>Copyright © 2024 Mate Academy</p>
            <div className={styles.links}>
              <p className={styles.link}>{`All Rights Reserved `}</p>
              <p className={styles.link}>{`Terms and Conditions`}</p>
              <p className={styles.link}> Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;