import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

const JuridicPeopleTab = () => {
  const { t } = useTranslation();

  const values = [
    {label: 'IBAN', value: 'UA143052990000026006001044244'},
    {label: t('code'), value: '45708589'},
    {label: t('bank'), value: 'АТ КТ \'ПРИВАТБАНК\''},
    {label: t('receiver'), value: 'ГО Можливості для кожного'},
    {label: t('currency'), value: 'UAN'},
  ]

  return ( 
    <div className={styles.content}>
      <div className={styles.top}>
        <h4 className={styles.title}>{t('forjuridic')}</h4>
        <h5 className={styles.subtitle}>{t('becameHero')}</h5>
      </div>
      <div className={styles.bottom}>
        {values.map(item => (
          <div className={styles.block} key={item.label}>
            <p className={styles.data}>{item.label}</p>
            <h6 className={styles.text}>{item.value}</h6>
          </div>
        ))}
      </div>
      <p className={styles.subtext}>{t('paymentDesk')}</p>
    </div>
   );
}
 
export default JuridicPeopleTab;