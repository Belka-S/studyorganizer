import { ToastContainer } from './Toast.styled';

const Toast = () => (
  <ToastContainer
    position="top-left"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
);

export default Toast;
