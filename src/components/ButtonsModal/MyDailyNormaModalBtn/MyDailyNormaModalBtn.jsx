import React from 'react';
import { ClipLoader } from 'react-spinners';
import css from './MyDailyNormaModalBtn.module.css';

const MyDailyNormaModalBtn = ({ isSubmitting, disabled, onClick }) => {
  return (
    <button
      className={css.saveButton}
      onClick={onClick}
      type="submit"
      disabled={disabled}
    >
      {isSubmitting ? (
        <div className={css.spinnerCss}>
          <ClipLoader size={20} color="#ffffff" loading={isSubmitting} />
        </div>
      ) : (
        'Save'
      )}
    </button>
  );
};

export default MyDailyNormaModalBtn;
