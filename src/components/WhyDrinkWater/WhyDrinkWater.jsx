import css from './WhyDrinkWater.module.css';

const WhyDrinkWater = () => {
  return (
    <div className={css.whyDrinkWaterDiv}>
      <h3 className={css.whyDrinkWaterHeader}>Why drink water</h3>
      <ul className={css.whyDrinkWaterList}>
        <li className={css.whyDrinkWaterListItem}>
          <p>Supply of nutrients to all organs</p>
        </li>
        <li className={css.whyDrinkWaterListItem}>
          <p>Providing oxygen to the lungs</p>
        </li>
        <li className={css.whyDrinkWaterListItem}>
          <p>Maintaining the work of the heart</p>
        </li>
        <li className={css.whyDrinkWaterListItem}>
          <p>Release of processed substances</p>
        </li>
        <li className={css.whyDrinkWaterListItem}>
          <p>Ensuring the stability of the internal environment"</p>
        </li>
        <li className={css.whyDrinkWaterListItem}>
          <p>Maintaining within the normal temperature</p>
        </li>
        <li className={css.whyDrinkWaterListItem}>
          <p>Maintaining an immune system capable of resisting disease</p>
        </li>
      </ul>
    </div>
  );
};

export default WhyDrinkWater;