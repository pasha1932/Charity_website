import styles from './styles.module.scss';
import { useState } from "react";
import classNames from "classnames";
import { CurrencySwitcher } from "@/features/currency-switcher";
import { useTranslation } from "react-i18next";
import { useDonateMutation, useDonateProjectMutation } from "@/shared/api/api";
import { Button } from "@/shared/ui/button";
import icon from '@/shared/assets/images/icons/handFast.svg';
import { useLocation } from 'react-router-dom';

const OneTimeTab = () => {
  const [isactive, setisactive] = useState(11);
  const [checked, setChecked] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState('UAH');
  const [donate, {isLoading }] = useDonateMutation();
  const [donateProject,] = useDonateProjectMutation();
  const { state } = useLocation();
  
  const [tel, setTel] = useState('+380')
  const [amount, setAmount] = useState<number>();
  const { t } = useTranslation();

  const money = {
    UAH: [`25UAN`, '100UAN', '500UAN', '1000UAN', '5000UAN', '10000UAN', '20000UAN'],
    USD: ['1USD', '10USD', '20USD', '50USD', '100USD', '200USD', '500USD']
  }

  const handleAmount = (number: number, index: number) => {
    setisactive(index);
    setAmount(number);
  }

  const handleChangeCurrency = () => {
    setCurrentCurrency(currency => currency === 'UAH' ? 'USD' : 'UAH');
  }

  const handleSubmit = async () => {

    if (!amount || tel.length < 11 || tel.length > 14) {
      alert(t('paymError'));
      return;
    }

    const donat = {
      amount: `${amount}`,
      currency: currentCurrency,
      donorName: '',
      donorEmail: '',
      donorPhoneNumber: tel,
    }

    try {
      let htmlForm = '';
      if (state?.way === 'general') {
        htmlForm = await donate(donat).unwrap();
      } else if (state?.projectId){
        htmlForm = await donateProject({ data: donat, id: state.projectId }).unwrap();
      } else {
        throw new Error("Некоректний стан: відсутній 'way' або 'projectId'");
      }
      
      const newTab = window.open();

    if (newTab) {
      newTab.document.open();
      newTab.document.write(htmlForm); // Записуємо отриманий HTML
      newTab.document.close();
    } else {
      console.error("Попапи заблоковані браузером.");
    }
  } catch (error) {
    console.error("Помилка обробки донату:", error);
  }
    
  }
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <h4 className={styles.title}>{t('chooseSum')}</h4>
        <CurrencySwitcher currency={currentCurrency} click={handleChangeCurrency} />
      </div>
      <h5 className={styles.subtitle}>{t('becameHero')}</h5>
      <div className={styles.moneyList}>
        {(currentCurrency === 'UAH' ? money.UAH : money.USD).map((item, index) => (
          <div
            className={classNames(styles.money, { [styles.moneyActive]: index === isactive })}
            key={item} onClick={() => handleAmount(+item.slice(0, -3), index)}
          >
            <h5 className={styles.text}>{item}</h5>
        </div>))}
        <div className={classNames(styles.money, { [styles.moneyActive]: 10 === isactive })} >
          <input type="number" value={amount} min="0" className={styles.text} placeholder={t('yourSum')} onChange={(e) => setAmount(+e.target.value)} onClick={() => {
            setisactive(10)
          }}></input>
        </div>
      </div>
      
      <input type="number" className={styles.tel} placeholder={t('formPhone')} value={tel} onChange={(e) => setTel(e.target.value)} />
      <div className={styles.agreement}>
        <input type="checkbox" className={styles.checkbox} onChange={(e) => setChecked(e.target.checked)}/>
        <p className={styles.agree}>
          {t('agree1')}  <span style={{ textDecoration: 'underline' }}>{t('agree2')}</span>
        </p>
      </div>
      <p className={styles.subtext}>{t('paymentDesk')}</p>
      <Button
      variant="usual"
      disabled={!checked || isLoading}
      onClick={handleSubmit}
      
    >
    <img src={icon} alt="" className={styles.icon} />
      <span className={styles.textBtn}>{isLoading ? 'Loading' : t('doDepos')}</span>
      </Button>
    </div>
  );
}
 
export default OneTimeTab;