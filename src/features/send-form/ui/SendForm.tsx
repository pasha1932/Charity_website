import { Button } from "@/shared/ui/button";
import { useNavigate } from "react-router-dom";

const SendFormBtn = () => {
  const navigate = useNavigate();
  return ( <Button variant='usual' >Відправити форму</Button> );
}
 
export default SendFormBtn;