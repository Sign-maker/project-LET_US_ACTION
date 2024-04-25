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

  const getDayBorders = (month, day) => {
    const dayStart = new Date(month.getFullYear(), month.getMonth(), day, 0);
    const dayEnd = new Date(month.getFullYear(), month.getMonth(), day + 1, 0);
    return { dayStart, dayEnd };
  };

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

  const getDayNote = day => {
    if (!day) return;
    const { dayStart, dayEnd } = getDayBorders(month, day);

    const dayData = monthNotes.find(note => {
      const noteDate = new Date(note.date);
      return (
        noteDate.getTime() >= dayStart.getTime() &&
        noteDate.getTime() < dayEnd.getTime()
      );
    });

    return dayData ? dayData : null;
  };

  const getFulfillmentForDay = day => {
    const dayNote = getDayNote(day);
    return dayNote ? dayNote.fulfillment : 0;
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
