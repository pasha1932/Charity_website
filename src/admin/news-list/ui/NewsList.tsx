import { News, useDeleteNewsItemMutation, useGetNewsQuery } from '@/widgets/news/api/api';
import styles from './styles.module.scss';
import { useAppSelector } from '@/shared/hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from '@/admin/modal';
import classNames from 'classnames';
import pencil from '@/shared/assets/images/icons/pencil.svg';
import delet from '@/shared/assets/images/icons/delete.png';
import details from '@/shared/assets/images/icons/details.png';
import BtnBack from '@/shared/ui/button-back/ui/BtnBack';

export const formatDate = (dateString: string) => {
  const date = new Date(dateString); // Перетворюємо строку у дату
  return date.toLocaleDateString('uk-UA', {
    day: 'numeric',    // День без нуля попереду
    month: 'long',     // Повна назва місяця
    year: 'numeric'    // Повний рік
  });
};

export const NewsList = () => {
  const [activeRow, setActiveRow] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<null | News>(null);
  const [deletingId, setDeletingId] = useState < null | number>(null)


  const news = useAppSelector(state => state.news.news);
  const navigate = useNavigate();
  const { data, error, isLoading, refetch } = useGetNewsQuery({ page: 0, size: 50 });
  const [deleteNews] = useDeleteNewsItemMutation();

  const handleDetailsClick = (news: News) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  const handleDelete = async (id: number) => {
    setDeletingId(id);
    try {
      await deleteNews(`${id}`).unwrap();
      alert('Новина була успішно видалена');
      refetch();
    } catch (err) {
      console.log(err);
    }
  }
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div className={styles.section}>
    <div className="container">
      <BtnBack />
      <div className={styles.content}>
        <h1 className={styles.title}>Новини</h1>
        {news ? (<table className={styles.table}>
        <thead>
        <tr>
          <th>Автор</th>
          <th>Заголовок</th>
          <th>Деталі</th>
          <th>Змінити</th>
          <th>Видалити</th>
            </tr>
        </thead>
        
        {data?.content?.map((item: News) => (
          <tr
            key={item.id}
            onClick={() => setActiveRow(item.id)}
            className={classNames(styles.row, { [styles.rowActive]: activeRow === item.id })}
          >
              {/* <td>{item.id}</td> */}
              <td>{item.author.email}</td>
              
              <td>{item.title}</td>
              {/* <td>{item.content}</td> */}
            {/* <td>{item.createTime}</td> */}
            <td style={{cursor: 'pointer'}} onClick={() => handleDetailsClick(item)}><img src={details} alt="" className={styles.icon}/></td>
            {/* <td><a href={item.coverImageUrl} target="_blank">image</a></td> */}
            <td style={{cursor: 'pointer'}} onClick={() => navigate(`/admin/news/update/${item.id}`)}><img src={pencil} alt="" className={styles.icon}/></td>
            <td style={{cursor: 'pointer'}} onClick={() => handleDelete(item.id)}>{deletingId !== item.id ? <img src={delet} alt="" className={styles.icon} /> : 'Видалення...'}</td>
          </tr>
          
        ))}
        </table>) : (<h2>Новин ще немає</h2>)}
        
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedNews && (
            <div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Заголовок:</h5>
                <p style={{fontWeight: 500}}>{selectedNews.title}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Контент:</h5>
                <textarea>{selectedNews.content}</textarea>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Зображення:</h5>
                <img style={{ width: '180px', borderRadius: '15px'}} src={selectedNews.coverImageUrl} />
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Дата створення:</h5>
                <p>{formatDate(selectedNews.createTime)}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Автор:</h5>
                <div className={styles.author}>
                  <div className="col">
                    <p>Аватар</p>
                    <img style={{ width: '30px' }} src={selectedNews.author.photoUrl} />
                  </div>
                  <div className="col">
                    <p>Повне Ім'я</p>
                    <p>{selectedNews.author.firstName}{' '}{selectedNews.author.lastName}{' '}{selectedNews.author.middleName}</p>
                    </div>
                  <div className="col">
                    <p>Пошта</p>
                    <p>{selectedNews.author.email}</p>
                  </div>
                </div>
              </div>
          </div>
        )}
      </Modal>
        {/* форма для едіту тексту */}
        <button onClick={() => navigate('/admin/news/create')} className={styles.btn}>Створити новину</button>
        {/* <Link to="/admin/news/update" className={styles.listLink}>Update</Link> */}
        {/* <CreateNewsForm /> */}
      </div>
      </div>
      </div>
  );
};