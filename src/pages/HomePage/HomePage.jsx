import React from 'react';
import css from './HomePage.module.css'

// import DailyNorma  from '';
// import WaterRatioPanel  from '';
// import CalendarContainer from '';
// import TodayWaterList from '';

// import { useAuth } from 'hooks/useAuth';
// import { useSelector } from 'react-redux';
const HomePage = () => {

  return (
    <section className={css.section_HomePage}>
      <h2 class="visually-hidden"  aria-label="Water tracker">Water tracker join us</h2>
      <div className={`container ${css.container_HomePage}`}>
        <div className={css.container_daliNorma}>
          {/* <DailyNorma />
          <WaterRatioPanel /> */}
        </div>
        
        <div className={css.container_MonthStats}>
          {/* <TodayWaterList/>
          <CalendarContainer /> */}
        </div>
      </div>
    </section>
  );
};


export default HomePage;
