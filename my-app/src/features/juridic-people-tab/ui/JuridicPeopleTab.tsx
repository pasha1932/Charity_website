import styles from './styles.module.scss';

const JuridicPeopleTab = () => {
  return ( 
    <div className={styles.content}>
      <div className={styles.top}>
        <h4 className={styles.title}>Реквізити для юридичних осіб</h4>
        <h5 className={styles.subtitle}>Стань супергероєм для тих, кому це необхідно</h5>
      </div>
      <div className={styles.bottom}>
        {['Адреса юридична та фактична:', 'IBAN:', 'Код ЄДРПОУ:', 'Банк отримувача:', 'Отримувач:', 'Валюта рахунку: UAH'].map(item => (
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