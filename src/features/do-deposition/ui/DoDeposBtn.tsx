import icon from '@/shared/assets/images/icons/handFast.svg';
import styles from './styles.module.scss';
import { Button } from '@/shared/ui/button';

type Props = {
  disabled: boolean,
  title: string,
  click: () => void;
};

const DoDeposBtn: React.FC<Props> = ({ disabled, title, click }) => {
  
  return ( 
    <Button
      variant="usual"
      disabled={!disabled}
      onClick={click}
    >
    <img src={icon} alt="" className={styles.icon} />
      <span className={styles.text}>{title}</span>
  </Button>
  );
}
export default DoDeposBtn;