import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;

  @media screen and (min-width: 991px) {
    flex-flow: row wrap;
    align-items: stretch;
    justify-content: space-between;
  }
`;
