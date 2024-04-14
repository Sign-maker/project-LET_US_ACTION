import React from 'react';
import Style from './MyDailyNormaModalBtn.module.css';

const MyDailyNormaModalBtn = () => {
  return (
    <div>
      <button type="submit" className={Style['save-button']}>
        Save
      </button>
    </div>
  );
};

export default MyDailyNormaModalBtn;
