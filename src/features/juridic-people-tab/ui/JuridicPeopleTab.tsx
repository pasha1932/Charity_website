import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

const JuridicPeopleTab = () => {
  const { t } = useTranslation();

  return ( 
    <div className={styles.content}>
      <div className={styles.top}>
        <h4 className={styles.title}>{t('forjuridic')}</h4>
        <h5 className={styles.subtitle}>{t('becameHero')}</h5>
      </div>
      <div className={styles.bottom}>
        {[t('address'), 'IBAN:', t('code'), t('bank'), t('receiver'), t('currency')].map(item => (
          <div className={styles.block} key={item}>
            <p className={styles.data}>{item}</p>
            <h6 className={styles.text}>Content</h6>
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default JuridicPeopleTab;