
import styles from './styles.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import BtnBack from '@/shared/ui/button-back/ui/BtnBack';
import { useGetUsersQuery, User } from '../api/UsersApi';

export const UsersList = () => {
  const [activeRow, setActiveRow] = useState('');

  const { data, error, isLoading } = useGetUsersQuery({ page: 0, size: 50 });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div className={styles.section}>
    <div className="container">
      <BtnBack />
      <div className={styles.content}>
        <h1 className={styles.title}>Користувачі</h1>
        {data ? (<table className={styles.table}>
        <thead>
        <tr>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>По-батькові</th>
          <th>Ким працює</th>
          <th>Зображення аватару</th>
          
            </tr>
        </thead>
        
        {data?.content?.map((item: User) => (
          <tr
            key={item.firstName}
            onClick={() => setActiveRow(item.position)}
            className={classNames(styles.row, { [styles.rowActive]: activeRow === item.position })}
          >
              {/* <td>{item.id}</td> */}
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.middleName}</td>
              <td>{item.position}</td>
            <td><a href={item.avatarUrl}>Зображення</a></td>
          </tr>
          
        ))}
        </table>) : (<h2>Користувачів ще немає</h2>)}
      </div>
      </div>
      </div>
  );
};