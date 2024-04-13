import React, { useState, useEffect } from 'react';
import DayList from './dailyList';

import css from './calendar.module.css';

// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = process.env.PORT;

// async function start() {
//   try {
//     await mongoose.connect('', {
//       useNewUrlParser: true,
//       useFindModify: false,
//     });
//     app.listen(PORT, () => {
//       console.log('Server has been started...');
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// start();

const Calendar = () => {
  // Створення стану для поточного місяця та даних про споживання води
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [waterConsumptionData, setWaterConsumptionData] = useState([]);

  // Функція для отримання даних про споживання води з бекенду
  const fetchWaterConsumptionData = async (req, res, next) => {
    try {
      // Робимо запит до бекенду для отримання даних
      const response = await fetch('/');
      const data = await response.json();
      // Оновлюємо стан з отриманими даними
      setWaterConsumptionData(data);
    } catch (error) {
      console.error('Помилка під час отримання даних:', error);
    }
  };

  // Запит на отримання даних про споживання води при завантаженні компонента
  useEffect(() => {
    fetchWaterConsumptionData();
  }, []);

  // Функція для перемикання на попередній місяць
  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => {
      const previousMonth = new Date(prevMonth);
      previousMonth.setMonth(previousMonth.getMonth() - 1);
      return previousMonth;
    });
  };

  // Функція для перемикання на наступний місяць
  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => {
      const nextMonth = new Date(prevMonth);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      return nextMonth;
    });
  };

  return (
    <div>
      <div className={css.monthHeader}>
        <p className={css.month}>Month</p>

        <button onClick={goToPreviousMonth}>{'<'}</button>
        {/* Відображення поточного місяця */}
        <span className={css.monthName}>
          {currentMonth.toLocaleString('default', {
            month: 'long',
          })}
          , {currentMonth.getFullYear()}
        </span>
        {/* Кнопка для переходу на наступний місяць */}
        <button onClick={goToNextMonth}>{'>'}</button>
      </div>

      <DayList
        month={currentMonth}
        waterConsumptionData={waterConsumptionData}
      />
    </div>
  );
};

export default Calendar;
