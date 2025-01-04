import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './styles.module.scss';
import { useRef } from 'react';
import { Project } from '@/entities/project';
import { PROJECTS } from '@/shared/consts/projects';
import arrow from '@/shared/assets/images/icons/arrow.svg';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    infinite: false,
    // centerMode: true,
    slidesToShow:1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    initialSlide: 0,
    // adaptiveHeight: true,
  };
  const { t } = useTranslation();


  return ( 
    <section className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <h2 className={styles.title}>{t('projects')}</h2>
          <div className={styles.arrows}>
            <button className={styles.arrow} onClick={previous}>
              <img src={arrow} alt="" style={{ transform: 'rotate(180deg)' }} />
            </button>
            <button className={styles.arrow} onClick={next}>
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.content}>
      <div className="container">
        <Slider {...settings} className={styles.slider} ref={sliderRef}>
            {PROJECTS.map(item => <Project
              img={item.img}
              endTermin={item.endTermin}
              title={item.title}
              collected={item.collected}
              key={item.title}
            />
        )}
          </Slider>
        </div>
      </div>
    </section>
   );
}
 
export default Projects;