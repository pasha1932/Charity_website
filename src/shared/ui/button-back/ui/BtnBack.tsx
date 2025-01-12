import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import back from '@/shared/assets/images/icons/back.svg'

const BtnBack = () => {
  const navigate = useNavigate();

  return ( 
    <button className={styles.back} onClick={() => navigate(-1)}>
      <img src={back} alt="" className={styles.img} />
    </button>
   );
}
 
export default BtnBack;