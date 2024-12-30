import { PartnerBtn } from "@/features/partner-button";
import img from '@/shared/assets/images/cooperat.png';
import styles from './styles.module.scss';

const Cooperation = () => {
  return (
    <section className={styles.section}>
      <div className="container">
      <h4 className={styles.title}>Звернення та запити на співпрацю</h4>
      <div className={styles.content}>
        <div className={styles.left}>
          <h5 className={styles.subtitle}>Заява для юридичних осіб</h5>
          <h6 className={styles.text}>Подайте запит на співпрацю або фінансову підтримку для спільних благодійних ініціатив.
          </h6>
          <PartnerBtn />
        </div>
        <img src={img} alt="" className={styles.img} />
          </div>
        </div>
    </section>);
}
 
export default Cooperation;