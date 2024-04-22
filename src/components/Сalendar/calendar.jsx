import React, { useEffect, useState } from 'react';
import DayList from './dailyList.jsx';

import css from './calendar.module.css';
import { useWater } from 'hooks/useWater.js';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { fetchMonthStats } = useWater();
  const [waterConsumptionData] = useState([]);

  useEffect(() => {
    const monthParam = `${currentMonth.getFullYear()}-${(
      currentMonth.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}`;
    fetchMonthStats(monthParam);
  }, [fetchMonthStats, currentMonth]);

  const isCurrentMonth = () => {
    const today = new Date();
    return (
      currentMonth.getFullYear() === today.getFullYear() &&
      currentMonth.getMonth() === today.getMonth()
    );
  };

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

          <button
            className={css.monthBtn}
            onClick={goToNextMonth}
            disabled={isCurrentMonth()}
          >
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
