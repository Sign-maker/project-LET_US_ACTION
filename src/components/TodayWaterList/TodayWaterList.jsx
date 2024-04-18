import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import css from './TodayWaterList.module.css';
import Modal from '../Modal/Modal';
import TodayListModal from 'components/modals/TodayListModal/TodayListModal';

export const TodayWaterList = () => {
   const [isVisible, setIsVisible] = useState(true);
   const [isEditing, setIsEditing] = useState(false);

 const handleOpenModal = () => {
   setIsVisible(false);
 };
 const handleCloseModal = () => {
   setIsVisible(true);
  };
  
   const handleEditItem = () => {
     setIsEditing(true);
     handleOpenModal();
   };

  const timeFromDate = date => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  //  временное решение после удалить
  const amountWater = '250';
  const date = '0';
  const _id = '12121';
  // ===============
  return (
    <div className={css.containerToday}>
      <h2 className={css.todayText}>Today</h2>
      <div className={css.containerList}>
        <ul className={css.ulWrap}>
          {/* отработка 1 item */}
          {/* //  временное решение после удалить */}
          <li className={css.listItem} key={_id}>
            <div className={css.infoWrap}>
              <svg>
                <use href={sprite + '#cup'}></use>
              </svg>
              <p className={css.volume}>{amountWater} ml</p>
              <p className={css.time}>{timeFromDate(date)}</p>
            </div>
            <div className={css.wrapBtn}>
              <button className={css.editBtn} onClick={handleEditItem}>
                <svg>
                  <use href={sprite + '#edit'}></use>
                </svg>
              </button>
              <button className={css.deleteBtn} onClick={() => {}}>
                <svg>
                  <use href={sprite + '#trash'}></use>
                </svg>
              </button>
            </div>
          </li>

          {/* // =============== */}

          {/* работота листа по условию */}

          {/* {5?.length > 0 ? (
            5
              .slice()
              .sort(
                (a, b) =>
                  new Date(a.date).getTime() - new Date(b.date).getTime()
              )
              .map(({ amountWater, date, _id }) => (
          <li className={css.listItem} key={_id}>
            
                <div className={css.infoWrap}>
                    <svg>
                      <use href={sprite + '#cup'}></use>
                    </svg>
                    <p className={css.volume}>{amountWater} ml</p>
                    <p className={css.time}>{timeFromDate(date)}</p>
                </div>
                <div className={css.wrapBtn}>
                     <button className={css.editBtn} onClick={() => {}}>
                         <svg>
                        <use href={sprite + '#edit'}></use>
                      </svg>
                     </button>
                   <button className={css.deleteBtn} onClick={() => {}}>
                      <svg>
                        <use href={sprite + '#trash'}></use>
                      </svg>
                   </button>
                </div>
          </li>
              ))
          ) : (
            <li>
              <p className={css.waterItem}>Your entries are empty</p>
            </li>
          )} */}

          <button
            className={css.addBtn}
            onClick={() => {
              setIsEditing(false);
              handleOpenModal();
            }}
          >
            <svg>
              <use href={sprite + '#plus'}></use>
            </svg>
            Add water
          </button>
          {!isVisible && (
            <Modal onClose={handleCloseModal}>
              <TodayListModal
                onClose={() => {
                  setIsEditing(false);
                  handleCloseModal();
                }}
                isEditing={isEditing}
              />
            </Modal>
          )}
        </ul>
      </div>
    </div>
  );
};
