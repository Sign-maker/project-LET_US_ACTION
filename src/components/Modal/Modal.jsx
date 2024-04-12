import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from '../../styles/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  // слухач для кнопок
  componentDidMount() {
    window.addEventListener('keydown', this.handleClickEsc);
  }
  // чистимо за собою після закриття модалки
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClickEsc);
  }

  handleClickEsc = e => {
    // перевірка клавіші Escape
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  // закриття модалки по кліку на бекдроп
  handleClickBackdrop = e => {
    // перевірка чи клік був на бекдроп
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

    render() {
      const {children} = this.props
    return createPortal(
      <div className={styles.modal_backdrop} onClick={this.handleClickBackdrop}>
        <div className={styles.modal_content}>{children}</div>
      </div>,
      modalRoot
    );
  }
}
