import styles from './styles.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import BtnBack from '@/shared/ui/button-back/ui/BtnBack';
import { Donate, useGetDonatesQuery } from "../api/donates-api";

const DonatesList = () => {
  const [activeRow, setActiveRow] = useState(0);

  const { data, error, isLoading } = useGetDonatesQuery({ page: 0, size: 50 });

  if (isLoading) return <div>Завантаження...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div className={styles.section}>
    <div className="container">
      <BtnBack />
      <div className={styles.content}>
        <h1 className={styles.title}>Донати</h1>
        {data ? (<table className={styles.table}>
        <thead>
        <tr>
          <th>Сума</th>
          <th>Валюта</th>
          <th>Дата</th>
          <th>Пошта</th>
          <th>Ім'я</th>
          
            </tr>
        </thead>
        
        {data?.content?.map((item: Donate) => (
          <tr
            key={item.id}
            onClick={() => setActiveRow(item.id)}
            className={classNames(styles.row, { [styles.rowActive]: activeRow === item.id })}
          >
              {/* <td>{item.id}</td> */}
              <td>{item.amount}</td>
              <td>{item.currency}</td>
              <td>{item.donationDate}</td>
              <td>{item.donorEmail}</td>
              <td>{item.donorName}</td>
            
          </tr>
          
        ))}
        </table>) : (<h2>Донатів ще немає</h2>)}
      </div>
      </div>
      </div>
  );
}
 
export default DonatesList;