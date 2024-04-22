import { IoCloseOutline } from 'react-icons/io5';
import css from './TodayListModal.module.css';
import { ReactComponent as GlassSVG } from '../../../images/logo/glass.svg';
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2';
import { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import ClipLoader from 'react-spinners/ClipLoader';
import { createDateFromTimeString, timeFromDate } from 'helpers/dateHelpers';
import { useWater } from 'hooks/useWater';

const TodayListModal = ({
  onClose,
  isEditing,
  amountForEdit,
  editTimeInit,
  editRecordId,
}) => {
  const [timeOptions, setTimeOptions] = useState([]);
  const { addWater, updateWater } = useWater();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [tempAmountForEdit, setTempAmountForEdit] = useState(
    amountForEdit || 0
  );

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const newTimeOptions = [];

    for (let hour = 0; hour < 24; hour++) {
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
    setTimeOptions(newTimeOptions);
  }, []);

  const currentDate = new Date();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitLoading(true);
    const selectedAmount = values.amount;
    const selectedTime = values.time;
    const finalAmount = selectedAmount ? selectedAmount : 1;
    const finalTime = selectedTime
      ? selectedTime
      : timeFromDate('en-GB', currentDate);

    const timeUpdate = selectedTime
      ? selectedTime
      : timeFromDate('en-GB', editTimeInit);

    const payload = {
      waterVolume: finalAmount,
      date: createDateFromTimeString(finalTime),
    };

    const updatePayload = {
      _id: editRecordId,
      waterVolume: finalAmount,
      date: createDateFromTimeString(timeUpdate),
    };

    try {
      if (isEditing) {
        await updateWater(updatePayload);
      } else {
        await addWater(payload);
      }
      resetForm();
      onClose();
    } catch (error) {
    } finally {
      setSubmitLoading(false);
      setSubmitting(false);
    }
  };

  const validateLength = e => {
    if (e.target.value.length > 4) {
      e.target.value = e.target.value.slice(0, 4);
    }
  };
  const validationSchema = Yup.object().shape({
    amount: Yup.number()
      .required('Amount is required')
      .min(1, 'Amount must be at least 1')
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
          initialValues={{
            amount: isEditing ? tempAmountForEdit : 50,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange={true}
          validateOnBlur={true}
        >
          {({ errors, touched, setFieldValue, values, isSubmitting }) => (
            <Form autoComplete="off">
              <div className={css.add_box_modal}>
                {isEditing && (
                  <div className={css.previos_info}>
                    <GlassSVG />
                    <p className={css.today_volume}>
                      {amountForEdit ? `${amountForEdit} ml` : 'No notes yet'}
                    </p>
                    <p className={css.today_time}>
                      {timeFromDate('en-US', editTimeInit)}
                    </p>
                  </div>
                )}
                <h3 className={css.subtitle}>
                  {isEditing ? 'Correct entered data:' : 'Choose a value:'}
                </h3>
                <div className={css.add_water}>
                  <p className={css.add_paragraf}>Amount of water:</p>
                  <div className={css.add_water_container_btn}>
                    <button
                      type="button"
                      className={css.button_ml}
                      onClick={() => {
                        const currentValue = Number(values.amount || 0);
                        const newValue = currentValue - 50;
                        setFieldValue('amount', newValue > 0 ? newValue : 0);
                        setTempAmountForEdit(newValue > 0 ? newValue : 0);
                      }}
                    >
                      <HiOutlineMinusSmall
                        className={css.increment_and_dicrement_icons}
                      />
                    </button>
                    <div className={css.amount}>
                      <p className={css.amoun_water}>
                        {isEditing ? tempAmountForEdit : values.amount || 0} ml
                      </p>
                    </div>
                    <button
                      type="button"
                      className={css.button_ml}
                      onClick={() => {
                        const currentValue = Number(values.amount || 0);
                        const newValue = currentValue + 50;
                        setFieldValue('amount', newValue > 0 ? newValue : 0);
                        setTempAmountForEdit(newValue > 0 ? newValue : 0);
                      }}
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
                    // onChange={e => setTime(e.target.value)}
                  >
                    <option
                      key="current-time"
                      // value={timeFromDate('en-GB', currentDate)}
                    >
                      {/* {timeFromDate('en-GB', currentDate)} */}
                      {isEditing
                        ? timeFromDate('em-GB', editTimeInit)
                        : timeFromDate('en-GB', currentDate)}
                    </option>
                    {timeOptions.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                </div>

                <div>
                  <h3 className={css.subtitle}>
                    Enter the value of the water used:
                  </h3>

                  <Field
                    type="number"
                    className={`${css.input_number} ${
                      errors.amount && (touched.amount || values.amount)
                        ? css.input_error
                        : ''
                    }`}
                    name="amount"
                    onInput={validateLength}
                    // value={isEditing ? tempAmountForEdit : values.amount || 0}
                  />
                  {errors.amount && values.amount ? (
                    <div className={css.error_message}>{errors.amount}</div>
                  ) : null}
                </div>

                <div className={css.modal_footer}>
                  <span className={css.span_ml}>
                    {isEditing ? tempAmountForEdit : values.amount || 0} ml
                  </span>
                  <button
                    className={css.add_save_btn}
                    type="submit"
                    disabled={isSubmitting || submitLoading}
                  >
                    {submitLoading && <ClipLoader size={24} color="#ffffff" />}
                    Save{' '}
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
