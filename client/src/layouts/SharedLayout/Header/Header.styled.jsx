import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, indents, shadows } = themes;

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

export const Nav = styled.nav`
  margin-right: auto;
  display: flex;

  & a {
    padding: 2px 0;

    margin-right: ${indents.s};
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

export const Dropdown = styled.div`
  position: relative;

  &:hover .dropdown-menu {
    opacity: 1;
    pointer-events: all;
    transform: translate(0);
  }

  & .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;

    padding-block: ${indents.xs};
    padding-inline: 0;

    list-style: none;
    border-radius: ${indents.xs};
    background-color: ${colors.white};
    box-shadow: ${shadows.button};
    opacity: 0;
    pointer-events: none;
    transform: translate(-10px, -10px);
    transition: opacity 250ms, transform 150ms;

    & li {
      padding-block: 8px;
      padding-inline: ${indents.m};
      min-width: 140px;

      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: color 100ms, background-color 100ms;
      border-bottom: 1px dotted ${colors.borderLight};

      &:first-of-type {
        border-top: 1px dotted ${colors.borderLight};
      }

      &:hover {
        color: ${colors.white};
        background-color: ${colors.accent} !important;
      }

      &.active {
        background-color: ${colors.backgroundHoverd};
      }
    }
  }
`;

export const TitleBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: color 250ms;
  color: ${colors.accent};
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
