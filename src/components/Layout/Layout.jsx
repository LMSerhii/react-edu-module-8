import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export default function Layout() {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
