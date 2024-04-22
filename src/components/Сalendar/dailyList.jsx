import React, { useEffect, useState } from 'react';
import css from './calendar.module.css';
import PopUpCalendar from 'components/PopApCalendar/PopUpCalendar';
import { useSelector } from 'react-redux';
import { useWater } from 'hooks/useWater';

const DayList = ({ month }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [hasFetched, setHasFetched] = useState(false);

  const { monthNotes } = useSelector(state => state.water);

  const { fetchMonthStats } = useWater();

  const monthString = `${month.getFullYear()}-${(month.getMonth() + 1)
    .toString()
    .padStart(2, '0')}`;

  useEffect(() => {
    if (!hasFetched) {
      fetchMonthStats(monthString);
      setHasFetched(true);
    }
  }, [monthString, fetchMonthStats, hasFetched]);

  const handleDayClick = (day, event) => {
    setSelectedDay(day);
    setSelectedMonth(month.toLocaleString('en-US', { month: 'long' }));
    setIsPopUpOpen(true);
    setPopupPosition({ x: event.clientX, y: event.clientY });
  };

  // Функция для извлечения процента выполнения по дате
  const getFulfillmentForDay = day => {
    const dayString = `${month.getFullYear()}-${(month.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const dayData = monthNotes.find(note => note.date.startsWith(dayString));
    return dayData ? `${dayData.fulfillment}%` : '0%';
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
            onClick={event => handleDayClick(day, event)}
          >
            <span className={css.daySpan}>{day}</span>
            <p className={css.percent}>{getFulfillmentForDay(day)}</p>
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
