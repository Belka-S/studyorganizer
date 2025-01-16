import styled from 'styled-components';

export const GridDiv = styled.div`
  width: ${({ $w }) => $w};
  height: ${({ $h }) => $h};
  margin: ${({ $m = '0' }) => $m};
  padding: ${({ $p = '0' }) => $p};
  position: ${({ $pos = 'relative' }) => $pos};
  ${({ $side = 'left' }) => `${$side}: 0`};
  ${({ $high = 'top' }) => `${$high}: 0`};

  display: grid;
  align-items: ${({ $ai }) => $ai};
  justify-items: ${({ $jc }) => $jc};

  grid-row-gap: ${({ $rg = '10px' }) => $rg};
  grid-column-gap: ${({ $cg = '20px' }) => $cg};

  grid-template-columns: ${({ $gtc }) => $gtc};

  & .hidden {
    opacity: 0;
    transition: opacity 150ms;
    &:hover {
      opacity: 1;
    }
    & button {
      transition: color 750ms, border-color 750ms, background-color 750ms;
    }
  }
`;
