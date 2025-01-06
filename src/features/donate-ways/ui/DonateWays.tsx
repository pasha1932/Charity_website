import classNames from 'classnames';
import styles from './styles.module.scss';
import { Button } from '@/shared/ui/button';

type Props = {
  onKindDonate: (val: boolean) => void;
  onActiveTab: (val: string) => void;
  activeTab: string;
}

const DonateWays: React.FC<Props> = ({onActiveTab, onKindDonate, activeTab}) => {
  const handleChoose = () => {
    onKindDonate(true);
  }

  return ( 
    <div className={styles.content}>
          <div className={styles.top}>
            <h4 className={styles.title}>Оберіть спосіб яким ви хочете задонатити</h4>
          </div>
          <h5 className={styles.subtitle}>Стань супергероєм для тих, кому це необхідно</h5>
          <div className={styles.tabsList}>
            {['Разова допомога', 'Щомісячна допомога', 'Юридичні особи', 'Наша монобанка', 'Криптовалюта', 'З-за кондону'].map((item,) => (
              <button
                className={classNames(styles.tab, { [styles.tabActive]: item === activeTab })}
                key={item}
                onClick={() => onActiveTab(item)}
              >
                <h5 className={styles.text}>{item}</h5>
              </button>))}
      </div>
      <Button variant='usual' onClick={() => handleChoose()} style={{alignSelf: 'center'}}>Обрати спосіб</Button>
      </div>
  );
}
 
export default DonateWays;