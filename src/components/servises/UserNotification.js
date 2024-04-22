import { toast } from 'react-toastify';
import './toastify.css';
const toastSettings = {
  autoClose: 2000,
  position: 'top-center',
};

export const toastFulfilled = notification =>
  toast.success(notification, toastSettings);

export const toastRejected = notification =>
  toast.error(notification, toastSettings);
