import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { logout, selectToken } from '../lib/authSlice';
// import { useLoginMutation } from '@/shared/api/api';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { useLoginMutation } from '../lib/auth';


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
      // const maybeError = isErrorWithMessage(err);

      // if (maybeError) {
      //   setError(err.data.message);
      // } else {
      //   setError("Неизвестная ошибка");
      // }
      console.log(err)
    }
  };

  return (
    <div className="container">
      <form onSubmit={login} className={styles.form}>
        <div>
          <label htmlFor="username" className={styles.text}>Username: </label>
          <input
            id="username"
            type="email"
            value={email}
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className={styles.text}>Password: </label>
          <input
            id="password"
            type="password"
            value={password}
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.buttons}>
        <button type="submit" disabled={isLoading} className={styles.btn}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
          {error && <div style={{ color: 'red' }}>Login failed. Please try again.</div>}
        <button type="button" onClick={() => dispatch(logout())} className={styles.btn}>
          Logout
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
