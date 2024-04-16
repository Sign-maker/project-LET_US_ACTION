import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Styles from './MyDailyNormaModal.module.css';
import MyDailyNormaModalBtn from '../../ButtonsModal/MyDailyNormaModalBtn/MyDailyNormaModalBtn';

const MyDailyNormaModal = () => {
  return (
    <div className={Styles['modal']}>
      <div className={Styles['header']}>
        <p className={Styles['title']}>My daily norma</p>
        <button className={Styles['closeButton']}>
          <VscChromeClose className={Styles['closeIcon']} />
        </button>
      </div>
      <div>
        <form className={Styles['formulaBody']}>
          <div className={Styles['formulaBlock']}>
            <div className={Styles['formula']}>
              <p className={Styles['text']}>
                For girl:
                <span className={Styles['formulaText']}>
                  V=(M*0,03) + (T*0,4)
                </span>
              </p>
              <p className={Styles['text']}>
                For man:
                <span className={Styles['formulaText']}>
                  V=(M*0,04) + (T*0,6)
                </span>
              </p>
            </div>
            <div>
              <p className={Styles['formulaExplain']}>
                * V is the volume of the water norm in liters per day, M is your
                body weight, T is the time of active sports, or another type of
                activity commensurate in terms of loads (in the absence of
                these, you must set 0)
              </p>
            </div>
          </div>
          <div className={Styles['calc']}>
            <p className={Styles['calcTitle']}>Calculate your rate:</p>
            <div className={Styles['calcForm']}>
              <label>
                <input
                  className={Styles['choiceGender']}
                  type="radio"
                  name="gender"
                  value="woman"
                ></input>
                For woman
              </label>
              <label>
                <input
                  className={Styles['choiceGender']}
                  type="radio"
                  name="gender"
                  value="man"
                ></input>
                For man
              </label>
            </div>

            <div className={Styles['calcWeight']}>
              <label className={Styles['calcLabel']}>
                <span>Your weight in kilograms:</span>
              </label>
              <input
                className={Styles['calcInput']}
                name="weight"
                placeholder="0"
                type="number"
                min="0"
                max="200"
                step="0.1"
              ></input>
            </div>
            <div className={Styles['calcWeight']}>
              <label className={Styles['calcLabel']}>
                The time of active participation in sports or other activities
                with a high physical. load in hours:
              </label>
              <input
                className={Styles['calcInput']}
                name="time"
                type="number"
                placeholder="0"
                min="0Hr"
                max="24Hr"
                step="0.5Hr"
              ></input>
            </div>
            <label className={Styles['calcQuantity']}>
              <span className={Styles['quantitytext']}>
                The required amount of water in liters per day:
              </span>
              <label className={Styles['quantityInput']}>1.6L</label>
            </label>
          </div>
          <div className={Styles['drinkQuantity']}>
            <p className={Styles['calcTitle']}>
              Write down how much water you will drink:
            </p>
            <input
              className={Styles['drinkInput']}
              type="number"
              name="myDailyNorma"
              placeholder="0"
              min="0"
              max="15L"
              step="0.250"
            ></input>
          </div>
          <div className={Styles['saveButton']}>
            <MyDailyNormaModalBtn />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyDailyNormaModal;
