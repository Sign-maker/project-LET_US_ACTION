import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const toastSettings = {
  autoClose: 2000,
  position: 'top-right',
};

export const toastFulfilled = notification =>
  toast.success(notification, toastSettings);

export const toastRejected = notification =>
  toast.error(notification, toastSettings);
