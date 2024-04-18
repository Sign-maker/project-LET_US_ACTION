import React from 'react';
import Popup from 'reactjs-popup';
import { IconContext } from 'react-icons';
import { GoChevronDown } from 'react-icons/go';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import css from './ButtonPopUp.module.css';
import { useAuth } from 'hooks/useAuth';

export const ButtonPopUp = ({ handleOpenModal, openLogoutModal }) => {
  const { user } = useAuth();

  const baseURL = 'http://localhost:8000/';

  // console.log(user);
  const url = `${baseURL}${user.avatarURL}`;

  // console.log(user.avatarURL);
  return (
    <Popup
      trigger={
        <button className={css.button}>
          {user.avatarURL ? (
            <>
              <img src={url} alt={user.name} className={css.avatar} />
              <span className={css.name}>{user.name}</span>
            </>
          ) : user.name ? (
            <>
              <div className={css.avatar}>
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className={css.name}>{user.name}</span>
            </>
          ) : (
            <span className={css.name}>
              {user.email.charAt(0).toUpperCase()}
            </span>
          )}
          {/* <span className={css.name}>{currentName}</span> */}
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
