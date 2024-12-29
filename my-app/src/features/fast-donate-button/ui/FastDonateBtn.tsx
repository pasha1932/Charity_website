import { Button } from '@/shared/ui/button';
import styles from './styles.module.scss';
import icon from '@/shared/assets/images/icons/handFast.svg';
import { useNavigate } from 'react-router-dom';

const FastDonateBtn = () => {
  const navigate = useNavigate();
  return ( 
    <Button variant="withIconLeft"  onClick={() => navigate('payment')}>
      <img src={icon} alt="" className={styles.icon} />
      <span className={styles.text}>Швидкий донат</span>
    </Button>
  );
}
 
export default FastDonateBtn;