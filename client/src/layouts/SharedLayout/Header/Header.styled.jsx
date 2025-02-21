import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, indents } = themes;

export const StyledHeader = styled.header`
  padding: 0 20px;
  height: ${({ $height }) => $height};
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: start;
  z-index: 10;
  background-color: ${colors.background};
`;

export const Img = styled.img`
  min-width: 32px;
`;

export const Nav = styled.nav`
  display: flex;

  & > :nth-child(1) {
    margin-inline: ${indents.s};
  }

  & a {
    padding: 2px 0;

    border-radius: ${indents.xs};
    text-decoration: none;
    white-space: nowrap;
    color: ${colors.black};
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    transition: color 250ms;

    display: flex;
    align-items: baseline;

    & svg {
      margin-bottom: 2px;
      align-self: center;
    }

    &:hover {
      color: ${colors.hovered};
    }

    &.active {
      color: ${colors.accent};
    } /* &:global(.active) { } */
  }
`;

export const TitleBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  transition: color 250ms;
  color: ${colors.accent};
  background-color: transparent;
  white-space: nowrap;

  font-size: 18px;
  font-weight: 700;

  &:hover {
    color: ${colors.hovered};
  }
`;

export const LogoBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  background-color: transparent;
  border-color: transparent;
`;
