import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NewsItem } from "@/entities/newsItem";
import { CONTENT_NEWS } from "@/shared/consts/contentNews";
import styles from './styles.module.scss';
import { SeeAllBtn } from "@/features/see-all-news";
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
// import { useGetNewsQuery } from '../api/api';



const News = () => {
  // const { data, error, isLoading } = useGetNewsQuery({ page: 0, size: 10 });

  // if (isLoading) return <p>Завантаження...</p>;
  // if (error) return <p>Помилка завантаження новин</p>;


  // console.log(data)
  const isMobile = useMediaQuery({ query: '(max-width: 650px)' });
  const { t } = useTranslation();

  const settings = {
    infinite: false,
    // centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    initialSlide: 0,
    // adaptiveHeight: true,
  };

  return ( 
    <section className={styles.section} id="news">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.title}>{t('news')}</h2>
            {isMobile && <div className={styles.seeAll}>{t('seeAll')}</div>}

          </div>
          {!isMobile ? (<div className={styles.newsList}>
            {CONTENT_NEWS.map(item => <NewsItem
              img={item.img}
              date={item.date}
              title={item.title}
              key={item.title}
            />
            )}
          </div>) :
            (<Slider {...settings} className={styles.slider}>
              {CONTENT_NEWS.map(item => <NewsItem
                img={item.img}
                date={item.date}
                title={item.title}
                key={item.title}
              />
              )}
            </Slider>)}
          {!isMobile && <SeeAllBtn />}
        </div>
      </div>
    </section>
   );
}
 
export default News;