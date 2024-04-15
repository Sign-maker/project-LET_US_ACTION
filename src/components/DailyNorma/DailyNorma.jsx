// import { useAuth } from 'hooks/useAuth';
import css from './DailyNorma.module.css'

export const DailyNorma = () => {

     const dailyNormaCalc = (1500 / 1000).toFixed(1);

  return (
   <div className={css.container}>
      <div className={css.contentsDailyNorma}>
        <h3 className={css.titleDailyNorma}>My daily norma</h3>
        <div className={css.contentsDailyNormaWater}>
          <p className={css.titleDailyNormaWater}> {`${dailyNormaCalc} L`}</p>
          <button
          className={css.Button}
          type="button"
          onClick={() => {}}
        >
            Edit</button>
        </div>
      </div>
      <div className={css.DailyNormaBackground}></div>
   </div>
  );
};