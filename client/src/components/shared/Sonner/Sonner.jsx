import { ToastContainer } from './Sonner.styled';

const Sonner = () => {
  return (
    <ToastContainer
      position="top-left"
      visibleToasts={3}
      duration={1500}
      offset={{ left: 20, top: 50, bottom: 58 }}
      closeButton={false}
      toastOptions={{
        classNames: {
          toast: 'toast',
          title: 'title',
          description: 'description',
          actionButton: 'action-button',
          cancelButton: 'cancel-button',
          closeButton: 'close-button',
        },
        // style: { borderColor: 'grey', },
      }}
      // icons={{
      //     success: <SuccessIcon />,
      //     info: <InfoIcon />,
      //     warning: <WarningIcon />,
      //     error: <ErrorIcon />,
      //     loading: <LoadingIcon />,
      //   }}
    />
  );
};

export default Sonner;
