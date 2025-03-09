import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import img1 from '@/shared/assets/images/icons/routes1.svg';
import img2 from '@/shared/assets/images/icons/routes2.svg';
import img3 from '@/shared/assets/images/icons/routes3.svg';
import img4 from '@/shared/assets/images/icons/routes4.svg';
import img5 from '@/shared/assets/images/icons/routes5.svg';
import img6 from '@/shared/assets/images/icons/routes6.svg';

const Routes = () => {
  const { t } = useTranslation();
  const values = [t('value1'), t('value2'), t('value3'), t('value4'), t('value5'), t('value6')]
  

  const CONTENT_ROUTES = [
  { title: t('routes1'), icon: img1},
  { title: t('routes2'), icon: img2},
  { title: t('routes3'), icon: img3},
  { title: t('routes4'), icon: img4},
  { title: t('routes5'), icon: img5},
  { title: t('routes6'), icon: img6},
]
  return ( 
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>{t('routesAnd')}</h2>
          <h4 className={styles.subtitle}>{t('routes')}</h4>
          <div className={styles.routes}>
            {CONTENT_ROUTES.map(el => (<div key={el.title} className={styles.route}>
              <img className={styles.icon} src={el.icon} alt="" />
              <p className={styles.text}>{el.title}</p>
            </div>))}
          </div>
          <h4 className={styles.subtitle}>{t('values')}</h4>
          <div className={styles.values}>
            {values.map(el => (
              <div key={el} className={styles.value}>
                <p className={styles.valueText}>{el}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Routes;