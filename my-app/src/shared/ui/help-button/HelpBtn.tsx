import styles from './styles.module.scss';
type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  isActive?: boolean;
};

const HelpBtn: React.FC<ButtonProps> = ({ onClick, children, isActive }) => {
  return ( 
    <button
      onClick={onClick}
      className={styles.btn}
      style={{backgroundColor: isActive ? "#FF8D06" : "#262626"}}
  >
    {children}
  </button>
   );
}
 
export default HelpBtn;