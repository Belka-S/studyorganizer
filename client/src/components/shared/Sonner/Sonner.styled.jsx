import styled from 'styled-components';
import { Toaster } from 'sonner';

import { themes } from 'styles/themes';

const { colors } = themes;

export const ToastContainer = styled(Toaster)`
  & .toast {
    width: fit-content !important;
    & .close-button {
      opacity: 0;
      transition: opacity 250ms;
    }
    &:hover,
    :focus {
      & .close-button {
        opacity: 1;
      }
    }
  }

  & .title {
    font-size: 16px;
  }

  & .description {
  }

  & .action-button {
    padding: 15px !important;
    font-size: 16px !important;
    font-weight: 600;
  }

  & .cancel-button {
    padding: 15px !important;
    font-size: 16px !important;
    font-weight: 600;
  }

  /* Info styles */
  & li[data-type='info'] {
    border-color: ${colors.accent};
    & .close-button {
      border-color: ${colors.accent} !important;
    }
    & svg {
      fill: ${colors.accent};
    }
    & .action-button,
    .cancel-button {
      background-color: ${colors.accent} !important;
    }
  }

  /* Success styles */
  & li[data-type='success'] {
    border-color: ${colors.success};
    & .close-button {
      position: absolute !important;
      right: 0 !important;
      top: 0 !important;
      border-color: ${colors.success} !important;
    }
    & svg {
      fill: ${colors.success};
    }
    & .action-button,
    .cancel-button {
      background-color: ${colors.success} !important;
    }
  }

  /* Error styles */
  & li[data-type='error'] {
    border-color: ${colors.error};
    & .close-button {
      border-color: ${colors.error} !important;
    }
    & svg {
      fill: ${colors.error};
    }
    & .action-button,
    .cancel-button {
      background-color: ${colors.error} !important;
    }
  }
`;
