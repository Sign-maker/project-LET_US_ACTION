import { HiOutlineCalendarDays, HiOutlinePresentationChartBar, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import css from './WaterConsumptionTracker.module.css';

const WaterConsumptionTracker = ({ handleClick }) => {
  return (
    <div className={css.div}>
      <h1 className={css.mainTitle}>Water consumption tracker</h1>
      <h2 className={css.title}>Record daily water intake and track</h2>
      <div className={css.tracker}>
        <h3 className={css.subtitle}>Tracker Benefits</h3>
        <ul className={css.list}>
          <li className={css.listItem}>
            <HiOutlineCalendarDays className={css.welcomeicon} /> <p className={css.text}>Habit drive</p>
          </li>
          <li className={css.listItem}>
            <HiOutlinePresentationChartBar className={css.welcomeicon} /> <p className={css.text}>View statistics</p>
          </li>
          <li className={css.listItem}>
            <HiOutlineWrenchScrewdriver className={css.welcomeicon} /><p className={css.text}>Personal rate setting</p>
          </li>
        </ul>
      </div>
      <button className={css.btn} onClick={handleClick} type="button">
        Try tracker
      </button>
    </div>
  );
};

export default WaterConsumptionTracker;