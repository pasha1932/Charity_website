import styles from './styles.module.scss';
type Props = {
  name: string,
  position: string,
  image: string,
}

const Teammate: React.FC<Props> = ({ name, position, image }) => {
  const style = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 62.86%, rgba(0, 0, 0, 0.7) 82.17%), url(${image}) no-repeat center / cover`,
  };
  return ( 
    <article className={styles.teammate} style={style}>
      <div className={styles.name} >{name}</div>
      <div className={styles.position}>{position}</div>
    </article>
   );
}
 
export default Teammate;