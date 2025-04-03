import styles from './styles.module.scss';
import dollar from '@/shared/assets/images/icons/dollar.svg';
import grn from '@/shared/assets/images/icons/grn.png';
import icon2 from '@/shared/assets/images/icons/switcherDark.svg';

type Props = {
  click: () => void;
  currency: string;
}

const CurrencySwitcher: React.FC<Props> = ({ click, currency }) => {
  return ( 
    <button className={styles.btn} onClick={click}>
      <img src={icon2} alt="" />
      {currency === 'USD' ? <img src={dollar} alt="" className={styles.icon} /> : <img src={grn} alt="" className={styles.icon} />}
    </button>
   );
}
 
export default CurrencySwitcher;