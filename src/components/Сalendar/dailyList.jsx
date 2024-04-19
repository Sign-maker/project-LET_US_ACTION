import React, { useState } from 'react';
import css from './calendar.module.css';
import PopUpCalendar from 'components/PopApCalendar/PopUpCalendar';

const DayList = ({ month }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const handleDayClick = (day, event) => {
    setSelectedDay(day);
    setSelectedMonth(month.toLocaleString('en-US', { month: 'long' }));
    setIsPopUpOpen(true);
    setPopupPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div>
      <ul className={css.dayliList}>
        {Array.from(
          {
            length: new Date(
              month.getFullYear(),
              month.getMonth() + 1,
              0
            ).getDate(),
          },
          (_, i) => i + 1
        ).map(day => (
          <li
            key={day}
            className={css.day}
            onClick={event => handleDayClick(day, event)} // Передаем event в функцию handleDayClick
          >
            <span className={css.daySpan}>{day}</span>
            <p className={css.percent}>{'20%'}</p>
          </li>
        ))}
      </ul>
      <div className={css.popupContainer}>
        <PopUpCalendar
          isOpen={isPopUpOpen}
          onClose={() => setIsPopUpOpen(false)}
          selectedDay={selectedDay}
          selectedMonth={selectedMonth}
          position={popupPosition}
        />
      </div>
    </div>
  );
};

export default DayList;
