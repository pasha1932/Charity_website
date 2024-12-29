import { Button } from "@/shared/ui/button";
import { useNavigate } from "react-router-dom";

const GoMainBtn = () => {
  const navigate = useNavigate();
  return ( <Button variant='usual' onClick={() => navigate('/')}>На головну</Button> );
}
 
export default GoMainBtn;