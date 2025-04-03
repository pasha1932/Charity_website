import styles from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Company } from '@/entities/company';
import { useGetPartnersQuery } from '@/widgets/parters/api/api';

const Companies = () => {
  const { data } = useGetPartnersQuery({ page: 0, size: 20 });
  
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  return (<section className={styles.section}>
    <div className={styles.content}>
      <Slider {...settings} className={styles.slider}>
        {data?.content.map(item => <Company image={item.logoUrl} key={item.partnerName} id={item.id} />
        )}
    </Slider>
    </div>
  </section> );
}
 
export default Companies;