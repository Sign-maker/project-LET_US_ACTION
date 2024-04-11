import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Suspense fallback={<div>Component Loading....</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
