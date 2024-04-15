import React from 'react';
import css from '../LogoutModal/LogoutModal.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import { useAuth } from 'hooks/useAuth';

export const LogoutModal = ({ logoutModalToggleClose }) => {
  const [logOut] = useAuth();

  return (
    <>
      <div className={css.modal_content}>
        <div className={css.header}>
          <h2>Log out</h2>
          <button
            type="button"
            className={css.btn_close}
            onClick={logoutModalToggleClose}
          >
            <IoCloseOutline className={css.icon_close} />
          </button>
        </div>
        <p className={css.modal_text}>Do you really want to leave?</p>

        <div className={css.btn_container}>
          <button
            type="button"
            className={css.btn_cancel}
            onClick={logoutModalToggleClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className={css.btn_logout}
            onClick={() => {
              logOut();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
