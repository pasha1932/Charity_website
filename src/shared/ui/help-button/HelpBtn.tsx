import styles from './styles.module.scss';
type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  isactive?: boolean;
};

const HelpBtn: React.FC<ButtonProps> = ({ onClick, children, isactive }) => {
  return ( 
    <button
      onClick={onClick}
      className={styles.btn}
      style={{backgroundColor: isactive ? "#FF8D06" : "#262626"}}
  >
    {children}
  </button>
   );
}
 
export default HelpBtn;