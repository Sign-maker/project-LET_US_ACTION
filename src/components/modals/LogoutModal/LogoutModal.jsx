import React from 'react'
// import css from '../LogoutModal/LogoutModal.module.css';

//!Модалка - использование в месте рендера
  // const [showModal, setShowModal] = useState(false);

  // const ToggleOpenModal = () => {
  //   setShowModal(!showModal);
  // };


  // return (
  //   <div>
  //     <button type="button" onClick={ToggleOpenModal}>
  //       Open
  //     </button>
      // {showModal && (
      //   <Modal onClose={ToggleOpenModal}>
      //     {/* Здесь рендерить компоненты с контентом модальных окон */}
      //   </Modal>
      // )}
  //   </div>
  // );
  //////////!

export const LogoutModal = () => {
  return (
    <>
      <div>
        <button type="button">x</button>
        <h2>Log out</h2>
        <p>Do you really want to leave?</p>

        <div>
          <button type="button">Cancel</button>
          <button type="button">Logout</button>
        </div>
      </div>
    </>
  );
}
