import { DoDeposBtn } from '@/features/do-deposition';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

type Props = {
  title: string,
}
const CryptoMonoTab: React.FC<Props> = ({ title }) => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <h4 className={styles.title}>{title}</h4>
        <h5 className={styles.subtitle}>{t('becameHero')}</h5>
      </div>
      <div className={styles.bottom}>
        <div className={styles.code}></div>
        <DoDeposBtn disabled={true} title={t('openLink')} />
      </div>
    </div> );
}
 
export default CryptoMonoTab;