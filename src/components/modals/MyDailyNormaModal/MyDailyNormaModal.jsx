// import React from 'react';
// import { VscChromeClose } from 'react-icons/vsc';
// import Styles from './MyDailyNormaModal.module.css';
// import MyDailyNormaModalBtn from '../../ButtonsModal/MyDailyNormaModalBtn/MyDailyNormaModalBtn';

// const MyDailyNormaModal = () => {
//   return (
//     <div className={Styles['modal']}>
//       <div className={Styles['header']}>
//         <p className={Styles['title']}>My daily norma</p>
//         <button className={Styles['closeButton']}>
//           <VscChromeClose className={Styles['closeIcon']} />
//         </button>
//       </div>
//       <div>
//         <form className={Styles['formulaBody']}>
//           <div className={Styles['formulaBlock']}>
//             <div className={Styles['formula']}>
//               <p className={Styles['text']}>
//                 For girl:
//                 <span className={Styles['formulaText']}>
//                   V=(M*0,03) + (T*0,4)
//                 </span>
//               </p>
//               <p className={Styles['text']}>
//                 For man:
//                 <span className={Styles['formulaText']}>
//                   V=(M*0,04) + (T*0,6)
//                 </span>
//               </p>
//             </div>
//             <div>
//               <p className={Styles['formulaExplain']}>
//                 * V is the volume of the water norm in liters per day, M is your
//                 body weight, T is the time of active sports, or another type of
//                 activity commensurate in terms of loads (in the absence of
//                 these, you must set 0)
//               </p>
//             </div>
//           </div>
//           <div className={Styles['calc']}>
//             <p className={Styles['calcTitle']}>Calculate your rate:</p>
//             <div className={Styles['calcForm']}>
//               <label>
//                 <input
//                   className={Styles['choiceGender']}
//                   type="radio"
//                   name="gender"
//                   value="woman"
//                 ></input>
//                 For woman
//               </label>
//               <label>
//                 <input
//                   className={Styles['choiceGender']}
//                   type="radio"
//                   name="gender"
//                   value="man"
//                 ></input>
//                 For man
//               </label>
//             </div>

//             <div className={Styles['calcWeight']}>
//               <label className={Styles['calcLabel']}>
//                 <span>Your weight in kilograms:</span>
//               </label>
//               <input
//                 className={Styles['calcInput']}
//                 name="weight"
//                 placeholder="0"
//                 type="number"
//                 min="0"
//                 max="200"
//                 step="0.1"
//               ></input>
//             </div>
//             <div className={Styles['calcWeight']}>
//               <label className={Styles['calcLabel']}>
//                 The time of active participation in sports or other activities
//                 with a high physical. load in hours:
//               </label>
//               <input
//                 className={Styles['calcInput']}
//                 name="time"
//                 type="number"
//                 placeholder="0"
//                 min="0Hr"
//                 max="24Hr"
//                 step="0.5Hr"
//               ></input>
//             </div>
//             <label className={Styles['calcQuantity']}>
//               <span className={Styles['quantitytext']}>
//                 The required amount of water in liters per day:
//               </span>
//               <label className={Styles['quantityInput']}>1.6L</label>
//             </label>
//           </div>
//           <div className={Styles['drinkQuantity']}>
//             <p className={Styles['calcTitle']}>
//               Write down how much water you will drink:
//             </p>
//             <input
//               className={Styles['drinkInput']}
//               type="number"
//               name="myDailyNorma"
//               placeholder="0"
//               min="0"
//               max="15L"
//               step="0.250"
//             ></input>
//           </div>
//           <div className={Styles['saveButton']}>
//             <MyDailyNormaModalBtn />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MyDailyNormaModal;

import React, { useState, useEffect } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import css from './MyDailyNormaModal.module.css';
import MyDailyNormaModalBtn from '../../ButtonsModal/MyDailyNormaModalBtn/MyDailyNormaModalBtn';

const MyDailyNormaModal = () => {
  // Стани для збереження даних форми, результату розрахунку та повідомлення про помилку
  const [formData, setFormData] = useState({
    gender: '',
    weight: 0,
    time: 0,
    consumedWater: 0,
  });
  const [calculationResult, setCalculationResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(true); // Стан для відстеження відкриття/закриття модалки

  // Обробник зміни значень у полях форми
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Обробник відправки форми
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('/api/user/waterrate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setCalculationResult(data.message);
      } else {
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  // Додаємо обробник клавіші Esc для закриття модалки
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Функція для закриття модалки
  const closeModal = () => {
    setModalOpen(false);
  };

  // Обробник кліку на бекдроп
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {modalOpen && (
        <div className={css.modal} onClick={handleBackdropClick}>
          <div className={css.header}>
            <p className={css.title}>My daily norma</p>
            <button className={css.closeButton} onClick={closeModal}>
              <VscChromeClose className={css.closeIcon} />
            </button>
          </div>
          <div>
            <form className={css.formulaBody} onSubmit={handleSubmit}>
              <div className={css.calc}>
                <p className={css.calcTitle}>Calculate your rate:</p>
                <div className={css.calcForm}>
                  <label>
                    <input
                      className={css.choiceGender}
                      type="radio"
                      name="gender"
                      value="woman"
                      onChange={handleChange}
                    />
                    For woman
                  </label>
                  <label>
                    <input
                      className={css.choiceGender}
                      type="radio"
                      name="gender"
                      value="man"
                      onChange={handleChange}
                    />
                    For man
                  </label>
                </div>
                <div className={css.calcWeight}>
                  <label className={css.calcLabel}>
                    <span>Your weight in kilograms:</span>
                  </label>
                  <input
                    className={css.calcInput}
                    name="weight"
                    placeholder="0"
                    type="number"
                    min="0"
                    max="300"
                    onChange={handleChange}
                  />
                </div>
                <div className={css.calcWeight}>
                  <label className={css.calcLabel}>
                    The time of active participation in sports or other
                    activities with a high physical load in hours:
                  </label>
                  <input
                    className={css.calcInput}
                    name="time"
                    type="number"
                    placeholder="0"
                    min="0"
                    max="48"
                    onChange={handleChange}
                  />
                </div>
                <label className={css.calcQuantity}>
                  <span className={css.quantitytext}>
                    The required amount of water in liters per day:
                  </span>
                  <label className={css.quantityInput}>1.6L</label>
                </label>
              </div>
              <div className={css.drinkQuantity}>
                <p className={css.calcTitle}>
                  Write down how much water you will drink:
                </p>
                <input
                  className={css.drinkInput}
                  type="number"
                  name="consumedWater"
                  placeholder="0"
                  min="0"
                  max="15"
                  step="0.250"
                  onChange={handleChange}
                />
              </div>
              <div className={css.saveButton}>
                <MyDailyNormaModalBtn />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MyDailyNormaModal;
