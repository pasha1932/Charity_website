import { Result } from '@/entities/result';
import styles from './styles.module.scss'
import { CONTENT_RESULTS } from "@/shared/consts/contentResults";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FondResults = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };

  return ( 
    <section className={styles.results}>
      <div className='container'>
        <h4 className={styles.title}>Результати фонду</h4>
        <h6 className={styles.subtitle}>Ми намагаємося зробити все можливе, щоб наблизити нас до перемоги</h6>
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