import styles from './styles.module.scss';
import Connects from '@/entities/connects/ui/Connects';
import Socials from '@/entities/socials/ui/Socials';
import { FooterNav } from '@/features/footer-navbar';
import logo from '@/shared/assets/images/icons/logo.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return ( 
<footer
      className={styles.footer}
      id="contacts"
    > 
      <div className="container">
        <div className={styles.content}>
          <div className={styles.top}>
            <article className={`${styles.article} ${styles.block1}`}>
              <img src={logo} alt="" className={styles.logo} />
              <Socials />
            </article>
            <article className={styles.article}>
              <FooterNav />
            </article>
            <article className={`${styles.article} ${styles.block3}`}>
              <div className={styles.reports}>
                <Link to="/reports" className={styles.report} onClick={() => scrollTo(0, 0)}>{t('reports')}</Link>
                <Link to="/foundings" className={styles.report} onClick={() => scrollTo(0, 0)}>{t('foundingDocuments')}</Link>
              </div>
            </article>
            <article className={`${styles.article} ${styles.block4}`}>
              <Connects />
            </article> 
          </div>
          <div className={styles.bottom}>
            <p className={styles.copyright}>Copyright © 2025 Mate Academy</p>
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