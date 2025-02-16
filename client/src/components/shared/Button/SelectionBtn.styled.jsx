import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors } = themes;

export const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 8px;

  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;

  border: none;
  border-radius: 0.375rem;

  background-color: ${colors.backdrop};
  color: ${colors.white};
  transition: opacity 250ms;

  opacity: ${({ $selection }) => ($selection ? 1 : 0)};
  pointer-events: ${({ $selection }) => ($selection ? 'all' : 'none')};
  transform: ${({ $x, $y }) => `translate(${$x}px, ${$y}px)`};

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid ${colors.backdrop};
  }
`;
