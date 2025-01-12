import { News, useGetNewsQuery, useUpdateNewsCoverImageMutation, useUpdateNewsTextMutation } from '@/widgets/news/api/api';
import styles from './styles.module.scss';
import { useAppSelector } from '@/shared/hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';
import pencil from '@/shared/assets/images/icons/pencil.svg';
// import { useState } from 'react';

export const NewsList = () => {
  const [activeRow, setActiveRow] = useState(0);
  const news = useAppSelector(state => state.news.news);
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetNewsQuery({ page: 0, size: 50 });

  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div className="container">
      <div className={styles.content}>
        <h1 className={styles.title}>Admin News</h1>
        {news ? (<table className={styles.table}>
        <thead>
        <tr>
        {Object.keys(news[0]).map((item) => (
          <th key={item}>{item}</th>
          
        ))}
          <th>Edit</th>
            </tr>
        </thead>
        
        {news?.map((item: News) => (
          <tr
            key={item.id}
            onClick={() => setActiveRow(item.id)}
            className={classNames(styles.row, { [styles.rowActive]: activeRow === item.id })}
          >
              <td>{item.id}</td>
              <td>{item.author.email}</td>
              
              <td>{item.title}</td>
              <td>{item.content}</td>
              <td>{item.createTime}</td>
            <td><a href={item.coverImageUrl} target="_blank">image</a></td>
            <td onClick={() => navigate(`/admin/news/update/${item.id}`)}><img src={pencil} alt="" className={styles.icon} /></td>
          </tr>
          
        ))}
        </table>) : (<h2>Новин ще немає</h2>)}
        {/* Створити форму для додавання новин */}
        
        {/* форма для едіту тексту */}
        <button onClick={() => navigate('/admin/news/create')} className={styles.btn}>Create news</button>
        {/* <Link to="/admin/news/update" className={styles.listLink}>Update</Link> */}
        {/* <CreateNewsForm /> */}
      </div>
    </div>
  );
};