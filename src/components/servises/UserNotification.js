import { toast } from 'react-toastify';
import './toastify.css';
const toastSettings = {
  autoClose: 2000,
  position: 'top-center',
};

export const toastFulfilled = notification =>
  toast.info(notification, toastSettings);

export const toastRejected = notification =>
  toast.error(notification, toastSettings);
