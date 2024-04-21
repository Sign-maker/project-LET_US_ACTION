import React from 'react';
import css from './DeleteWaterModal.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import { useWater } from 'hooks/useWater';

const DeleteWaterModal = ({ onClose, deleteRecordId }) => {
  const { deleteWater } = useWater()
  
  const handleDelete = () => {
    deleteWater(deleteRecordId);
    onClose();
  };

  return (
    <>
      <div className={css.modal_content}>
        <div className={css.header}>
          <h2 className={css.title}>Delete entry</h2>
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
          <button
            type="button"
            className={css.btn_logout}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteWaterModal;
