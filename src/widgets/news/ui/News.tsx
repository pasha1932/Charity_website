import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NewsItem } from "@/entities/newsItem";
import styles from './styles.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { useGetNewsQuery } from '../api/api';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/shared/ui/button';



const News = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 650px)' });
  const { t } = useTranslation();
  const [seeAll, setSeeAll] = useState(6);
  const { data, error, isLoading } = useGetNewsQuery({ page: 0, size: seeAll });
  const formatDate = (dateString: string) => {
    const date = new Date(dateString); // Перетворюємо строку у дату
    return date.toLocaleDateString('uk-UA', {
      day: 'numeric',    // День без нуля попереду
      month: 'long',     // Повна назва місяця
      year: 'numeric'    // Повний рік
    });
  };

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

  const handleSeeAll = () => {
    if (seeAll === 6) {
      setSeeAll(40);
    } else {
      setSeeAll(6);
    }
  }

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка завантаження новин</p>;

  return ( 
    <section className={styles.section} id="news">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.title}>{t('news')}</h2>
            {isMobile && <div className={styles.seeAll}>{t('seeAll')}</div>}

          </div>
          {!isMobile ? (<div className={styles.newsList}>
            {data?.content?.map(item =>
              <Link to={`/news/${item.id}`} key={item.id}>
            <NewsItem
              img={item.coverImageUrl}
              date={formatDate(item.createTime)}
              title={item.title}
            />
            </Link>
            )}
          </div>) :
            (<Slider {...settings} className={styles.slider}>
              {data?.content.map(item =>
              <Link to={`/news/${item.id}`} key={item.id}>
                <NewsItem
                img={item.coverImageUrl}
                date={formatDate(item.createTime)}
                title={item.title}                  />
              </Link>

              )}
            </Slider>)}
          {data && !isMobile && data.content.length >= 6 && <Button variant='usual' onClick={handleSeeAll}>{seeAll === 6 ? t('seeAllNews') : t('hideNews')}</Button>}
        </div>
      </div>
    </section>
   );
}
 
export default News;