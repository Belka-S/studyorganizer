import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  list-style: none;

  & .el_bar-up {
    transition: transform 250ms;
    transform: translateY(calc(124px - 100vh));
  }
  & .el_bar-down {
    transition: transform 250ms;
    transform: translateY(0px);
  }
`;
