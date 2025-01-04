import { Button } from '@/shared/ui/button';
import styles from './style.module.scss';
import icon from '@/shared/assets/images/icons/partnerBtn.svg';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DonateBtn = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return ( 
    <Button variant="withIconRight" onClick={() => navigate('payment')}>
      <span className={styles.text}>{t('donate')}</span>
      <img src={icon} alt="" className={styles.icon} />
    </Button>
   );
}
 
export default DonateBtn;