import React from 'react';
import css from './HomePage.module.css';

import { DailyNorma } from '../../components/DailyNorma/DailyNorma';
import { WaterRatioPanel }  from '../../components/WaterRatioPanel/WaterRatioPanel';
import Calendar from '../../components/Сalendar/calendar';
import {TodayWaterList} from '../../components/TodayWaterList/TodayWaterList';

// import { useAuth } from 'hooks/useAuth';
// import { useSelector } from 'react-redux';
const HomePage = () => {
  return (
    <section className={css.section_HomePage}>
      <h2 className="visually-hidden" aria-label="Water tracker">
        Water tracker join us
      </h2>
      <div className={'container'}>
      <div className={css.container_HomePage}>
        <div className={css.container_daliNorma}>
          <DailyNorma />
          <WaterRatioPanel />
        </div>

        <div className={css.container_MonthStats}>
          <TodayWaterList/>
          {/* <CalendarContainer /> */}
        </div>
        </div>
        </div>
      </section>
      
  );
};

export default HomePage;

