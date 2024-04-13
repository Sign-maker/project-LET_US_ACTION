import React from 'react';
import css from './calendar.module.css';
import { onDayClick } from '../servises/waterServise';

const DayList = ({ month, waterConsumptionData }) => {
  const getClassForDay = day => {
    // Отримуємо дані про споживання води для поточного дня
    const dayData = waterConsumptionData[{}];
    console.log(dayData);

    // Перевіряємо, чи користувач не виконав план щодо випиття води для цього дня
    if (dayData && dayData.consumption < dayData.plan) {
      return 'not-achieved'; // Якщо план не виконано, повертаємо клас "not-achieved" для виділення
    }

    return ''; // Якщо план виконано або дані відсутні, повертаємо порожній рядок
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
          <p>60%</p>
        </li>
      ))}
    </ul>
  );
};

export default DayList;
