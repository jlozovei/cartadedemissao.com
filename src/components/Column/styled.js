import styled from 'styled-components';

export const StyledColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
  width: 100%;
  padding: 1rem 0;

  @media screen and (min-width: 991px) {
    flex-basis: 50%;
    width: 50%;
    padding: 1rem;
  }
`;
