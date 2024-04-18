import React, { useEffect, useRef } from 'react';
import css from './PopApCalendar.module.css';

const PopUpCalendar = ({ isOpen, onClose, selectedDay, selectedMonth }) => {
  const popUpRef = useRef(null);

  useEffect(() => {
    const handleEscKeyPress = event => {
      if (event.key === 'Escape') {
        onClose(); // Закрываем окно при нажатии на ESC
      }
    };

    const handleClickOutside = event => {
      if (
        popUpRef.current &&
        !popUpRef.current.contains(event.target) &&
        event.target !== popUpRef.current
      ) {
        onClose(); // Закрываем окно при клике вне его области
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKeyPress);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={css.popup} ref={popUpRef}>
      <div className={css.popupContent}>
        <p className={css.currentDate}>
          {selectedDay}, {selectedMonth}
        </p>
        <ul className={css.table}>
          <li className={css.tableList}>
            Daily norma:<span className={css.listNorma}>1.5L</span>
          </li>
          <li className={css.tableList}>
            Fulfillment of the daily norm:
            <span className={css.listNorma}>100%</span>
          </li>
          <li className={css.tableList}>
            How many servings of water:<span className={css.listNorma}>6</span>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default PopUpCalendar;
