import { Project, useGetProjectsQuery, useUpdateProjectStatusMutation } from "@/widgets/projects/api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/shared/hooks/reduxHooks";
import classNames from "classnames";
import styles from './styles.module.scss';
import pencil from '@/shared/assets/images/icons/pencil.svg';
import details from '@/shared/assets/images/icons/details.png';
import { Modal } from "@/admin/modal";
import { formatDate } from "@/admin/news-list/ui/NewsList";
import BtnBack from "@/shared/ui/button-back/ui/BtnBack";


export const ProjectsList = () => {
  const [activeRow, setActiveRow] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<null | Project>(null);
  const [isChangeStatus, setIsChangeStatus] = useState(false);
  const projects = useAppSelector(state => state.projects.projects);
  const navigate = useNavigate();
  const { data, error, isLoading, refetch } = useGetProjectsQuery({ page: 0, size: 50 });
  const [updateStatus, {isLoading: statusLoad}] = useUpdateProjectStatusMutation();
  const [selectedStatus, setSelectedStatus] = useState('');

  console.log(selectedStatus)

    const handleDetailsClick = (project: Project) => {
      setSelectedProject(project);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
    };
    
  const handleChangeStatus = (project: Project) => {
    setSelectedProject(project);
    setIsChangeStatus(true);
  }

  const handleUpdateStatus = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedProject || !selectedStatus) {
      alert("Будь ласка виберіть проект й статус");
      return;
    }

  const projectItem = {
    id: selectedProject.id,
    status: selectedStatus,
  };

    try {
      await updateStatus(projectItem).unwrap();
      alert('Статус проекту було успішно змінено');
      refetch();
    } catch (error) {
      console.error('Failed to update project status:', error);
    }
  }
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <section className={styles.section}>
    <div className="container">
      <BtnBack />
      <div className={styles.content}>
        <h1 className={styles.title}>Проєкти</h1>
        {projects ? (<table className={styles.table}>
        <thead>
          <tr>
            <th>Назва</th>
            <th>Зібрана сума</th>
            <th>Статус</th>
            <th>Деталі</th>
            <th>Змінити статус</th>
              
          </tr>
        </thead>
        
        {data?.content.map((item: Project) => (
          <tr
            key={item.id}
            onClick={() => setActiveRow(item.id)}
            className={classNames(styles.row, { [styles.rowActive]: activeRow === item.id })}
          > 
              <td>{item.name}</td>
              <td>{item.collectedAmount}</td>
              <td>{item.status}</td>
              <td style={{cursor: 'pointer'}} onClick={() => handleDetailsClick(item)}><img src={details} alt="" className={styles.icon}/></td>
              <td style={{cursor: 'pointer'}} onClick={() => handleChangeStatus(item)}><img src={pencil} alt="" className={styles.icon}/></td>

          </tr>
          
        ))}
        </table>) : (<h2>Проектів ще немає</h2>)}

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProject && (
            <div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Заголовок:</h5>
                <p style={{fontWeight: 500}}>{selectedProject.name}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Опис:</h5>
                <textarea>{selectedProject.description}</textarea>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Зображення:</h5>
                <img style={{ width: '180px', borderRadius: '15px'}} src={selectedProject.imageUrl} />
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Дедлайн:</h5>
                <p>{formatDate(selectedProject.deadline)}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Зібрана сума:</h5>
                <p>{selectedProject.collectedAmount} грн</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Сума, яку потрібно зібрати:</h5>
                <p>{selectedProject.goalAmount} грн</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Статус</h5>
                <p>{selectedProject.status}</p>
              </div>
              
              
          </div>
        )}
      </Modal>
        
        <button className={styles.btn} onClick={() => navigate('/admin/projects/create')}>Створити проєкт</button>
        
        {isChangeStatus && <form className={styles.form} onSubmit={handleUpdateStatus}>
                  <h5>Виберіть статус проекту:</h5>
                  <div className={styles.item}>
            <label style={{ display: 'flex', justifyContent: 'space-around'}}>
                      Статус вибраного проєкту:
                    <p>{selectedProject?.status}</p>
                    </label>
                  </div>
                  
                  
                <select value={selectedStatus}
                  onChange={(e) =>
                      setSelectedStatus(e.target.value)
                  }>
                    
                    <option value="">Виберіть статус, щоб змінити його</option>
                    <option value="ACTIVE">Активний</option>
                    <option value="SUCCESSFULLY_COMPLETED">Успішно завершений</option>
                    <option value="CLOSED">Закритий</option>
                    <option value="FAILED">Провалений</option>
                </select>
                  <button disabled={statusLoad} className={styles.btn}>{statusLoad? 'Змінення...' : 'Змінити статус'}</button>
        
                </form>}
      </div>
      </div>
      </section>
  );
};