import { CONTENT_SOCIALS } from "@/shared/consts/contentSocials";
import styles from './styles.module.scss';

const Socials = () => {
  return ( 
    <div className={styles.socials}>
      <p className={styles.text}>Офіційно зареєстрована громадська організація</p>
      <div className={styles.list}>
        {CONTENT_SOCIALS.map(item => (
          <a href={item.link} className={styles.link} key={item.link}>
            <img src={item.img} alt="" className={styles.img} />
          </a>
        ))}
      </div>
    </div>
   );
}
 
export default Socials;