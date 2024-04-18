import React, { useState } from 'react';
import MyDailyNormaModal from '../modals/MyDailyNormaModal/MyDailyNormaModal';
import css from './DailyNorma.module.css';
import { useAuth } from 'hooks/useAuth';

export const DailyNorma = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { user } = useAuth();

  const dailyNormaCalc = (user.dailyNorma / 1000).toFixed(1);

  const handleEditClick = () => {
    setModalOpen(true);
  };

  return (
    <div className={css.container}>
      <div className={css.contentsDailyNorma}>
        <h3 className={css.titleDailyNorma}>My daily norma</h3>
        <div className={css.contentsDailyNormaWater}>
          <p className={css.titleDailyNormaWater}>{`${dailyNormaCalc} L`}</p>
          <button
            className={css.Button}
            type="button"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      </div>
      <div className={css.DailyNormaBackground}></div>

      {modalOpen && <MyDailyNormaModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

// // import { useAuth } from 'hooks/useAuth';
// import css from './DailyNorma.module.css'

// export const DailyNorma = () => {

//      const dailyNormaCalc = (1500 / 1000).toFixed(1);

//   return (
//    <div className={css.container}>
//       <div className={css.contentsDailyNorma}>
//         <h3 className={css.titleDailyNorma}>My daily norma</h3>
//         <div className={css.contentsDailyNormaWater}>
//           <p className={css.titleDailyNormaWater}> {`${dailyNormaCalc} L`}</p>
//           <button
//           className={css.Button}
//           type="button"
//           onClick={() => {}}
//         >
//             Edit</button>
//         </div>
//       </div>
//       <div className={css.DailyNormaBackground}></div>
//    </div>
//   );
// };
