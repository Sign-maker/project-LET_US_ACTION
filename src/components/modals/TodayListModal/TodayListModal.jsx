import { IoCloseOutline } from 'react-icons/io5';
import css from './TodayListModal.module.css';
import { ReactComponent as GlassSVG } from '../../../images/logo/glass.svg';
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2';
import { useState, useEffect } from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';

const TodayListModal = ({ onClose, isEditing }) => {
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState('');
  //Здесь нужно будет использовать хук useWater();
  const [timeOptions, setTimeOptions] = useState([]);


  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const newTimeOptions = [];

    for (let hour = currentHour; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 5) {
        if (hour === currentHour && minute < currentMinute) {
          continue;
        }
        const formattedHour = String(hour).padStart(2, '0');
        const formattedMinute = String(minute).padStart(2, '0');
        const currentTime = `${formattedHour}:${formattedMinute}`;
        newTimeOptions.push(currentTime);
      }
    }

    const formattedHour = String(currentHour).padStart(2, '0');
    const formattedMinute = String(currentMinute).padStart(2, '0');
    const currentTime = `${formattedHour}:${formattedMinute}`;
    setTime(currentTime);
    setTimeOptions(newTimeOptions);
  }, []);

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = String(currentDate.getFullYear());

  const formattedDate = `${day}.${month}.${year}`;

    // const validateAmount = value => {
    //   let errorMessage = '';
    //   if (value > 5000) {
    //     errorMessage = 'The value cannot exceed 5000ml';
    //   }
    //   return errorMessage;
    // };

  const decrementAmount = () => {
    setAmount(prevAmount => Math.max(prevAmount - 50, 0));
  };

  const incrementAmount = () => {
    const newAmount = amount + 50;
    const maxAmount = 5000;
    setAmount(newAmount <= maxAmount ? newAmount : maxAmount);
  };

  const handleChangeAmount = e => {
    const newValue = parseInt(e.target.value);
    // setAmount(newValue);
    // console.log(newValue);
       if (!isNaN(newValue) || e.target.value === '') {
         // Проверяем, что новое значение не является NaN или пустым
         setAmount(newValue);
         console.log(newValue);
       }
  };

  const handleBlur = () => {
    setAmount(prevAmount => prevAmount || amount || 0);
  };

  const handleSubmit = async (values, { resetForm, setError }) => {
    // const waterData = {
    //   time: time,
    //   amount: amount,
    //   date: formattedDate,
    // };
const selectedTime = values.time;
const selectedAmount = values.amount;
       const finalTime = selectedTime ? selectedTime : time;
       const finalAmount = selectedAmount ? selectedAmount : amount;
       console.log('Form values:', {
         amount: finalAmount,
         time: finalTime,
         date: formattedDate,
       });
    
    resetForm();
    onClose()
  };

  const validationSchema = Yup.object().shape({
    amount: Yup.number()
      .required('Amount is required')
      .min(0, 'Amount must be greater than or equal to 0')
      .max(5000, 'Amount cannot exceed 5000'),
  });

  return (
    <>
      <div className={css.modal_content}>
        <div className={css.header}>
          <h2 className={css.title}>
            {isEditing ? 'Edit the entered amount of water' : 'Add water'}
          </h2>
          <button type="button" className={css.btn_close} onClick={onClose}>
            <IoCloseOutline className={css.icon_close} />
          </button>
        </div>
        <Formik
          initialValues={{ amount: 0, time: time }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form autoComplete="off">
              <div className={css.add_box_modal}>
                {isEditing && (
                  <div className={css.previos_info}>
                    <GlassSVG />
                    <p className={css.today_volume}>{amount || 0} ml</p>
                    <p className={css.today_time}>7:00 AM</p>
                  </div>
                )}
                <h3>Correct entered data:</h3>
                <div className={css.add_water}>
                  <p className={css.add_paragraf}>Amount of water:</p>
                  <div className={css.add_water_container_btn}>
                    <button
                      type="button"
                      className={css.button_ml}
                      onClick={decrementAmount}
                    >
                      <HiOutlineMinusSmall
                        className={css.increment_and_dicrement_icons}
                      />
                    </button>
                    <div className={css.amount}>
                      <p className={css.amoun_water}>{amount || 0} ml</p>
                    </div>
                    <button
                      type="button"
                      className={css.button_ml}
                      onClick={incrementAmount}
                    >
                      <HiOutlinePlusSmall
                        className={css.increment_and_dicrement_icons}
                      />
                    </button>
                  </div>
                </div>

                <div className={css.add_time}>
                  <p className={css.add_paragraf}>Recording time:</p>
                  <Field
                    as="select"
                    name="time"
                    style={{ width: '100%' }}
                    className={css.select}
                    onChange={e => setTime(e.target.value)}
                  
                  >
                    <option key="current-time" value={time}>
                      {time}
                    </option>
                    {timeOptions.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                </div>

                <div>
                  <h3>Enter the value of the water used:</h3>

                  <Field
                    type="number"
                    className={`${css.input_number} ${
                      errors.amount && touched.amount ? css.inputError : ''
                    }`}
                    name="amount"
                    min={0}
                    max={5000}
                    value={values.amount || amount}
                    onChange={handleChangeAmount}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    name="amount"
                    component="div"
                    className={css.errorMessage}
                  />
                </div>

                <div className={css.modal_footer}>
                  <span className={css.span_ml}>{amount || 0} ml</span>
                  <button className={css.add_save_btn} type="submit">
                    Save
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default TodayListModal;
