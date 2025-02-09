import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';

const { background, backgroundHoverd } = themes.colors;

const baseAudioStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 54px;
  border-radius: 30px;
`;

// https://chromium.googlesource.com/chromium/blink/+/72fef91ac1ef679207f51def8133b336a6f6588f/Source/core/css/mediaControls.css?autodive=0%2F%2F%2F
export const Audio = styled.audio`
  ${baseAudioStyle}

  &::-webkit-media-controls {
    display: flex;
    justify-content: center;
    background-color: ${background};
  }

  &::-webkit-media-controls-panel {
    background-color: ${backgroundHoverd};
  }
`;
