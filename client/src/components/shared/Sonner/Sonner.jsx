import { ToastContainer } from './Sonner.styled';

const Sonner = () => {
  return (
    <ToastContainer
      position="top-center"
      visibleToasts={3}
      duration={1000}
      offset={50}
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
