import img from '@/shared/assets/images/bg-about.png';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="fond">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.title}>{t('aboutUs')}</h2>
            <h4 className={styles.subtitle}>{t('aboutText1')}</h4>
            <p className={styles.text}>
              <b>{t('aboutText21')}</b>{t('aboutText2')}
            </p>
            <p className={styles.text}>{t('aboutText3')}</p>
          </div>
          <div className={styles.right}>
            <img className={styles.img} src={img} alt="bg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
