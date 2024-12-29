import { Button } from '@/shared/ui/button';
import styles from './styles.module.scss';
import icon from '@/shared/assets/images/icons/becameVoln.svg';
import { useNavigate } from 'react-router-dom';

const VolntBtn = () => {
  const navigate = useNavigate();

  return ( 
    <Button variant="withIconRight" className={styles.headerBtn} onClick={() => navigate('/form')}>
      <span className={styles.text}>Стати волонтером</span>
      <img src={icon} alt="" className={styles.icon} />
    </Button>
   );
}
 
export default VolntBtn;