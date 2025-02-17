import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, indents } = themes;

export const Profile = styled.div`
  width: fit-content;
  height: 320px;
  padding: ${indents.l};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: ${indents.s};
  background-color: ${colors.backgroundHoverd};

  & .wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
