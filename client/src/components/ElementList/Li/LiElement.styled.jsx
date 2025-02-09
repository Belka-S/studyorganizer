import styled, { css } from 'styled-components';

import { visuallyHidden } from 'styles/utils/hidden.styled';
import { themes } from 'styles/themes';

const { colors, shadows, indents } = themes;

// li
const baseLiStyle = css`
  margin-bottom: 7px;
  padding-block: ${indents.xs};

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;
  column-gap: 4px;

  border: 1px solid transparent;
  background-color: ${({ licolor }) => licolor};
  border-radius: ${indents.xs};
  font-size: 22px;

  &:last-of-type {
    margin-bottom: ${indents.s};
  }
`;

export const Li = styled.li`
  ${baseLiStyle}

  transition: box-shadow 250ms, border-color 250ms;

  &#active-element {
    border-color: ${colors.border};
    background-color: ${colors.background};
    box-shadow: ${shadows.back};

    &:hover {
      border-color: ${colors.accent};
    }
    & div button {
      transition: color 250ms;
      color: ${colors.smokeBlack};
      &:hover {
        color: ${colors.hovered};
      }
    }
  }

  & div button {
    transition: color 250ms;
    &:hover {
      color: ${colors.hovered};
    }
  }

  &:hover {
    border-color: ${colors.accent};
    box-shadow: ${shadows.back};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`;

// input label
const baseLabelStyle = css`
  min-height: 19px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${visuallyHidden}
  }
`;

export const LabelFavorite = styled.label`
  ${baseLabelStyle}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({ $hovered }) => ($hovered ? colors.yellow : 'transparent')};
    stroke: ${({ $hovered }) => ($hovered ? colors.yellow : colors.border)};
  }
  &:hover svg {
    stroke: ${colors.placeholder};
  }
`;

export const LabelChecked = styled.label`
  ${baseLabelStyle}
  opacity: ${({ $hovered }) => ($hovered ? 1 : 0)};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    border: 2px solid ${colors.border};
    border-radius: 50%;
    color: ${({ $hovered }) => ($hovered ? colors.border : 'transparent')};
  }
  &:hover svg {
    border-color: ${colors.placeholder};
    color: ${({ $hovered }) => ($hovered ? colors.placeholder : 'transparent')};
  }
`;

// edit, trash buttons
export const baseBtnStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms color 250ms;
  color: ${colors.black};

  & svg {
    transition: color 250ms;
    color: ${colors.border};
  }
  &:hover,
  &:hover svg {
    color: ${colors.placeholder};
  }
`;

export const TrashBtn = styled.button`
  ${baseBtnStyles}

  opacity: ${({ $hovered }) => ($hovered ? 1 : 0)};
`;

export const EditBtn = styled.button`
  ${baseBtnStyles}

  opacity: 0;
`;
