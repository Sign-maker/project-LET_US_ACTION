import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { VscChromeClose } from 'react-icons/vsc';
import css from './MyDailyNormaModal.module.css';
import MyDailyNormaModalBtn from '../../ButtonsModal/MyDailyNormaModalBtn/MyDailyNormaModalBtn';
import Modal from 'components/Modal/Modal';
import { updateMyDailyNorma } from 'redux-store/auth/authOperations';

const MyDailyNormaModal = ({ onClose }) => {
  const [weight, setWeight] = useState('');
  const [time, setTime] = useState('');
  const [consumedWater, setConsumedWater] = useState('');
  const [gender, setGender] = useState('female');
  const [dailyNorma, setDailyNorma] = useState(2);
  const [userInput, setUserInput] = useState(false);

  const dispatch = useDispatch();

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

  const handleSave = async values => {
    const data = {
      dailyNorma: consumedWater > 0 ? consumedWater : dailyNorma,
    };

    await dispatch(updateMyDailyNorma(data));
    onClose();
  };

  const validationSchema = Yup.object().shape({
    weight: Yup.number()
      .required('Weight is required')
      .min(10, 'Weight must be at least 10 kg'),
    time: Yup.number()
      .required('Time is required')
      .max(24, 'Time must be at most 24 hours'),
    consumedWater: Yup.number()
      .required('Consumed water is required')
      .min(0, 'Consumed water must be at least 0'),
  });

  return (
    <Modal onClose={onClose}>
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
        >
          {({ isSubmitting, errors, touched, setFieldValue }) => (
            <Form className={css.formulaBody}>
              <div className={css.formulaBlock}>
                <div className={css.formula}>
                  <p className={css.text}>
                    For girl:
                    <span className={css.formulaText}>
                      V = (M * 0.03) + (T * 0.4)
                    </span>
                  </p>
                  <p className={css.text}>
                    For man:
                    <span className={css.formulaText}>
                      V = (M * 0.04) + (T * 0.6)
                    </span>
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
                  <label>
                    <Field
                      className={css.choiceGender}
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === 'female'}
                      onChange={() => {
                        setGender('female');
                        setUserInput(true);
                      }}
                    />
                    For woman
                  </label>
                  <label>
                    <Field
                      className={css.choiceGender}
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === 'male'}
                      onChange={() => {
                        setGender('male');
                        setUserInput(true);
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
                      setUserInput(true);
                    }}
                  />
                  {errors.weight && touched.weight && (
                    <div className={css.error}>{errors.weight}</div>
                  )}
                </div>
                <div className={css.calcWeight}>
                  <label className={css.calcLabel}>
                    The time of active participation in sports or other
                    activities with a high physical load in hours:
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
                      setUserInput(true);
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
                  <label className={css.quantityInput}>{dailyNorma}L</label>
                </label>
              </div>
              <div className={css.drinkQuantity}>
                <p className={css.calcTitle}>
                  Write down how much water you will drink:
                </p>
                <Field
                  className={`${css.drinkInput} ${
                    errors.consumedWater && touched.consumedWater
                      ? css.inputError
                      : ''
                  }`}
                  type="number"
                  name="consumedWater"
                  placeholder="0"
                  min="0"
                  max="15"
                  step="0.25"
                  value={consumedWater}
                  onChange={e => {
                    setFieldValue('consumedWater', e.target.value);
                    setConsumedWater(e.target.value);
                    setUserInput(true);
                  }}
                />
                {errors.consumedWater && touched.consumedWater && (
                  <div className={css.error}>{errors.consumedWater}</div>
                )}
              </div>
              <div className={css.saveButton}>
                <MyDailyNormaModalBtn isSubmitting={isSubmitting} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default MyDailyNormaModal;

// import React, { useState, useEffect } from 'react';
// import { VscChromeClose } from 'react-icons/vsc';
// import css from './MyDailyNormaModal.module.css';
// import MyDailyNormaModalBtn from '../../ButtonsModal/MyDailyNormaModalBtn/MyDailyNormaModalBtn';
// import Modal from '../../Modal/Modal';

// const MyDailyNormaModal = ({ onClose }) => {
//   // Стани для збереження даних форми, результату розрахунку та повідомлення про помилку
//   const [formData, setFormData] = useState({
//     gender: '',
//     weight: 0,
//     time: 0,
//     consumedWater: 0,
//   });
//   const [calculationResult, setCalculationResult] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [modalOpen, setModalOpen] = useState(true); // Стан для відстеження відкриття/закриття модалки

//   // Обробник зміни значень у полях форми
//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Обробник відправки форми
//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/user/waterrate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setCalculationResult(data.message);
//       } else {
//         setErrorMessage(data.error);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('Something went wrong. Please try again.');
//     }
//   };

//   // Додаємо обробник клавіші Esc для закриття модалки
//   useEffect(() => {
//     const handleKeyDown = event => {
//       if (event.key === 'Escape') {
//         setModalOpen(false);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   // Функція для закриття модалки
//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   // Обробник кліку на бекдроп
//   const handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       closeModal();
//     }
//   };

//   return (
//     <>
//       <Modal onClose={onClose}>
//         {modalOpen && (
//           <div className={css.modal} onClick={handleBackdropClick}>
//             <div className={css.header}>
//               <p className={css.title}>My daily norma</p>
//               <button className={css.closeButton} onClick={closeModal}>
//                 <VscChromeClose className={css.closeIcon} />
//               </button>
//             </div>

//             <div>
//               <form className={css.formulaBody} onSubmit={handleSubmit}>
//                 <div className={css.formulaBlock}>
//                   <div className={css.formula}>
//                     <p className={css.text}>
//                       For girl:
//                       <span className={css.formulaText}>
//                         V=(M*0,03) + (T*0,4)
//                       </span>
//                     </p>
//                     <p className={css.text}>
//                       For man:
//                       <span className={css.formulaText}>
//                         V=(M*0,04) + (T*0,6)
//                       </span>
//                     </p>
//                   </div>
//                   <div>
//                     <p className={css.formulaExplain}>
//                       * V is the volume of the water norm in liters per day, M
//                       is your body weight, T is the time of active sports, or
//                       another type of activity commensurate in terms of loads
//                       (in the absence of these, you must set 0)
//                     </p>
//                   </div>
//                 </div>
//                 <div className={css.calc}>
//                   <p className={css.calcTitle}>Calculate your rate:</p>
//                   <div className={css.calcForm}>
//                     <label>
//                       <input
//                         className={css.choiceGender}
//                         type="radio"
//                         name="gender"
//                         value="woman"
//                         onChange={handleChange}
//                       />
//                       For woman
//                     </label>
//                     <label>
//                       <input
//                         className={css.choiceGender}
//                         type="radio"
//                         name="gender"
//                         value="man"
//                         onChange={handleChange}
//                       />
//                       For man
//                     </label>
//                   </div>
//                   <div className={css.calcWeight}>
//                     <label className={css.calcLabel}>
//                       <span>Your weight in kilograms:</span>
//                     </label>
//                     <input
//                       className={css.calcInput}
//                       name="weight"
//                       placeholder="0"
//                       type="number"
//                       min="0"
//                       max="300"
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className={css.calcWeight}>
//                     <label className={css.calcLabel}>
//                       The time of active participation in sports or other
//                       activities with a high physical load in hours:
//                     </label>
//                     <input
//                       className={css.calcInput}
//                       name="time"
//                       type="number"
//                       placeholder="0"
//                       min="0"
//                       max="48"
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <label className={css.calcQuantity}>
//                     <span className={css.quantitytext}>
//                       The required amount of water in liters per day:
//                     </span>
//                     <label className={css.quantityInput}>1.6L</label>
//                   </label>
//                 </div>
//                 <div className={css.drinkQuantity}>
//                   <p className={css.calcTitle}>
//                     Write down how much water you will drink:
//                   </p>
//                   <input
//                     className={css.drinkInput}
//                     type="number"
//                     name="consumedWater"
//                     placeholder="0"
//                     min="0"
//                     max="15"
//                     step="0.250"
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className={css.saveButton}>
//                   <MyDailyNormaModalBtn />
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </Modal>
//     </>
//   );
// };

// export default MyDailyNormaModal;

//РОБОЧІЙ ВАРІК!!!!!!!!

// import React, { useState, useEffect } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { VscChromeClose } from 'react-icons/vsc';
// import css from './MyDailyNormaModal.module.css';
// import MyDailyNormaModalBtn from '../../ButtonsModal/MyDailyNormaModalBtn/MyDailyNormaModalBtn';
// import Modal from '../../Modal/Modal';

// const MyDailyNormaModal = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     gender: '',
//     weight: 0,
//     time: 0,
//     consumedWater: 0,
//   });

//   useEffect(() => {
//     const handleKeyDown = event => {
//       if (event.key === 'Escape') {
//         onClose();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (values, { setSubmitting }) => {
//     fetch('/api/user/waterrate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(values),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//         onClose();
//       })
//       .catch(error => {
//         console.error('There was an error!', error);
//       })
//       .finally(() => {
//         setSubmitting(false);
//       });
//   };

//   const handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <Modal onClose={onClose}>
//       <div className={css.modal} onClick={handleBackdropClick}>
//         <div className={css.header}>
//           <p className={css.title}>My daily norma</p>
//           <button className={css.closeButton} onClick={onClose}>
//             <VscChromeClose className={css.closeIcon} />
//           </button>
//         </div>
//         <Formik
//           initialValues={{
//             gender: '',
//             weight: 0,
//             time: 0,
//             consumedWater: 0,
//           }}
//           validationSchema={Yup.object().shape({
//             gender: Yup.string().required('Gender is required'),
//             weight: Yup.number()
//               .required('Weight is required')
//               .min(0, 'Weight must be at least 0'),
//             time: Yup.number()
//               .required('Time is required')
//               .min(0, 'Time must be at least 0'),
//             consumedWater: Yup.number()
//               .required('Consumed water is required')
//               .min(0, 'Consumed water must be at least 0'),
//           })}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form className={css.formulaBody}>
//               <div className={css.formulaBlock}>
//                 <div className={css.formula}>
//                   <p className={css.text}>
//                     For girl:
//                     <span className={css.formulaText}>
//                       V=(M*0,03) + (T*0,4)
//                     </span>
//                   </p>
//                   <p className={css.text}>
//                     For man:
//                     <span className={css.formulaText}>
//                       V=(M*0,04) + (T*0,6)
//                     </span>
//                   </p>
//                 </div>
//                 <div>
//                   <p className={css.formulaExplain}>
//                     * V is the volume of the water norm in liters per day, M is
//                     your body weight, T is the time of active sports, or another
//                     type of activity commensurate in terms of loads (in the
//                     absence of these, you must set 0)
//                   </p>
//                 </div>
//               </div>
//               <div className={css.calc}>
//                 <p className={css.calcTitle}>Calculate your rate:</p>
//                 <div className={css.calcForm}>
//                   <label>
//                     <Field
//                       className={css.choiceGender}
//                       type="radio"
//                       name="gender"
//                       value="woman"
//                     />
//                     For woman
//                   </label>
//                   <label>
//                     <Field
//                       className={css.choiceGender}
//                       type="radio"
//                       name="gender"
//                       value="man"
//                     />
//                     For man
//                   </label>
//                   <ErrorMessage
//                     name="gender"
//                     component="div"
//                     className={css.error}
//                   />
//                 </div>
//                 <div className={css.calcWeight}>
//                   <label className={css.calcLabel}>
//                     <span>Your weight in kilograms:</span>
//                   </label>
//                   <Field
//                     className={css.calcInput}
//                     type="number"
//                     name="weight"
//                     placeholder="0"
//                   />
//                   <ErrorMessage
//                     name="weight"
//                     component="div"
//                     className={css.error}
//                   />
//                 </div>
//                 <div className={css.calcWeight}>
//                   <label className={css.calcLabel}>
//                     The time of active participation in sports or other
//                     activities with a high physical load in hours:
//                   </label>
//                   <Field
//                     className={css.calcInput}
//                     type="number"
//                     name="time"
//                     placeholder="0"
//                   />
//                   <ErrorMessage
//                     name="time"
//                     component="div"
//                     className={css.error}
//                   />
//                 </div>
//                 <label className={css.calcQuantity}>
//                   <span className={css.quantitytext}>
//                     The required amount of water in liters per day:
//                   </span>
//                   <label className={css.quantityInput}>1.6L</label>
//                 </label>
//               </div>
//               <div className={css.drinkQuantity}>
//                 <p className={css.calcTitle}>
//                   Write down how much water you will drink:
//                 </p>
//                 <Field
//                   className={css.drinkInput}
//                   type="number"
//                   name="consumedWater"
//                   placeholder="0"
//                 />
//                 <ErrorMessage
//                   name="consumedWater"
//                   component="div"
//                   className={css.error}
//                 />
//               </div>
//               <div className={css.saveButton}>
//                 <MyDailyNormaModalBtn isSubmitting={isSubmitting} />
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </Modal>
//   );
// };

// export default MyDailyNormaModal;
