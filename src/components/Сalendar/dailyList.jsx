import React from 'react';
import css from './calendar.module.css';
import { onDayClick } from '../servises/waterServise';

const DayList = ({ month, waterConsumptionData }) => {
  const getClassForDay = day => {
    const dayData = waterConsumptionData[{}];
    // console.log(dayData);

    if (dayData && dayData.consumption < dayData.plan) {
      return 'not-achieved';
    }

    return '';
  };

  return (
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
        <li key={day} className={css.day} onClick={() => onDayClick(day)}>
          <span className={`${getClassForDay(day)} ${css.daySpan}`}>{day}</span>
          <p className={css.percent}>60%</p>
        </li>
      ))}
    </ul>
  );
};

export default DayList;
