import { Button } from '@/shared/ui/button';
import { useTranslation } from 'react-i18next';

const SeeAllBtn = () => {
  const { t } = useTranslation();

  return ( 
    <Button variant='usual'>{t('seeAllNews')}</Button>
   );
}
 
export default SeeAllBtn;