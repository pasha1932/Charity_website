import { Button } from '@/shared/ui/button';
import styles from './styles.module.scss';
import icon from '@/shared/assets/images/icons/handFast.svg';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FastDonateBtn = () => {
  const navigate = useNavigate();
  
  const { t } = useTranslation();
  return ( 
    <Button variant="withIconLeft"  onClick={() => navigate('payment')}>
      <img src={icon} alt="" className={styles.icon} />
      <span className={styles.text}>{t('fastDon')}</span>
    </Button>
  );
}
 
export default FastDonateBtn;