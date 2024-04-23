import React, { useState } from 'react';
import css from './calendar.module.css';
import PopUpCalendar from 'components/PopApCalendar/PopUpCalendar';
import { useWater } from 'hooks/useWater';

const DayList = ({ month }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const { monthNotes } = useWater();

  const isFutureDay = day => {
    const today = new Date();
    const checkDate = new Date(month.getFullYear(), month.getMonth(), day);
    return checkDate > today;
  };

  const handleDayClick = (day, event) => {
    if (isFutureDay(day)) return;
    setSelectedDay(day);
    setSelectedMonth(month.toLocaleString('en-US', { month: 'long' }));
    setIsPopUpOpen(true);
    setPopupPosition({ x: event.clientX, y: event.clientY });
  };

  const getFulfillmentForDay = day => {
    const dayString = `${month.getFullYear()}-${(month.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const dayData = monthNotes.find(note => note.date.startsWith(dayString));
    return dayData ? dayData.fulfillment : 0;
  };

  const getDayNote = day => {
    if (!day) return;
    const dayString = `${month.getFullYear()}-${(month.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const dayData = monthNotes.find(note => note.date.startsWith(dayString));
    return dayData ? dayData : {};
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
        ).map(day => {
          const fulfillment = getFulfillmentForDay(day);
          const isFuture = isFutureDay(day);
          const spanStyle = isFuture
            ? {}
            : fulfillment < 100
            ? { border: '1px solid var(--secondary-orange-FF9D43)' }
            : {};

          return (
            <li
              key={day}
              className={css.day}
              onClick={
                !isFuture ? event => handleDayClick(day, event) : undefined
              }
              style={isFuture ? { cursor: 'not-allowed', opacity: 0.5 } : {}}
            >
              <span className={css.daySpan} style={spanStyle}>
                {day}
              </span>
              <p className={css.percent}>{`${fulfillment}%`}</p>
            </li>
          );
        })}
      </ul>
      <div className={css.popupContainer}>
        <PopUpCalendar
          isOpen={isPopUpOpen}
          onClose={() => setIsPopUpOpen(false)}
          selectedDay={selectedDay}
          selectedMonth={selectedMonth}
          position={popupPosition}
          dayNote={getDayNote(selectedDay)}
        />
      </div>
    </div>
  );
};

export default DayList;
