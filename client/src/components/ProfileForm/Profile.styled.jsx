import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, indents } = themes;

export const Profile = styled.div`
  width: 300px;
  height: 400px;
  padding: ${indents.l};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: ${indents.m};
  background-color: ${colors.backgroundHoverd};
`;
