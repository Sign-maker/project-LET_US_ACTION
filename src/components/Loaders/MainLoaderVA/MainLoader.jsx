import React from 'react';
import css from './MainLoader.module.css';

const MainLoader = () => {
  return (
    <>
      <div className={css.box}>
        <div className={css.title01}>
          <div className={css.mask}>Loading</div>
        </div>
      </div>
    </>
  );
};

export default MainLoader;
