import styles from './styles.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import delet from '@/shared/assets/images/icons/delete.png';
import BtnBack from '@/shared/ui/button-back/ui/BtnBack';
import { AllowedEmail, useCreateAllowedEmailMutation, useDeleteEmailMutation, useGetEmailQuery } from '../api/allowedEmailApi';

const options = [
  { value: 'ROLE_SUPER_ADMIN', label: 'Супер адмін' },
  { value: 'ROLE_ADMIN', label: 'Адмін' },
  { value: 'ROLE_EDITOR', label: 'Редактор' },
];

const AllowedEmailList = () => {
  const [activeRow, setActiveRow] = useState(0);

  const [deletingId, setDeletingId] = useState<null | number>(null);

  const [createEmail, {isLoading: creatingLoad}]= useCreateAllowedEmailMutation();
  const [deleteEmail] = useDeleteEmailMutation();
  const [email, setEmail] = useState('');
  const [roleName, setRoleName] = useState(options[1].value);
  const [isAdding, setIsAdding] = useState(false);

  const { data, refetch } = useGetEmailQuery({ page: 0, size: 50 });

  const addEmail = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email) {
      alert("Будь ласка заповніть поля коректно(Заголовок й контент більше 10 символів)");
      return;
    }

  const item = {
    email,
    roleName,
  };

    try {
      await createEmail(item).unwrap();
      alert('Пошту було додано');
      refetch();
    } catch (error) {
      console.error('Failed to update news:', error);
    }
  }

  const handleDelete = async (id: number) => {
    setDeletingId(id);
    try {
      await deleteEmail(`${id}`).unwrap();
      alert('Пошта була успішно видалена');
      refetch();
    } catch (err) {
      console.log(err);
    }
  }
  console.log(data)
  return ( 
    <div className={styles.section}>
    <div className="container">
      <BtnBack />
      <div className={styles.content}>
        <h1 className={styles.title}>Дозволені пошти для співробітників</h1>
        {data ? (<table className={styles.table}>
        <thead>
        <tr>
          <th>id</th>
          <th>Пошта</th>
          <th>Роль</th>
          <th>Видалити</th>
            </tr>
        </thead>
        
        {data?.content?.map((item: AllowedEmail) => (
          <tr
            key={item.id}
            onClick={() => setActiveRow(item.id)}
            className={classNames(styles.row, { [styles.rowActive]: activeRow === item.id })}
          >
              <td>{item.id}</td>
              
              <td>{item.email}</td>
              <td>{item.roleName}</td>
            {/* <td style={{cursor: 'pointer'}} onClick={() => handleDetailsClick(item)}><img src={details} alt="" className={styles.icon}/></td> */}
            
            <td style={{cursor: 'pointer'}} onClick={() => handleDelete(item.id)}>{deletingId !== item.id ? <img src={delet} alt="" className={styles.icon} /> : 'Видалення...'}</td>
          </tr>
          
        ))}
        </table>) : (<h2>Новин ще немає</h2>)}
        
        {/* форма для едіту тексту */}
        <button onClick={() => setIsAdding(true)} className={styles.btn}>Додати пошту для працівника</button>
        {isAdding && <form className={styles.form} onSubmit={addEmail}>
          <h4>Введіть пошту, щоб додати її до списку</h4>
          <div className={styles.item}>
            <label>
              Пошта:
              <input type="email" onChange={(e) => setEmail(e.target.value)} required />
            </label>
          </div>
          <div className={styles.item}>
            <label>
              Роль:
                <select value={roleName} onChange={e => setRoleName(e.target.value)}>
                  {options.map(el => <option key={el.label} value={el.value}>{el.label}</option>)}
              </select>
            </label>
          </div>
          <button disabled={creatingLoad} className={styles.btn}>{creatingLoad ? 'Додавання...' : 'Додати пошту'}</button>

        </form>}
          
      </div>
      </div>
      </div>
   );
}
 
export default AllowedEmailList;