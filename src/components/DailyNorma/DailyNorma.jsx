import React, { useState } from 'react';
import MyDailyNormaModal from '../modals/MyDailyNormaModal/MyDailyNormaModal';
import css from './DailyNorma.module.css';
import { useAuth } from 'hooks/useAuth';
import Modal from 'components/Modal/Modal';

export const DailyNorma = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { user } = useAuth();

  const dailyNormaCalc = (user.dailyNorma / 1000).toFixed(1);

  const handleEditClick = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={css.container}>
      <div className={css.contentsDailyNorma}>
        <h2 className={css.titleDailyNorma}>My daily norma</h2>
        <div className={css.contentsDailyNormaWater}>
          <span className={css.titleDailyNormaWater}>{`${dailyNormaCalc} L`}</span>
          <button
            className={css.Button}
            type="submit"
            value="edit water button"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      </div>
      <div className={css.DailyNormaBackground}></div>

      {modalOpen && (
        <Modal onClose={handleCloseModal}>
          <MyDailyNormaModal onClose={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
};
