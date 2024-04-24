import React, { useEffect, useState } from 'react';
import DayList from './dailyList.jsx';
import Loader from '../Loader/Loader.module.css';
import ClipLoader from 'react-spinners/ClipLoader';
import sprite from '../../images/sprite.svg';

import css from './calendar.module.css';
import { useWater } from 'hooks/useWater.js';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { fetchMonthStats, isMonthLoading } = useWater();
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
        <h2 aria-label='text today' className={css.month}>Month</h2>
        <div className={css.monthHeaderBtn}>
          <button className={css.monthBtn} onClick={goToPreviousMonth}
            type="submit"
             value="previous month button"><p className={'visually-hidden'}>previous month button</p>
            <svg>
              <use href={sprite + '#arrow-left'}></use>
            </svg>
          </button>

          <span className={css.monthName} aria-label='current month'>
            {currentMonth.toLocaleString('en-US', {
              month: 'long',
            })}
            , {currentMonth.getFullYear()}
          </span>

          <button
            className={css.monthBtn}
            type="submit"
            value="next month button"
            onClick={goToNextMonth}
            disabled={isCurrentMonth()}
            style={{
              fill: isCurrentMonth() ? 'var(--secondary-4-9EBBFF)' : '',
            }}
          ><p className={'visually-hidden'}>next month button</p>
            <svg>
              <use href={sprite + '#arrow-right'}></use>
            </svg>
          </button>
        </div>
      </div>
      {isMonthLoading ? (
        <div className={Loader.loaderContainer}>
          <ClipLoader size={50} color="#407bff" />
        </div>
      ) : (
        <DayList
          month={currentMonth}
          waterConsumptionData={waterConsumptionData}
        />
      )}
    </div>
  );
};

export default Calendar;
