import React, { useState } from 'react';
import DayList from './dailyList';

import css from './calendar.module.css';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // const [waterConsumptionData, setWaterConsumptionData] = useState([]);
  const [waterConsumptionData] = useState([]);

  // const fetchWaterConsumptionData = async (req, res, next) => {
  //   try {
  //     const response = await fetch('/');
  //     const data = await response.json();

  //     setWaterConsumptionData(data);
  //   } catch (error) {
  //     console.error('Помилка під час отримання даних:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchWaterConsumptionData();
  // }, []);

  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => {
      const previousMonth = new Date(prevMonth);
      previousMonth.setMonth(previousMonth.getMonth() - 1);
      return previousMonth;
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => {
      const nextMonth = new Date(prevMonth);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      return nextMonth;
    });
  };

  return (
    <div className={css.calendar}>
      <div className={css.monthHeader}>
        <p className={css.month}>Month</p>
        <div className={css.monthHeaderBtn}>
          <button className={css.monthBtn} onClick={goToPreviousMonth}>
            {'<'}
          </button>

          <span className={css.monthName}>
            {currentMonth.toLocaleString('en-US', {
              month: 'long',
            })}
            , {currentMonth.getFullYear()}
          </span>

          <button className={css.monthBtn} onClick={goToNextMonth}>
            {'>'}
          </button>
        </div>
      </div>

      <DayList
        month={currentMonth}
        waterConsumptionData={waterConsumptionData}
      />
    </div>
  );
};

export default Calendar;
