import { Button } from "@/shared/ui/button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GoMainBtn = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (<Button variant='usual' onClick={() => navigate('/')}>{t('goMain')}</Button> );
}
 
export default GoMainBtn;