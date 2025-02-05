import { DonateBtn } from '@/features/donate-button';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
type Props = {
  title: string,
  img: string,
  goalAmount: number,
  endTermin: string,
  collected: string,
  id: number,
}

const Project: React.FC<Props> = ({ title, img, endTermin, collected, goalAmount, id }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString); // Перетворюємо строку у дату
    return date.toLocaleDateString('uk-UA', {
      day: 'numeric',    // День без нуля попереду
      month: 'long',     // Повна назва місяця
    });
  };
  const style = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 62.86%, rgba(0, 0, 0, 0.7) 82.17%), url(${img}) no-repeat center / cover`,
  };
  function formatMoney(amount: number) {
    if (amount >= 1000000) {
      // Якщо більше або дорівнює 1 мільйону
      return `${(amount / 1000000).toFixed(1).replace('.0', '')} млн. грн`;
    } else if (amount >= 1000) {
      // Якщо більше або дорівнює 1 тисячі
      return `${(amount / 1000).toFixed(1).replace('.0', '')} тис. грн`;
    } else {
      // Якщо менше тисячі
      return `${amount} грн`;
    }
  }
  const { t } = useTranslation();

  return ( 
    <div
      className={styles.project}
      style={style}>
      <DonateBtn projectId={id} />
      <div className={styles.content} >
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <p className={styles.termin}>{t('end')}</p>
            <p className={styles.text}>{formatDate(endTermin)}</p>
          </div>
          <div className={styles.right}>
            <p className={styles.termin}>{t('collected')}</p>
            <p className={styles.text}>{formatMoney(+collected)}</p>
            <div className={styles.bar}>
              <div className={styles.innerBar} style={{width: `${(100 * +collected) / goalAmount}%`}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Project;