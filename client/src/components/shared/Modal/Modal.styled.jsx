import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, shadows, indents } = themes;
const { s, m } = indents;
const { backdrop, background } = colors;

export const Backdrop = styled.div`
  ${({ $bd }) => $bd !== 'none' && 'width: 100vw;'};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  ${({ $bd }) => $bd !== 'transparent' && `background-color: ${backdrop}`};
  ${({ $bd }) => $bd !== 'transparent' && `backdrop-filter: blur(${s})`};

  & > div {
    position: absolute;
    ${({ $x = 'left: 50%' }) => $x};
    ${({ $y = 'top: 50%' }) => $y};
    ${({ $x, $y }) => !$x && !$y && 'transform: translate(-50%, -50%);'}

    border-radius: ${m};
    background-color: transparent; // transparent;
    box-shadow: ${shadows.back};

    ${({ $bd }) =>
      $bd === 'none' &&
      'width: calc(50vw - 58px);' +
        ` padding: ${s} 16px;` +
        ` border-radius: ${s};` +
        ` background-color: ${background};`};
  }
`;
