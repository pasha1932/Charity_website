import { Button } from '@/shared/ui/button';
import { ButtonHTMLAttributes, FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ButtonProps {
  onSee: (val: boolean) => void;
  
}

const SeeAllBtn: FC<ButtonProps> = ({ onSee }) => {
  const { t } = useTranslation();

  return ( 
    <Button variant='usual' onClick={() => onSee}>{t('seeAllNews')}</Button>
   );
}
 
export default SeeAllBtn;