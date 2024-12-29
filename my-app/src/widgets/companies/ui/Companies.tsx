import styles from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { COMPANIES } from '@/shared/consts/companies';
import { Company } from '@/entities/company';

const Companies = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    adaptiveHeight: true,
  };

  return (<section className={styles.section}>
    <div className={styles.content}>
      <Slider {...settings} className={styles.slider}>
        {COMPANIES.map(item => <Company image={item.img} key={item.img} />
        )}
    </Slider>
    </div>
  </section> );
}
 
export default Companies;