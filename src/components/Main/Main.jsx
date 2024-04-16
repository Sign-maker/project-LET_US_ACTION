
import React from 'react';
import { useNavigate } from 'react-router-dom';
import WaterConsumptionTracker from '../WaterСonsumptionTracker/WaterConsumptionTracker';
import WhyDrinkWater from '../WhyDrinkWater/WhyDrinkWater';
import css from './Main.module.css';

const WelcomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate('/signup');
  };

    return (
      <section className={css.welcomeSection}>
        <div className={`${css.div} container`}>
          <WaterConsumptionTracker handleClick={handleClick} />
          <WhyDrinkWater />
        </div>
      </section>
    );
};

export default WelcomePage;