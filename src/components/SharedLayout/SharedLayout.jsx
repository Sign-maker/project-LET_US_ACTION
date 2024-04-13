import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Component Loading....</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
