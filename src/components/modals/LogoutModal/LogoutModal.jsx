import React from 'react';
import css from '../LogoutModal/LogoutModal.module.css';
import { IoCloseOutline } from 'react-icons/io5';

const LogoutModal = ({ onCloseLogout, onLogout }) => {

  return (
    <>
      <div className={css.modal_content}>
        <div className={css.header}>
          <h2>Log out</h2>
          <button
            type="button"
            className={css.btn_close}
            onClick={onCloseLogout}
          >
            <IoCloseOutline className={css.icon_close} />
          </button>
        </div>
        <p className={css.modal_text}>Do you really want to leave?</p>

        <div className={css.btn_container}>
          <button
            type="button"
            className={css.btn_cancel}
            onClick={onCloseLogout}
          >
            Cancel
          </button>
          <button
            type="button"
            className={css.btn_logout}
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default LogoutModal;
