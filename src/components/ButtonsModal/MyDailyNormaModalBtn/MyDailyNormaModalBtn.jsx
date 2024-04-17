import React from 'react';
import css from './MyDailyNormaModalBtn.module.css';

const MyDailyNormaModalBtn = () => {
  return (
    <div>
      <button type="submit" className={css.saveButton}>
        Save
      </button>
    </div>
  );
};

export default MyDailyNormaModalBtn;
