import { TEAMMATES } from '@/shared/consts/teammates';
import styles from './styles.module.scss';
import Teammate from '@/entities/teammate/ui/Teammate';
import connectImg from '@/shared/assets/images/connectWithUs.png';

const Team = () => {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.top}>
          <div className={styles.left}>
            <h2 className={styles.title}>Наша команда</h2>
            <p className={styles.text}>Команда спеціалізується по різним секторам роботи: дитячий, працевлаштування та медичний. Кожен з учасників команди віддається своїй праці на 100 відсотків і наші офіси розташовані по декільком точкам країни</p>
          </div>
          <img src={connectImg} alt="connect" className={styles.img} />
          </div>
        <div className={styles.team}>
          {TEAMMATES.map(item => <Teammate key={item.name} name={item.name} position={item.position} image={item.image} />)}
        </div>
      </div>
    </section>
  );
}
 
export default Team;