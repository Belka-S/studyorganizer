import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';

const { colors, shadows, indents } = themes;
const { s } = indents;
const { white, accent, hovered, backdrop, backgroundHoverd } = colors;

// Modal
export const Backdrop = styled.div`
  ${({ $bd }) => $bd !== 'none' && $bd !== 'listening' && 'width: 100vw;'};
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
    background-color: transparent;
    box-shadow: ${shadows.back};

    &:hover,
    :focus {
      & .close-btn {
        transition: color 250ms, opacity 250ms, border-color 250ms,
          background-color 250ms;

        opacity: 1;
      }
    }

    ${({ $bd }) => $bd === 'none' && recordBtn}
    ${({ $bd }) => $bd === 'listening' && recordBtnListening}
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
      border: 1px solid ${hovered};
      background-color: ${backgroundHoverd};
    }
  }
`;

// RecordBtn
const recordBtn = css`
  transform: translateY(-50%);
  width: calc(50vw - 26px);
  padding: ${s} 16px;
  background-color: ${backgroundHoverd};
  border: 1px solid ${backgroundHoverd};
`;

const recordBtnListening = css`
  ${recordBtn}
  border: 1px solid ${hovered};
`;
