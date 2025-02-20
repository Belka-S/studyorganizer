import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, indents, shadows } = themes;

export const Dropdown = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  & .drop-button {
    width: 22px;
    height: 22px;
    padding-bottom: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${colors.background};
    border: none;
    border-radius: 50%;
    cursor: none;
    transform: rotate(90deg);
    transition: transform 250ms, background-color 250ms;

    &:hover {
      background-color: ${colors.borderLight};
      transform: rotate(180deg);
    }
  }

  & .drop-menu {
    position: absolute;
    top: 100%;
    left: calc(100% - 12px);

    padding-block: ${indents.xs};
    padding-inline: 0;

    list-style: none;
    border-radius: ${indents.xs};
    background-color: ${colors.white};
    box-shadow: ${shadows.button};
    transition: opacity 250ms, transform 150ms;

    opacity: ${({ $menu }) => (!$menu ? 0 : 1)};
    pointer-events: ${({ $menu }) => (!$menu ? 'none' : 'all')};
    transform: ${({ $menu }) => `translate(${!$menu ? '-5px, -10px' : '0'})`};

    & .menu-item,
    .active {
      padding-block: 8px;
      padding-inline: ${indents.m};
      min-width: 110px;

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

    /* & .drop-button:hover + .drop-menu {
    opacity: 1;
    pointer-events: all;
    transform: translate(0);
  } */
  }
`;
