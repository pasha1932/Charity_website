import classNames from 'classnames';
import styles from './styles.module.scss';
import { Button } from '@/shared/ui/button';
import { useTranslation } from 'react-i18next';

type Props = {
  onKindDonate: (val: boolean) => void;
  onActiveTab: (val: string) => void;
  activeTab: string;
}

const DonateWays: React.FC<Props> = ({ onActiveTab, onKindDonate, activeTab }) => {
  const handleChoose = () => {
    onKindDonate(true);
  }

  const { t } = useTranslation();

  const tabs = [
    {
      id: "one-time",
      label: t('oneTime'),
    },
    {
      id: "judge-person",
      label: t('juridic'),
    
    },
    {
      id: "monobank",
      label: t('monobank'),
  
    },
  ];

  return ( 
    <div className={styles.content}>
          <div className={styles.top}>
        <h4 className={styles.title}>{t('paymWay')}</h4>
          </div>
      <h5 className={styles.subtitle}>{t('becameHero')}</h5>
          <div className={styles.tabsList}>
            {tabs.map((item) => (
              <button
                className={classNames(styles.tab, { [styles.tabActive]: item.id === activeTab })}
                key={item.id}
                onClick={() => onActiveTab(item.id)}
              >
                <h5 className={styles.text}>{item.label}</h5>
              </button>))}
      </div>
      <Button variant='usual' onClick={() => handleChoose()} style={{ alignSelf: 'center' }}>{t('paymChoose')}</Button>
      </div>
  );
}
 
export default DonateWays;