import { VolntBtn } from '@/features/volunteer-button';
import arrow from '../assets/images/MainArrow.png';
import styles from './styles.module.scss';

const LetsSaveSection = () => {
  return (
    <div className="container">
      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.right}>
            <h2 className={styles.title}>Давай рятувати світ разом</h2>
            <h6 className={styles.subtitle}>З’єднуємо потреби країни з можливостями допомоги кожному</h6>
            <VolntBtn />
          </div>
        
          <div className={styles.left}>
            <img src={arrow} alt="arrow" className={styles.img} />
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default LetsSaveSection;