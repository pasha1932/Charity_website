import { GoMainBtn } from "@/features/go-main";
import img from '@/shared/assets/images/formSubm.png';
import styles from './styles.module.scss';

const FormSuccess = () => {
  return ( 
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.title}>Дякуємо! Ми отримали вашу відповідь, найближчим часом ми звʼяжемось з вами</p>
          <img src={img} alt="" className={styles.img} />
          <GoMainBtn />
        </div>
      </div>
    </section>
   );
}
 
export default FormSuccess;