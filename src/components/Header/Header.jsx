import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/Logo.svg';
import { IconContext } from 'react-icons';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import css from './Header.module.css';
import { ButtonPopUp } from 'components/ButtonPopUp/ButtonPopUp';
import { useAuth } from 'hooks/useAuth';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { isLoggedIn } = useAuth();

  const handleOpenModal = () => {
    setIsVisible(false);
  };
  const handleCloseModal = () => {
    setIsVisible(true);
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.wrap}>
          <NavLink className={css.logo} to="/home">
            <Logo />
          </NavLink>
          {!isLoggedIn ? (
            <button className={css.button}>
              <span className={css.signIn}>Sign in</span>
              <IconContext.Provider value={{ className: css.icon }}>
                <div>
                  <HiOutlineUserCircle />
                </div>
              </IconContext.Provider>
            </button>
          ) : (
            <ButtonPopUp handleOpenModal={handleOpenModal} />
          )}
        </div>
        {!isVisible && <Modal onClose={handleCloseModal}></Modal>}
      </div>
    </header>
  );
};

export default Header;
