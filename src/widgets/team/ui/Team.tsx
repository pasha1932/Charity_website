import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavHashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import Teammate from '@/entities/teammate/ui/Teammate';
import connectImg from '@/shared/assets/images/connectUs.png';
import { useGetUsersQuery } from '@/admin/users-list/api/UsersApi';


const Team = () => {
  const { t } = useTranslation();

  const { data } = useGetUsersQuery({page: 0, size: 50});
  
  const settings = {
    infinite: false,    
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
          {data?.content.map(item => <Teammate key={item.position} name={item.firstName + ' ' + item.lastName} position={item.position} image={item.avatarUrl} />)}
          </Slider>
      </div>
    </section>
  );
}
 
export default Team;