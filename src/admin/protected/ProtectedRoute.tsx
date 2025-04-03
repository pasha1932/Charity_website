import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/shared/hooks/reduxHooks';
import { RootState } from '@/app/appStore';

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = useAppSelector((state: RootState) => state.auth.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;