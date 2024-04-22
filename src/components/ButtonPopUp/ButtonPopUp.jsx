import React from 'react';
import Popup from 'reactjs-popup';
import { IconContext } from 'react-icons';
import { GoChevronDown } from 'react-icons/go';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { useAuth } from 'hooks/useAuth';
import css from './ButtonPopUp.module.css';

export const ButtonPopUp = ({ handleOpenModal, openLogoutModal }) => {
  const { user } = useAuth();

  const url = user.avatarURL;

  return (
    <Popup
      trigger={
        <button className={css.button}>
          {user.avatarURL ? (
            <>
              <span className={css.name}>{user.name}</span>
              <img src={url} alt={user.name} className={css.avatar} />
            </>
          ) : user.name ? (
            <div className={css.avatarWrapper}>
              <span className={css.name}>{user.name}</span>
              <div className={css.fakeAvatar}>
                {user.name.charAt(0).toUpperCase()}
              </div>
            </div>
          ) : (
            <div className={css.fakeAvatar}>
              {user.email.charAt(0).toUpperCase()}
            </div>
          )}
          <IconContext.Provider value={{ className: css.icon }}>
            <div>
              <GoChevronDown />
            </div>
          </IconContext.Provider>
        </button>
      }
      position="bottom right"
    >
      <div className={css.content}>
        <button className={css.button} onClick={handleOpenModal}>
          <IconContext.Provider value={{ className: css.icon }}>
            <div>
              <HiOutlineCog6Tooth />
            </div>
          </IconContext.Provider>
          <span className={css.span}>Setting</span>
        </button>
        <button
          className={css.button}
          onClick={() => {
            openLogoutModal();
          }}
        >
          <IconContext.Provider value={{ className: css.icon }}>
            <div>
              <HiOutlineArrowRightOnRectangle />
            </div>
          </IconContext.Provider>
          <span className={css.span}>Log out</span>
        </button>
      </div>
    </Popup>
  );
};
