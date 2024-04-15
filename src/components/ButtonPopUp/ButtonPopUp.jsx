import React from 'react';
import Popup from 'reactjs-popup';
import { IconContext } from 'react-icons';
import { GoChevronDown } from 'react-icons/go';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import css from './ButtonPopUp.module.css';
import { useAuth } from 'hooks/useAuth';

export const ButtonPopUp = ({ handleOpenModal }) => {
  const { user, logOut } = useAuth();
  // написать логику, если имени пользователя нет, то показывать часть емеила до собаки, например так:
  const currentName = user.name ? user.name : user.email.split('@')[0];
  return (
    <Popup
      trigger={
        <button className={css.button}>
          <span className={css.name}>{currentName}</span>
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
            logOut();
          }}
          // написать правильную логику logout=================================================
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
