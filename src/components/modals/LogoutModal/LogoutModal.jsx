import React from 'react'
// import css from '../LogoutModal/LogoutModal.module.css';

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
