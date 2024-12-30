import { SeeAllBtn } from '@/features/see-all-news';
import styles from './styles.module.scss';
import { HelpBtn } from '@/features/help-buton';

const Help = () => {
  return ( 
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Країна потребує твоєї допомоги, не будь байдужим</h2>
          <HelpBtn />
        </div>
      </div>
    </section>
   );
}
 
export default Help;