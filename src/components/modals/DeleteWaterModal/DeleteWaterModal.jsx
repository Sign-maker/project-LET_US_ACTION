import React from 'react';
import css from './DeleteWaterModal.module.css';
import { IoCloseOutline } from 'react-icons/io5';

const DeleteWaterModal = ({ onClose }) => {
  return (
    <>
      <div className={css.modal_content}>
        <div className={css.header}>
          <h2>Delete entry</h2>
          <button type="button" className={css.btn_close} onClick={onClose}>
            <IoCloseOutline className={css.icon_close} />
          </button>
        </div>
        <p className={css.modal_text}>
          Are you sure you want to delete the entry?
        </p>

        <div className={css.btn_container}>
          <button type="button" className={css.btn_cancel} onClick={onClose}>
            Cancel
          </button>
          <button type="button" className={css.btn_logout}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteWaterModal;
