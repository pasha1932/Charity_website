import { DoDeposBtn } from "@/features/do-deposition";
import styles from './styles.module.scss';
import { useState } from "react";
import classNames from "classnames";

const OneTimeTab = () => {
  const [isActive, setIsActive] = useState(0);
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <h4 className={styles.title}>Оберіть суму, яку ви хочете задонатити</h4>
      </div>
      <h5 className={styles.subtitle}>Стань супергероєм для тих, кому це необхідно</h5>
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
          <input className={styles.text} placeholder="Ваша сума"></input>
        </div>
      </div>
      <div className={styles.agreement}>
        <input type="checkbox" className={styles.checkbox} onChange={(e) => setChecked(e.target.checked)}/>
        <p className={styles.agree}>
          Я ознайомився/-лась і погоджуюсь з умовами  <span style={{ textDecoration: 'underline' }}>публічної оферти</span>
        </p>
      </div>
      <DoDeposBtn disabled={checked} title="Зробити внесок" />
    </div>
  );
}
 
export default OneTimeTab;