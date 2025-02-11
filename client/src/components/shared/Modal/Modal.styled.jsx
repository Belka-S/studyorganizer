import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, shadows, indents } = themes;
const { s } = indents;
const { white, accent, hovered, backdrop, backgroundHoverd } = colors;

export const Backdrop = styled.div`
  ${({ $bd }) => $bd !== 'none' && 'width: 100vw;'};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  ${({ $bd }) => $bd !== 'transparent' && `background-color: ${backdrop}`};
  ${({ $bd }) => $bd !== 'transparent' && `backdrop-filter: blur(${s})`};

  & .modal {
    position: absolute;
    ${({ $x = 'left: 50%' }) => $x};
    ${({ $y = 'top: 50%' }) => $y};
    ${({ $x, $y }) => !$x && !$y && 'transform: translate(-50%, -50%);'}

    border-radius: ${s};
    background-color: transparent; // transparent;
    box-shadow: ${shadows.back};

    ${({ $bd }) =>
      $bd === 'none' &&
      'transform: translateY(-50%);' +
        'width: calc(50vw - 26px);' +
        ` padding: ${s} 16px;` +
        ` background-color: ${backgroundHoverd};`};

    &:hover,
    :focus {
      & .close-btn {
        transition: color 250ms, opacity 250ms, border-color 250ms,
          background-color 250ms;

        opacity: 1;
      }
    }
  }

  & .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid ${accent};
    border-radius: 50%;
    cursor: pointer;
    color: ${accent};
    background-color: ${white};
    opacity: 0;
    transform: translate(40%, -40%);

    &:hover,
    &:focus {
      color: ${hovered};
      border-color: ${hovered};
      background-color: ${backgroundHoverd};
    }
  }
`;
