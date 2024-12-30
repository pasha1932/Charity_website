import { Button } from '@/shared/ui/button';
import { useNavigate } from 'react-router-dom';
const HelpBtn = () => {
  const navigate = useNavigate();
  return (<Button variant='usual' onClick={() => navigate('payment')}>Допомогти</Button> );
}
 
export default HelpBtn;