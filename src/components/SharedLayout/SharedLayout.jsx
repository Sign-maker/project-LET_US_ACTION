import Header from 'components/Header/Header';
import MainLoader from 'components/Loaders/MainLoaderVA/MainLoader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<MainLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer className={'toast'} />
    </>
  );
};
