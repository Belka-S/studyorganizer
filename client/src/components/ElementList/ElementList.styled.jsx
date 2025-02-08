import styled from 'styled-components';

import { themes } from 'styles/themes';

export const List = styled.ul`
  width: 100%;
  list-style: none;
`;

export const BarWrap = styled.div`
  & .speak-btn {
    position: fixed;
    bottom: ${themes.indents.s};
    left: calc(45% + 10px);
    /* transform: translateX(calc(-50%)); */
  }

  & .hidden {
    opacity: 0;
    transition: opacity 150ms;
    &:hover {
      opacity: 1;
    }
    & button {
      transition: color 750ms, border-color 750ms, background-color 750ms;
    }
  }
`;
