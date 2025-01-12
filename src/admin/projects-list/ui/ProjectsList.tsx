import { Project, useGetProjectsQuery } from "@/widgets/projects/api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/shared/hooks/reduxHooks";
import classNames from "classnames";
import styles from './styles.module.scss';
// import pencil from '@/shared/assets/images/icons/pencil.svg';



export const ProjectsList = () => {
  const [activeRow, setActiveRow] = useState(0);
  const projects = useAppSelector(state => state.projects.projects);
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetProjectsQuery({ page: 0, size: 50 });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div className="container">
      <div className={styles.content}>
        <h1 className={styles.title}>Admin Projects</h1>
        {projects ? (<table className={styles.table}>
        <thead>
        <tr>
        {Object.keys(projects[0]).map((item) => (
          <th key={item}>{item.toUpperCase()}</th>
          
        ))}
            </tr>
        </thead>
        
        {data?.content.map((item: Project) => (
          <tr
            key={item.id}
            onClick={() => setActiveRow(item.id)}
            className={classNames(styles.row, { [styles.rowActive]: activeRow === item.id })}
          >
              <td>{item.id}</td>
              <td>{item.description}</td>
              
              <td>{item.name}</td>
              <td>{item.goalAmount}</td>
            <td>{item.collectedAmount}</td>
            <td>{item.deadline}</td>
            <td>{item.status}</td>
            
            <td><a href={item.imageUrl} target="_blank">image</a></td>
          </tr>
          
        ))}
        </table>) : (<h2>Проектів ще немає</h2>)}
        
        <button  className={styles.btn} onClick={() => navigate('/admin/projects/create')}>Create project</button>
      </div>
    </div>
  );
};