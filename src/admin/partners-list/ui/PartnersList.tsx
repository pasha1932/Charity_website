import classNames from 'classnames';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Partner, useGetPendingPartnersQuery, useUpdatePartnerStatusMutation } from '@/widgets/parters/api/api';
import pencil from '@/shared/assets/images/icons/pencil.svg';
import details from '@/shared/assets/images/icons/details.png';
import { Modal } from '@/admin/modal';
import BtnBack from '@/shared/ui/button-back/ui/BtnBack';

const PartnersList = () => {
  const [activeRow, setActiveRow] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChangeStatus, setIsChangeStatus] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedPartner, setSelectedPartner] = useState<null | Partner>(null);
      const [updateStatus, {isLoading: statusLoad}] = useUpdatePartnerStatusMutation();
  
  // const projects = useAppSelector(state => state.projects.projects);
  const navigate = useNavigate();
  const { data, error, isLoading, refetch } = useGetPendingPartnersQuery({ page: 0, size: 50 });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

    const handleDetailsClick = (partner: Partner) => {
      setSelectedPartner(partner);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedPartner(null);
    };
  
    const handleChangeStatus = (project: Partner) => {
      setSelectedPartner(project);
      setIsChangeStatus(true);
  }
  
  const handleUpdateStatus = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedPartner || !selectedStatus) {
      alert("Будь ласка виберіть партнера й статус");
      return;
    }

  const projectItem = {
    id: selectedPartner.id,
    status: selectedStatus,
  };

    try {
      await updateStatus(projectItem).unwrap();
      alert('Статус партнера було успішно змінено');
      refetch();
    } catch (error) {
      console.error('Failed to update partner status:', error);
    }
  }

  return (
    <section className={styles.section}>
      <div className="container">
      <BtnBack />
      <div className={styles.content}>
        <h1 className={styles.title}>Партнери</h1>
        {data?.content ? (<table className={styles.table}>
        <thead>
        <tr>
        <th>Ім'я партнера</th>
        <th>Тип партнера</th>
        <th>Статус</th>
        <th>Деталі</th>
        <th>Змінити статус</th>
            </tr>
        </thead>
        
        {data?.content.map((item: Partner) => (
          <tr
            key={item.id}
            onClick={() => setActiveRow(item.id)}
            className={classNames(styles.row, { [styles.rowActive]: activeRow === item.id })}
          >
              <td>{item.partnerName}</td>
              
              <td>{item.partnerType}</td>
              <td>{item.partnerStatus}</td>
            <td style={{cursor: 'pointer'}} onClick={() => handleDetailsClick(item)}><img src={details} alt="" className={styles.icon}/></td>
            <td style={{cursor: 'pointer'}} onClick={() => handleChangeStatus(item)}><img src={pencil} alt="" className={styles.icon}/></td>
              
          </tr>
          
        ))}
        </table>) : (<h2>Партнерів ще немає</h2>)}

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedPartner && (
            <div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Назва партнера:</h5>
                <p style={{fontWeight: 500}}>{selectedPartner.partnerName}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Тип партнера:</h5>
                <p style={{fontWeight: 500}}>{selectedPartner.partnerType === 'FOP' ? 'ФОП': ''}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Ціль співпрацювання:</h5>
                <p style={{fontWeight: 500}}>{selectedPartner.cooperationGoal}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Лого партнера:</h5>
                <img style={{ width: '180px', borderRadius: '15px'}} src={selectedPartner.logoUrl} />
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Адреса:</h5>
                <p>{selectedPartner.legalAddress}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Посилання на сайт:</h5>
                <p>{selectedPartner.siteUrl}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>ЄРДПОУ:</h5>
                <p>{selectedPartner.identificationCode}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Статус</h5>
                <p>{selectedPartner.partnerStatus === 'PENDING' ? 'В очікуванні': ''}</p>
              </div>
               <div className={styles.modalRow}>
                    <h5 style={{ color: 'black' }}>Дані про директора:</h5>
                    <div className={styles.director}>
                      <div className="col">
                        <p>Номер телефону</p>
                        <img style={{ width: '30px' }} src={selectedPartner.director.phoneNumber} />
                      </div>
                      <div className="col">
                        <p>Повне Ім'я</p>
                        <p>{selectedPartner.director.firstName}{' '}{selectedPartner.director.lastName}{' '}{selectedPartner.director.middleName}</p>
                        </div>
                      <div className="col">
                        <p>Пошта</p>
                        <p>{selectedPartner.director.email}</p>
                      </div>
                    </div>
          </div>
          </div>
        )}
          </Modal>
          
          {isChangeStatus && <form className={styles.form} onSubmit={handleUpdateStatus}>
                <h5>Виберіть статус партнера:</h5>
                <div className={styles.item}>
          <label style={{ display: 'flex', justifyContent: 'space-around'}}>
                    Статус вибраного партнера:
                  <p>{selectedPartner?.partnerStatus}</p>
                  </label>
                </div>
                
                
              <select value={selectedStatus}
                onChange={(e) =>
                    setSelectedStatus(e.target.value)
                }>
                  
                  <option value="">Виберіть статус, щоб змінити його</option>
                  <option value="ACTIVE">Активний</option>
                  <option value="PENDING">В Очікуванні</option>
                  <option value="CANSELED">Скасовано</option>
              </select>
                <button disabled={statusLoad} className={styles.btn}>{statusLoad? 'Змінення...' : 'Змінити статус'}</button>
      
              </form>}
        
        <button  className={styles.btn} onClick={() => navigate('/admin/partners/create')}>Створити партнера</button>
      </div>
      </div>
      </section>
  );
}
 
export default PartnersList;