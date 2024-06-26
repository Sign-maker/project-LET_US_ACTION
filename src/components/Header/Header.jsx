import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo/logo.svg';
import { IconContext } from 'react-icons';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import css from './Header.module.css';
import { ButtonPopUp } from 'components/ButtonPopUp/ButtonPopUp';
import LogoutModal from 'components/modals/LogoutModal/LogoutModal';
import { useAuth } from 'hooks/useAuth';
import { routes } from 'constants/routes';
import { UserModal } from 'components/modals/UserModal/UserModal';
import { useWater } from 'hooks/useWater';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  const [isLogoutVisible, setLogoutVisible] = useState(false);
  const { isLoggedIn, logOut } = useAuth();
  const { resetWaterStore } = useWater();


  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsVisible(false);
  };
  const handleCloseModal = () => {
    setIsVisible(true);
  };
  const handleClick = () => {
    navigate(routes.SIGNIN);
  };

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.wrap}>
          <NavLink className={css.logo} to={routes.MAIN} aria-label="logo tracker">
            <Logo aria-label="logo tracker"/>
          </NavLink>
          {!isLoggedIn ? (
            <button className={css.button} onClick={handleClick} aria-label='sign In button'>
              <span className={css.signIn} aria-label="text sing in">Sign in</span>
              <IconContext.Provider value={{ className: css.icon }}>
                <div>
                  <HiOutlineUserCircle />
                </div>
              </IconContext.Provider>
            </button>
          ) : (
            <ButtonPopUp
              handleOpenModal={handleOpenModal}
              openLogoutModal={() => {
                setLogoutVisible(true);
              }}
            />
          )}
        </div>
        {!isVisible && (
          <Modal onClose={handleCloseModal}>
            <UserModal onClose={handleCloseModal} />
          </Modal>
        )}

        {isLogoutVisible && (
          <Modal
            onClose={() => {
              setLogoutVisible(false);
            }}
          >
            <LogoutModal
              onCloseLogout={() => {
                setLogoutVisible(false);
              }}
              onLogout={() => {
                logOut();
                resetWaterStore();
              }}
            />
          </Modal>
        )}
      </div>
    </header>
  );
};

export default Header;
