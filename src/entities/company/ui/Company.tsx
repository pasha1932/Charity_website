import styles from './styles.module.scss';
type Props = {
  image: string,
  id: number,
}



const Company: React.FC<Props> = ({ image }) => {

  return ( 
    <div className={styles.company}>
      <img src={image} alt="" className={styles.img} />
      
    </div>
   );
}
 
export default Company;