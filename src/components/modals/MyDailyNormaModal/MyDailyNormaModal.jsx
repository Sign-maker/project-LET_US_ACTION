import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { VscChromeClose } from 'react-icons/vsc';
import css from './MyDailyNormaModal.module.css';
import MyDailyNormaModalBtn from '../../ButtonsModal/MyDailyNormaModalBtn/MyDailyNormaModalBtn';

import { useAuth } from 'hooks/useAuth';
import { useWater } from 'hooks/useWater';
import {
  toastFulfilled,
  toastRejected,
} from 'components/servises/UserNotification';

const MyDailyNormaModal = ({ onClose }) => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [weight, setWeight] = useState('');
  const [time, setTime] = useState('');
  const [consumedWater, setConsumedWater] = useState('2.0');
  const [gender, setGender] = useState('female');
  const [dailyNorma, setDailyNorma] = useState(2);
  const [userInput, setUserInput] = useState(false);

  const { updateMyDailyNorma } = useAuth();
  const { updateStoreByDailyNorma } = useWater();

  useEffect(() => {
    dailyNormaCalc(weight, time, gender);
  }, [weight, time, gender]);

  useEffect(() => {
    if (!userInput) {
      setConsumedWater(dailyNorma.toString());
    }
  }, [dailyNorma, userInput]);

  const dailyNormaCalc = (weight, time, gender) => {
    if (weight > 0 && time >= 0) {
      const norma =
        gender === 'female'
          ? weight * 0.03 + time * 0.4
          : weight * 0.04 + time * 0.6;
      setDailyNorma(norma.toFixed(1));
    } else {
      setDailyNorma(2);
    }
  };

  const handleSave = async (values, { setSubmitting }) => {
    try {
      const data = {
        dailyNorma:
          parseFloat(consumedWater) > 0
            ? parseFloat(consumedWater)
            : parseFloat(dailyNorma),
      };

      setSubmitLoading(true);
      const convertedDailyNorma = data.dailyNorma * 1000;
      await updateMyDailyNorma({ dailyNorma: convertedDailyNorma });
      updateStoreByDailyNorma(convertedDailyNorma);
      // await fetchTodayStats();
      toastFulfilled('Your daily water norma has been successfully updated!');
      onClose();
    } catch (error) {
      toastRejected(error);
    } finally {
      // setSubmitting(false);
      setSubmitLoading(false);
    }
  };

  const validationSchema = Yup.object({
    weight: Yup.number()
      .min(10, 'Weight must be at least 10 kg')
      .max(250, 'Weight must be at most 250 kg')
      .when('time', (time, schema) => {
        return time > 0
          ? schema.required('Weight is required if time is provided')
          : schema;
      }),
    time: Yup.number().max(24, 'Time must be at most 24 hours').nullable(),
    consumedWater: Yup.number()
      .required('Consumed water is required')
      .min(0, 'Consumed water must be at least 1')
      .max(15, 'Consumed water must be no more than 15'),
  });

  return (
    <div className={css.modal}>
      <div className={css.header}>
        <p className={css.title}>My Daily Norma</p>
        <button className={css.closeButton} onClick={onClose}>
          <VscChromeClose className={css.closeIcon} />
        </button>
      </div>
      <Formik
        initialValues={{
          weight: '',
          time: '',
          consumedWater: '2.0',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSave}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ isSubmitting, errors, touched, setFieldValue, values }) => (
          <Form className={css.formulaBody}>
            <div className={css.formulaBlock}>
              <div className={css.formula}>
                <p className={css.text}>
                  For girl:
                  <span className={css.formulaText}>V=(M*0.03) + (T*0.4)</span>
                </p>
                <p className={css.text}>
                  For man:
                  <span className={css.formulaText}>V=(M*0.04) + (T*0.6)</span>
                </p>
              </div>
              <div>
                <p className={css.formulaExplain}>
                  * V is the volume of the water norm in liters per day, M is
                  your body weight, T is the time of active sports, or another
                  type of activity commensurate in terms of loads (in the
                  absence of these, you must set 0)
                </p>
              </div>
            </div>
            <div className={css.calc}>
              <p className={css.calcTitle}>Calculate your rate:</p>
              <div className={css.calcForm}>
                <label className={css.genderText}>
                  <Field
                    className={css.choiceGender}
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={() => {
                      setGender('female');
                      setUserInput(false);
                    }}
                  />
                  For woman
                </label>
                <label className={css.genderText}>
                  <Field
                    className={css.choiceGender}
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={() => {
                      setGender('male');
                      setUserInput(false);
                    }}
                  />
                  For man
                </label>
                {errors.gender && touched.gender && (
                  <div className={css.error}>{errors.gender}</div>
                )}
              </div>
              <div className={css.calcWeight}>
                <label className={css.calcLabel}>
                  <span>Your weight in kilograms:</span>
                </label>
                <Field
                  className={`${css.calcInput} ${
                    errors.weight && touched.weight ? css.inputError : ''
                  }`}
                  type="number"
                  name="weight"
                  placeholder="0"
                  onChange={e => {
                    setFieldValue('weight', e.target.value);
                    setWeight(e.target.value);
                    // setUserInput(false);
                  }}
                />
                {errors.weight && touched.weight && (
                  <div className={css.error}>{errors.weight}</div>
                )}
              </div>
              <div className={css.calcWeight}>
                <label className={css.calcLabel}>
                  The time of active participation in sports or other activities
                  with a high physical load in hours:
                </label>
                <Field
                  className={`${css.calcInput} ${
                    errors.time && touched.time ? css.inputError : ''
                  }`}
                  type="number"
                  name="time"
                  placeholder="0"
                  onChange={e => {
                    setFieldValue('time', e.target.value);
                    setTime(e.target.value);
                    // setUserInput(false);
                  }}
                />
                {errors.time && touched.time && (
                  <div className={css.error}>{errors.time}</div>
                )}
              </div>
              <label className={css.calcQuantity}>
                <span className={css.quantitytext}>
                  The required amount of water in liters per day:
                </span>
                <label className={css.quantityInput}>{dailyNorma} L</label>
              </label>
            </div>
            <div className={css.drinkQuantity}>
              <p className={css.calcTitle}>
                Write down how much water you will drink:
              </p>
              <Field
                className={`${css.drinkInput} ${
                  errors.consumedWater &&
                  (touched.consumedWater || values.consumedWater)
                    ? css.inputError
                    : ''
                }`}
                type="number"
                name="consumedWater"
                placeholder="0"
                value={consumedWater}
                onChange={e => {
                  setFieldValue('consumedWater', e.target.value);
                  setConsumedWater(e.target.value);
                }}
              />
              {errors.consumedWater && values.consumedWater ? (
                <div className={css.error_consumedWater}>
                  {errors.consumedWater}
                </div>
              ) : null}
            </div>
            <div className={css.saveButton}>
              <MyDailyNormaModalBtn
                isSubmitting={isSubmitting || submitLoading}
                disabled={submitLoading}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyDailyNormaModal;
