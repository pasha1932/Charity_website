import { DoDeposBtn } from "@/features/do-deposition";
import styles from './styles.module.scss';
import { useState } from "react";
import classNames from "classnames";
import { CurrencySwitcher } from "@/features/currency-switcher";
import { useTranslation } from "react-i18next";

const OneTimeTab = () => {
  const [isActive, setIsActive] = useState(0);
  const [checked, setChecked] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <h4 className={styles.title}>{t('chooseSum')}</h4>
        <CurrencySwitcher />
      </div>
      <h5 className={styles.subtitle}>{t('becameHero')}</h5>
      <div className={styles.moneyList}>
        {['25UAN', '100UAN', '500UAN', '1000UAN', '5000UAN', '10000UAN', '20000UAN'].map((item, index) => (
          <div
            className={classNames(styles.money, { [styles.moneyActive]: index === isActive })}
            key={item} onClick={() => setIsActive(index)}
          >
            <h5 className={styles.text}>{item}</h5>
        </div>))}
        <div className={classNames(styles.money, { [styles.moneyActive]: 10 === isActive })}
             onClick={() => setIsActive(10)}>
          <input className={styles.text} placeholder={t('yourSum')}></input>
        </div>
      </div>
      <button className={styles.btn}>{t('changeCur')}</button>
      <div className={styles.agreement}>
        <input type="checkbox" className={styles.checkbox} onChange={(e) => setChecked(e.target.checked)}/>
        <p className={styles.agree}>
          {t('agree1')}  <span style={{ textDecoration: 'underline' }}>{t('agree2')}</span>
        </p>
      </div>
      <DoDeposBtn disabled={checked} title={t('doDepos')} />
    </div>
  );
}
 
export default OneTimeTab;