import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavHashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import Teammate from '@/entities/teammate/ui/Teammate';
import connectImg from '@/shared/assets/images/connectUs.png';
import img1 from '@/shared/assets/images/worker1.png'
import img2 from '@/shared/assets/images/worker2.png'
import img3 from '@/shared/assets/images/worker3.png'


const Team = () => {
  const { t } = useTranslation();

  const TEAMMATES = [
    { name: t('name1'), position: t('pos1'), image: img1},
    { name: t('name2'), position: t('pos2'), image: img2 },
    { name: t('name3'), position: t('pos3'), image: img3 },
  ];
  
  const settings = {
    infinite: false,
    // centerMode: true,
    slidesToShow:1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    initialSlide: 0,
  };

  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.top}>
          <div className={styles.left}>
            <h2 className={styles.title}>{t('ourTeam')}</h2>
            <p className={styles.text}>{t('teamDeskr')}</p>
          </div>
            <NavHashLink smooth to='#contacts' >
              <div className={styles.connect}>
                <div className={styles.connectTop}>
                  <h6 className={styles.spanText}>{t('connectUs')}</h6>
                </div>
                <img src={connectImg} alt="connect" className={styles.img} />
              </div>
            </NavHashLink>
          </div>
          <Slider {...settings} className={styles.slider}>
          {TEAMMATES.map(item => <Teammate key={item.name} name={item.name} position={item.position} image={item.image} />)}
          </Slider>
      </div>
    </section>
  );
}
 
export default Team;