import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from 'react-spinners/ClipLoader';
import Loader from 'components/Loader/Loader';


export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <Loader>
              <ClipLoader size={60} color="#407bff" />
            </Loader>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer className={'toast'} />
    </>
  );
};
