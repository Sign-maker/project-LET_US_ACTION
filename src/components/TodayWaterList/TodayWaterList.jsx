import { useEffect, useState } from 'react';
import sprite from '../../images/sprite.svg';
import css from './TodayWaterList.module.css';
import Modal from '../Modal/Modal';
import TodayListModal from 'components/modals/TodayListModal/TodayListModal';
import DeleteWaterModal from '../../components/modals/DeleteWaterModal/DeleteWaterModal';
import { useWater } from 'hooks/useWater';
import { timeFromDate } from 'helpers/dateHelpers';
import { current } from '@reduxjs/toolkit';

export const TodayWaterList = () => {
  const { fetchTodayStats, todayStats, deleteWater } = useWater();
  const [currentModifyObj, setCurrenModifyObj] = useState(null);

  useEffect(() => {
    fetchTodayStats();
  }, [fetchTodayStats]);

  const [isVisible, setIsVisible] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleOpenAddModal = () => {
    setIsVisible(false);
  };

  const handleOpenEditModal = () => {
    setIsVisible(false);
  };

  const handleOpenDeleteModal = waterObj => {
    setCurrenModifyObj(waterObj);
    setDeleteOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteOpen(false);
  };

  const handleCloseModal = () => {
    setIsVisible(true);
  };

  const handleEditItem = waterObj => {
    setCurrenModifyObj(waterObj);
    setIsEditing(true);
    handleOpenEditModal();
  };

  const { dayNotes } = todayStats;
  // const dayNotes = [
  //   { _id: 'id-1', amountWater: '500', date: '4' },
  //   { _id: 'id-2', amountWater: '500', date: '4' },
  //   { _id: 'id-3', amountWater: '500', date: '6' },
  //   { _id: 'id-4', amountWater: '500', date: '2' },
  // ];

  return (
    <div className={css.containerToday}>
      <h2 className={css.todayText}>Today</h2>
      <div className={css.containerList}>
        <ul className={css.ulWrap}>
          {/* <li className={css.listItem} key={_id}>
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
          </li> */}
          {dayNotes?.length > 0 ? (
            dayNotes
              .slice()
              .sort(
                (a, b) =>
                  new Date(a.date).getTime() - new Date(b.date).getTime()
              )
              .map(waterObj => (
                <li className={css.listItem} key={waterObj._id}>
                  <div className={css.infoWrap}>
                    <svg>
                      <use href={sprite + '#cup'}></use>
                    </svg>
                    <p className={css.volume}>{waterObj.waterVolume} ml</p>
                    <p className={css.time}>
                      {timeFromDate('en-US', waterObj.date)}
                    </p>
                  </div>
                  <div className={css.wrapBtn}>
                    <button
                      className={css.editBtn}
                      onClick={() => {
                        handleEditItem(waterObj);
                        console.log('objj', waterObj);
                      }}
                    >
                      <svg>
                        <use href={sprite + '#edit'}></use>
                      </svg>
                    </button>
                    <button
                      className={css.deleteBtn}
                      onClick={() => {
                        handleOpenDeleteModal(waterObj);
                      }}
                    >
                      <svg>
                        <use href={sprite + '#trash'}></use>
                      </svg>
                    </button>
                  </div>
                </li>
              ))
          ) : (
            <li>
              <p className={css.waterItem}>No notes yet</p>
            </li>
          )}

          <button
            className={css.addBtn}
            onClick={() => {
              setIsEditing(false);
              handleOpenAddModal();
            }}
          >
            <svg>
              <use href={sprite + '#plus'}></use>
            </svg>
            Add water
          </button>

          {deleteOpen && (
            <Modal onClose={handleCloseDeleteModal}>
              <DeleteWaterModal
                onClose={handleCloseDeleteModal}
                deleteRecordId={currentModifyObj?._id}
              />
            </Modal>
          )}

          {!isVisible && (
            <Modal onClose={handleCloseModal}>
              <TodayListModal
                onClose={() => {
                  setIsEditing(false);
                  handleCloseModal();
                }}
                isEditing={isEditing}
                amountForEdit={currentModifyObj?.waterVolume}
                editTimeInit={currentModifyObj?.date}
                editRecordId={currentModifyObj?._id}
              />
            </Modal>
          )}
        </ul>
      </div>
    </div>
  );
};
