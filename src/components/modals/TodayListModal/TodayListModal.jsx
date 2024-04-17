import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import css from './TodayListModal.module.css';
import { ReactComponent as GlassSVG } from '../../../images/logo/glass.svg';
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2';

const TodayListModal = () => {
  return (
    <>
      <div className={css.modal_content}>
        <div className={css.header}>
          <h2 className={css.title}>Edit the entered amount of water</h2>
          <button type="button" className={css.btn_close}>
            <IoCloseOutline className={css.icon_close} />
          </button>
        </div>

        <div className={css.add_box_modal}>
          <div className={css.previos_info}>
            <GlassSVG />
            <p className={css.today_volume}>250 ml</p>
            <p className={css.today_time}>7:00 AM</p>
          </div>
          <h3>Correct entered data:</h3>
          <div className={css.add_water}>
            <p className={css.add_paragraf}>Amount of water:</p>
            <div className={css.add_water_container_btn}>
              <button type="button" className={css.button_ml}>
                <HiOutlineMinusSmall
                  className={css.increment_and_dicrement_icons}
                />
              </button>
              <div className={css.amount}>
                <p className={css.amoun_water}>250 ml</p>
              </div>
              <button type="button" className={css.button_ml}>
                <HiOutlinePlusSmall
                  className={css.increment_and_dicrement_icons}
                />
              </button>
            </div>
          </div>

          <div className={css.add_time}>
            <p className={css.add_paragraf}>Recording time:</p>
            <input type="time" className={css.input_time} />
          </div>

          <div>
            <h3>Enter the value of the water used:</h3>
            <input type="number" className={css.input_number} />
          </div>

          <div className={css.modal_footer}>
            <span className={css.span_ml}>250ml</span>
            <button className={css.add_save_btn}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayListModal;
