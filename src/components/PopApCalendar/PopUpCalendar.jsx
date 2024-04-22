import React, { useEffect, useRef, useState } from 'react';
import css from './PopApCalendar.module.css';

const PopUpCalendar = ({
  isOpen,
  onClose,
  selectedDay,
  selectedMonth,
  position,
}) => {
  const popUpRef = useRef(null);
  const containerRef = useRef(null);
  const [adjustedPosition, setAdjustedPosition] = useState({
    x: position.x,
    y: position.y,
  });

  useEffect(() => {
    const handleEscKeyPress = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = event => {
      if (
        popUpRef.current &&
        !popUpRef.current.contains(event.target) &&
        event.target !== containerRef.current
      ) {
        onClose();
      }
    };
    const handleScroll = () => {
      onClose(); 
    };
    const adjustPosition = () => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const popUpRect = popUpRef.current.getBoundingClientRect();

      let adjustedX = position.x;
      let adjustedY = position.y;

      if (position.x + popUpRect.width > containerRect.right) {
        adjustedX = containerRect.right - popUpRect.width;
      }

      setAdjustedPosition({ x: adjustedX, y: adjustedY });
    };
    const handleResize = () => {
      onClose(); 
    };

    if (isOpen) {
      adjustPosition();
      document.addEventListener('keydown', handleEscKeyPress);
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleResize);
      document.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, onClose, position]);

  if (!isOpen) return null;

  return (
    <div ref={containerRef}>
      <div
        ref={popUpRef}
        className={css.popup}
        style={{
          top: adjustedPosition.y,
          left: adjustedPosition.x,
          position: 'fixed',
        }}
      >
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
              How many servings of water:
              <span className={css.listNorma}>6</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopUpCalendar;
