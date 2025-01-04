import { Button } from '@/shared/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const HelpBtn = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (<Button variant='usual' onClick={() => navigate('payment')}>{t('helpBtn')}</Button> );
}
 
export default HelpBtn;