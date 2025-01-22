import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { logout, selectToken } from '../lib/authSlice';
// import { useLoginMutation } from '@/shared/api/api';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { useLoginMutation } from '@/shared/api/api';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { isLoading, error }] = useLoginMutation();
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await loginMutation({ email, password }).unwrap();
  //     dispatch(login(response.token)); // Збереження токена в стейті
  //     localStorage.setItem('authToken', response.token);
  //     navigate('/admin')
  //   } catch (err) {
  //     console.error('Failed to login:', err);
  //   }
  // };

  useEffect(() => {
    if (token) {
      navigate("/admin");
    }
  }, [token, navigate]);

  const login = async () => {
    try {
      await loginUser({email, password}).unwrap();

      navigate("/admin");
    } catch (err) {

      console.log(err)
    }
  };

  return (
    <div className={styles.section}>
      <div className="container">
        <h4 style={{textAlign: 'center', marginBottom: '50px'}}>Введіть пошту й пароль щоб увійти</h4>
      <div className={styles.content}>
      <form onSubmit={login} className={styles.form}>
        <div>
          <label htmlFor="username" className={styles.text}>Пошта: </label>
          <input
            id="username"
            type="email"
                value={email}
            placeholder='Вкажіть пошту'
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className={styles.text}>Пароль: </label>
          <input
            id="password"
                type="password"
                placeholder='Вкажіть пароль'
            value={password}
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.buttons}>
        <button type="submit" disabled={isLoading} className={styles.btn}>
          {isLoading ? 'Вхід...' : 'Авторизуватись'}
        </button>
          {error && <div style={{ color: 'red' }}>Login failed. Please try again.</div>}
        <button type="button" onClick={() => dispatch(logout())} className={styles.btn}>
          Вийти
        </button>
        </div>
          </form>
          </div>
      </div>
      </div>
  );
};

export default Login;
