import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

const ForeignAccTab = () => {
  const { t } = useTranslation();
  
    const values = [
      {label: t('compName'), value: 'ГО МОЖЛИВОСТІ ДЛЯ КОЖНОГО'},
      {label: t('ibanCode'), value: 'UA843052990000026005011044785'},
      {label: t('nameBank'), value: ' JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE'},
      {label: t('swiftCode'), value: 'PBANUA2X'},
      {label: t('addressComp'), value: '80469, УКРАЇНА, ОБЛ. ЛЬВІВСЬКА, Р-Н. ЛЬВІВСЬКИЙ, С. ВЕЛИКІ ПІДЛІСКИ, ВУЛ. НЕЗАЛЕЖНОСТІ, Б. 148'},
    ]
  
    return ( 
      <div className={styles.content}>
        <div className={styles.top}>
          <h4 className={styles.title}>{t('foregTitle')}</h4>
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
      </div>
     );
}
 
export default ForeignAccTab;