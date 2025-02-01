import styles from './styles.module.scss';
import { useState } from "react";
import classNames from "classnames";
import { CurrencySwitcher } from "@/features/currency-switcher";
import { useTranslation } from "react-i18next";
import { useDonateMutation } from "@/shared/api/api";
import { Button } from "@/shared/ui/button";
import icon from '@/shared/assets/images/icons/handFast.svg';

const OneTimeTab = () => {
  const [isactive, setisactive] = useState(11);
  const [checked, setChecked] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState('UAH');
  const [donate, {data, isLoading}] = useDonateMutation();
  
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
      alert("Виберіть суму донату й введіть номер мобільно телефону");
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
      await donate(donat).unwrap();
      let formContainer = document.getElementById('donationFormContainer');

      if (!formContainer) {
        // Створюємо новий контейнер для форми, якщо його ще немає
        formContainer = document.createElement('div');
        formContainer.id = 'donationFormContainer';
        formContainer.style.display = 'none'; // Ховаємо форму
        document.body.appendChild(formContainer);
      }

      // Оновлюємо HTML у контейнері форми
      formContainer.innerHTML = data as string;

      // Знаходимо форму та надсилаємо її
      const form = formContainer.querySelector('form');
      if (form) {
        form.submit(); // Автоматично викликаємо submit()
      }
    } catch (error) {

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
      
      <input type="number" className={styles.tel} placeholder="Введіть номер телефону..." value={tel} onChange={(e) => setTel(e.target.value)} />
      <div className={styles.agreement}>
        <input type="checkbox" className={styles.checkbox} onChange={(e) => setChecked(e.target.checked)}/>
        <p className={styles.agree}>
          {t('agree1')}  <span style={{ textDecoration: 'underline' }}>{t('agree2')}</span>
        </p>
      </div>
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