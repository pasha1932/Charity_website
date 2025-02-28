
import styles from './styles.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import delet from '@/shared/assets/images/icons/delete.png';
import BtnBack from '@/shared/ui/button-back/ui/BtnBack';
import { Document, useDeleteDocumentMutation, useGetFoundingsQuery, useGetReportsQuery } from '../api/docupentsApi';
import { useNavigate } from 'react-router-dom';

export const DocumentsList = () => {
  const [activeRow, setActiveRow] = useState(100);
  const [deletingId, setDeletingId] = useState<null | number>(null);
  const navigate = useNavigate();

  const { data: reportData, error: reportError, isLoading: reportLoad, refetch: reportRefetch } = useGetReportsQuery({ page: 0, size: 50 });
  const { data, error, isLoading, refetch } = useGetFoundingsQuery({ page: 0, size: 50 });
    const [deleteNews] = useDeleteDocumentMutation();
  console.log(data, reportData)

  if (isLoading || reportLoad) return <div>Loading...</div>;
  if (error || reportError) return <div>Error: {JSON.stringify(error)}</div>;

  const handleDelete = async (id: number) => {
    setDeletingId(id);
    try {
      await deleteNews(`${id}`).unwrap();
      alert('Документ був успішно видалений');
      refetch();
      reportRefetch();
    } catch (err) {
      // alert(`Щось пішло не так: ${(error as any).data?.error || 'Невідома помилка'}`);
      console.log(err);
    }
  }

  return (
    <div className={styles.section}>
    <div className="container">
      <BtnBack />
      <div className={styles.content}>
          <h1 className={styles.title}>Звіти</h1>
        {reportData ? (<table className={styles.table}>
        <thead>
        <tr>
          <th>Назва файлу</th>
          <th>Дата додавання</th>
          <th>Опис файлу</th>
          <th>Посилання на файл</th>
          <th>Видалити</th>
            </tr>
        </thead>
        
        {reportData.content.map((item: Document) => (
          <tr
            key={item.id}
            onClick={() => setActiveRow(item.id)}
            className={classNames(styles.row, { [styles.rowActive]: activeRow === item.id })}
          >
              <td>{item.fileName}</td>
              <td>{item.uploadedAt}</td>
              <td>{item.description}</td>
              <td><a href={item.fileUrl} target='_blank'>Файл</a></td>
              <td style={{cursor: 'pointer'}} onClick={() => handleDelete(item.id)}>{deletingId !== item.id ? <img src={delet} alt="" className={styles.icon} /> : 'Видалення...'}</td>

          </tr>
          
        ))}
          </table>) : (<h2>Звітів ще немає</h2>)}
          <h1 className={styles.title} style={{marginTop: '40px'}}>Установчі документи</h1>
        {data ? (<table className={styles.table}>
        <thead>
        <tr>
          <th>Назва файлу</th>
          <th>Дата додавання</th>
          <th>Опис файлу</th>
          <th>Посилання на файл</th>
          <th>Видалити</th>
            </tr>
        </thead>
        
        {data.content.map((item: Document) => (
          <tr
            key={item.id}
            onClick={() => setActiveRow(item.id)}
            className={classNames(styles.row, { [styles.rowActive]: activeRow === item.id })}
          >
              <td>{item.fileName}</td>
              <td>{item.uploadedAt}</td>
              <td>{item.description}</td>
              <td><a href={item.fileUrl} target='_blank'>Файл</a></td>
              <td style={{cursor: 'pointer'}} onClick={() => handleDelete(item.id)}>{deletingId !== item.id ? <img src={delet} alt="" className={styles.icon} /> : 'Видалення...'}</td>

          </tr>
          
        ))}
          </table>) : (<h2>Звітів ще немає</h2>)}
        <button onClick={() => navigate('/admin/documents/create')} className={styles.btn}>Додати документ</button>
          
      </div>
      </div>
      </div>
  );
};