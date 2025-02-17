import styled, { css } from 'styled-components';

import { visuallyHidden } from 'styles/utils/hidden.styled';
import { themes } from 'styles/themes';

const { colors, shadows, indents } = themes;

// li

const baseLiStyle = css`
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 30fr 15fr 1fr 1fr 1fr 4fr;
  grid-template-areas: '. title title . . . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${colors.borderLight};
`;

export const LiFolder = styled.li`
  ${baseLiStyle}
  counter-reset: subsection;
  line-height: 2;

  & h2 {
    justify-self: center;
    grid-area: title;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    /* text-transform: uppercase; */

    &::before {
      counter-increment: section;
      content: counter(section) '. ';
      /* text-transform: capitalize; */
    }
  }
`;

export const LiFile = styled.li`
  ${baseLiStyle}

  background-color: ${({ $active }) => $active && colors.backgroundHoverd};
  transition: box-shadow 250ms, border-color 250ms background-color 250ms;

  &:hover {
    border-color: ${colors.border};
    box-shadow: ${shadows.backdrop};
    background-color: ${colors.white};
    border-radius: ${indents.xxs};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`;

const baseContentStyle = css`
  font-size: 16px;
  transition: color 250ms;

  &:hover {
    color: ${colors.hovered};
  }
`;

export const FileName = styled.button`
  ${baseContentStyle}

  border: none;
  background-color: transparent;
  color: ${colors.black};
  font-weight: 500;
`;

export const FileLink = styled.a`
  ${baseContentStyle}

  color: ${colors.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) ' ';
    font-size: 14px;
    font-weight: 700;
    color: ${colors.black};
  }
`;

// input label

const baseLabelStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${visuallyHidden}
  }
`;

export const LabelFavorite = styled.div`
  ${baseLabelStyle}
  position: relative;
  padding-bottom: 2px;
  padding-right: 2px;

  & svg {
    transition: stroke 250ms;
    stroke-width: 1px;
    color: ${({ $hovered }) => ($hovered ? colors.yellow : 'transparent')};
    stroke: ${({ $hovered }) => ($hovered ? 'transparent' : colors.border)};
  }
  &:hover svg {
    stroke: ${colors.placeholder};
  }
`;

// date, edit, trash, download buttons

const baseBtnStyle = css`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms;

  &,
  & svg {
    transition: color 250ms;
    color: ${colors.border};
  }
  &:hover,
  &:hover svg {
    color: ${colors.placeholder};
  }
`;

export const CountSpan = styled.span`
  ${baseBtnStyle}

  justify-self: right;
  font-size: 14px;
`;

export const DateBtn = styled.button`
  ${baseBtnStyle}

  font-size: 14px;
`;

export const CopyBtn = styled.button`
  ${baseBtnStyle}

  opacity: 0;
`;

export const DownloadBtn = styled.button`
  ${baseBtnStyle}

  opacity: 0;
`;

export const TrashBtn = styled.button`
  ${baseBtnStyle}

  opacity: ${({ $hovered }) => ($hovered ? 1 : 0)};
`;
