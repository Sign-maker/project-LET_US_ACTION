import React, { useState } from 'react';
import css from './calendar.module.css';
import PopUpCalendar from 'components/PopUpCalendar/PopUpCalendar';

const DayList = ({ month, waterConsumptionData }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleDayClick = day => {
    setSelectedDay(day);
    setSelectedMonth(month.toLocaleString('en-US', { month: 'long' }));
    setIsPopUpOpen(true);
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
          <li key={day} className={css.day} onClick={() => handleDayClick(day)}>
            <span className={css.daySpan}>{day}</span>
            <p className={css.percent}>60%</p>
          </li>
        ))}
      </ul>
      <PopUpCalendar
        isOpen={isPopUpOpen}
        onClose={() => setIsPopUpOpen(false)} // Передаем колбэк для закрытия окна
        selectedDay={selectedDay} // Передаем выбранный день
        selectedMonth={selectedMonth} // Передаем выбранный месяц
      />
    </div>
  );
};

export default DayList;
