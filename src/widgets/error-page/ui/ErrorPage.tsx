import { GoMainBtn } from '@/features/go-main';
import styles from './styles.module.scss';

const ErrorPage = () => {
  return ( 
    <section className="section">
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>Упс ви не туди зайшли....</h1>
          <GoMainBtn />
        </div>
      </div>
    </section>
  );
}
 
export default ErrorPage;