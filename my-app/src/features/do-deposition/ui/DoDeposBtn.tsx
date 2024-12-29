import icon from '@/shared/assets/images/icons/handFast.svg';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Button } from '@/shared/ui/button';

type Props = {
  disabled: boolean,
  title: string,
};

const DoDeposBtn: React.FC<Props> = ({ disabled, title }) => {
  
  return ( 
    <Button
      variant="usual"
      disabled={!disabled}
    >
    <img src={icon} alt="" className={styles.icon} />
    <span className={styles.text}>Зробити внесок</span>
  </Button>
  );
}
export default DoDeposBtn;