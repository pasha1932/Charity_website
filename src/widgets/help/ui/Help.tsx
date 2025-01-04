import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { HelpBtn } from '@/features/help-buton';

const Help = () => {
  const { t } = useTranslation();
  
  return ( 
    <section className={styles.section} id="help">
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>{t('country')}</h2>
          <HelpBtn />
        </div>
      </div>
    </section>
   );
}
 
export default Help;