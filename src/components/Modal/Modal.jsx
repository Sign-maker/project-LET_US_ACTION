import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const rootModal = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  //   const [isVisible, setIsVisible] = useState(true);

  const closeModal = () => {
    // setIsVisible(false);
    onClose();
  };

  useEffect(() => {
    //блокуємо скрол сторінки
    document.body.style.overflow = 'hidden';

    const closeModalByEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', closeModalByEsc);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', closeModalByEsc);
    };
  }, []);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      {children}
    </div>,
    rootModal
  );
};

export default Modal;
