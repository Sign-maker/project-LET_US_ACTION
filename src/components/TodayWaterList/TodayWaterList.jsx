import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import css from './TodayWaterList.module.css';
import Modal from '../Modal/Modal';
import TodayListModal from 'components/modals/TodayListModal/TodayListModal';
import DeleteWaterModal from '../../components/modals/DeleteWaterModal/DeleteWaterModal';
import { useWater } from 'hooks/useWater';
import { timeFromDate } from 'helpers/dateHelpers';
import ClipLoader from 'react-spinners/ClipLoader';
import Loader from '../Loader/Loader.module.css';

export const TodayWaterList = () => {
  const { todayStats, isTodayLoading } = useWater();
  const [currentModifyObj, setCurrenModifyObj] = useState(null);
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

  return (
    <div className={css.containerToday}>
      <h2 className={css.todayText}>Today</h2>
      <div className={css.containerList}>
        {isTodayLoading ? (
          <div className={Loader.loaderContainer}>
            <ClipLoader size={50} color="#407bff" />
          </div>
        ) : (
          <ul className={css.ulWrap}>
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
          </ul>
        )}

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