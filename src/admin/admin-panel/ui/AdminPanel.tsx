import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

const AdminPanel: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.content}>
        <h1 className={styles.title}>Управління даними</h1>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li><Link to="/admin/news" className={styles.listLink}>Новини</Link></li>
          <li><Link to="/admin/projects" className={styles.listLink}>Проекти</Link></li>
          <li><Link to="/admin/volunteers" className={styles.listLink}>Волонтери</Link></li>
          <li><Link to="/admin/partners" className={styles.listLink}>Партнери</Link></li>
        </ul>
        </nav>
        </div>
      <div>
        <Outlet /> {/* Тут рендеряться дочірні компоненти */}
      </div>
    </div>
  );
};

export default AdminPanel