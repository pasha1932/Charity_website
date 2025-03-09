import { Result } from '@/entities/result';
import styles from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';

const FondResults = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  const { t } = useTranslation();

  const CONTENT_RESULTS = [
    { title:  t('resText1'), count: 2420 },
    { title: t('resText2'), count: 145308 },
    { title:  t('resText1'), count: 1305 },
    { title:  t('resText2'), count: 9452305 },
    { title:  t('resText2'), count: 245305 },
  ]

  return ( 
    <section className={styles.results}>
      <div className='container'>
        <h4 className={styles.title}>{t('fondRes')}</h4>
        <h6 className={styles.subtitle}>{t('weTried')}</h6>
      </div>
      <div className={styles.resultsList}>
        <Slider {...settings} className={styles.slider}>
          {CONTENT_RESULTS.map((item) => <Result count={item.count} title={item.title} key={item.title} />)}
        </Slider>
      </div>
    </section>
   );
}
 
export default FondResults;