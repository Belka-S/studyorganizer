import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors } = themes;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg {
    stroke: ${colors.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: ${colors.placeholder};
    /* stroke: ${({ $colored }) => $colored && colors.yellow}; */

    @keyframes refresh-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
    animation: refresh-spin infinite 12s linear;
  }
`;
