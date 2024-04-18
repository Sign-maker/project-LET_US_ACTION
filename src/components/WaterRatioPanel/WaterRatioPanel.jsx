import sprite from '../../images/sprite.svg';
import css from './WaterRatioPanel.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import TodayListModal from 'components/modals/TodayListModal/TodayListModal';

export const WaterRatioPanel = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const handleOpenModal = () => {
    setIsVisible(false);
  };
  const handleCloseModal = () => {
    setIsVisible(true);
  };

  // === range (получить количество воды выпитой за день / на кол - во желаемой воды в день) * 100
  // для получения % соотношения для ползунка

  //  временное решение после удалить
  const range = (750 / 1500) * 100;

  // ===============
  return (
    <div className={css.container}>
      <div className={css.containerPanel}>
        <label className={css.panelText}>Today</label>
        <input
          className={css.percentsRange}
          style={{ backgroundSize: `${range}% 100%` }}
          onChange={() => {}}
          type="range"
          value={`${range}`}
          min="0"
          max="100"
          step="1"
        />

        <label className={css.percentsPoint}>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </label>

        <label className={css.percentsValue}>
          <span className={range === 0 ? css.valueCurent : css.valueNotCurent}>
            0%
          </span>
          <span className={range === 50 ? css.valueCurent : css.valueNotCurent}>
            50%
          </span>
          <span className={range >= 100 ? css.valueCurent : css.valueNotCurent}>
            100%
          </span>
        </label>
      </div>
      <button
        className={css.addBtn}
        onClick={() => {
          setIsEditing(false);
          handleOpenModal();
        }}
      >
        <svg>
          <use href={sprite + '#icon-plus'}></use>
        </svg>
        <span>Add water</span>
      </button>

      {!isVisible && (
        <Modal onClose={handleCloseModal}>
          <TodayListModal
            onClose={handleCloseModal}
            isEditing={isEditing}
          />
        </Modal>
      )}
    </div>
  );
};
