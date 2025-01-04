import { Button } from "@/shared/ui/button";
import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
type Props = {
  disabled?: boolean;
}
const SendFormBtn: React.FC<Props> = ({disabled}) => {
  const { t } = useTranslation();

  return ( <Button variant='usual' disabled={!disabled}>{t('send')}</Button> );
}
 
export default SendFormBtn;