import { Button } from '@/shared/ui/button';
import styles from './style.module.scss';
import icon from '@/shared/assets/images/icons/partnerBtn.svg';
import { useNavigate } from 'react-router-dom';

const DonateBtn = () => {
  const navigate = useNavigate();

  return ( 
    <Button variant="withIconRight" onClick={() => navigate('payment')}>
      <span className={styles.text}>Донатити</span>
      <img src={icon} alt="" className={styles.icon} />
    </Button>
   );
}
 
export default DonateBtn;