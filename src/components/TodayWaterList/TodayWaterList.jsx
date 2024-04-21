import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import css from './TodayWaterList.module.css';
import Modal from '../Modal/Modal';
import TodayListModal from 'components/modals/TodayListModal/TodayListModal';
import DeleteWaterModal from '../../components/modals/DeleteWaterModal/DeleteWaterModal';
import { useWater } from 'hooks/useWater';
import { timeFromDate } from 'helpers/dateHelpers';

export const TodayWaterList = () => {
  const { todayStats } = useWater();

  const [isVisible, setIsVisible] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  // const [selectedRecord, setSelectedRecord] = useState(null)

  const handleOpenAddModal = () => {
    setIsVisible(false);
  };

  const handleOpenEditModal = () => {
    setIsVisible(false);
  };

  const handleOpenDeleteModal = () => {
    setDeleteOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteOpen(false);
  };

  const handleCloseModal = () => {
    setIsVisible(true);
  };

  const handleEditItem = () => {
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
              .map(({ waterVolume, date, _id }) => (
                <li className={css.listItem} key={_id}>
                  <div className={css.infoWrap}>
                    <svg>
                      <use href={sprite + '#cup'}></use>
                    </svg>
                    <p className={css.volume}>{waterVolume} ml</p>
                    <p className={css.time}>{timeFromDate('en-US', date)}</p>
                  </div>
                  <div className={css.wrapBtn}>
                    <button className={css.editBtn} onClick={handleEditItem}>
                      <svg>
                        <use href={sprite + '#edit'}></use>
                      </svg>
                    </button>
                    <button
                      className={css.deleteBtn}
                      onClick={handleOpenDeleteModal}
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

          {deleteOpen && (
            <Modal onClose={handleCloseDeleteModal}>
              <DeleteWaterModal onClose={handleCloseDeleteModal} />
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
              />
            </Modal>
          )}
        </ul>
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
      </div>
    </div>
  );
};
