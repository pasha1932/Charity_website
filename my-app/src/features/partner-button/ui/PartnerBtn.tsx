import { Button } from '@/shared/ui/button';
import styles from './style.module.scss';
import icon from '@/shared/assets/images/icons/partnerBtn.svg';
import { useNavigate } from 'react-router-dom';

const PartnerBtn = () => {
  const navigate = useNavigate();
  return ( 
    <Button variant="withIconRight" className={styles.headerBtn} onClick={() => navigate('form')}>
      <span className={styles.text}>Стати партнером</span>
      <img src={icon} alt="" className={styles.icon} />
    </Button>
   );
}
 
export default PartnerBtn;