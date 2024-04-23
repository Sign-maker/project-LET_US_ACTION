import React from 'react';
import css from '../LogoutModal/LogoutModal.module.css';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import ClipLoader from 'react-spinners/ClipLoader';

const LogoutModal = ({ onCloseLogout, onLogout }) => {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    try {
      setLoading(true);
      await onLogout();
    } catch (error) {
    } finally {
      setTimeout(() => {
        setLoading(false);
        onCloseLogout();
      }, 500);
    }
  };

  return (
    <>
      <div className={css.modal_content}>
        <div className={css.header}>
          <h2 className={css.title}>Log out</h2>
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
            onClick={handleLogout}
            disabled={loading}
          >
            {loading && <ClipLoader size={24} color="#ffffff" />}
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default LogoutModal;
