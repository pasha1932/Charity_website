import styles from './styles.module.scss';
type Props = {
  name: string,
  position: string,
  image: string,
}

const Teammate: React.FC<Props> = ({name, position, image}) => {
  return ( 
    <article className={styles.teammate} style={{backgroundImage: `url(${image})`}}>
      <div className={styles.name} >{name}</div>
      <div className={styles.position}>{position}</div>
    </article>
   );
}
 
export default Teammate;