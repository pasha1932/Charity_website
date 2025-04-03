import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import { useLazyGetNotifyQuery } from '@/shared/api/api';
import { logout } from '@/admin/login/lib/authSlice';

const AdminPanel: React.FC = () => {
  const isAdmin = useAppSelector(state => state.auth.isSuperAdmin);
  const [trigger, { data }] = useLazyGetNotifyQuery();
  const dispatch = useAppDispatch();

  return (
    <div className="container">
      <div className={styles.content}>
        <div className="top" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h1 className={styles.title}>Управління даними</h1>
          <button className={styles.btn} onClick={() => trigger({})}>Отримати посилання на бота</button>
          {data && <a className={styles.link} href={data}>Перейти до бота</a>}
          <button type="button" onClick={() => dispatch(logout())} className={styles.btn}>
                    Вийти
                  </button>
        </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li><Link to="/admin/profile" className={styles.listLink}>Профіль</Link></li>
          <li><Link to="/admin/users" className={styles.listLink}>Користувачі</Link></li>
          <li><Link to="/admin/news" className={styles.listLink}>Новини</Link></li>
          <li><Link to="/admin/projects" className={styles.listLink}>Проекти</Link></li>
          <li><Link to="/admin/volunteers" className={styles.listLink}>Волонтери</Link></li>
           <li><Link to="/admin/partners" className={styles.listLink}>Партнери</Link></li>
           <li><Link to="/admin/donations" className={styles.listLink}>Донати</Link></li>
          {isAdmin && <li><Link to="/admin/allowed_emails" className={styles.listLink}>Пошти</Link></li>}
          {isAdmin && <li><Link to="/admin/documents" className={styles.listLink}>Документи</Link></li>}
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