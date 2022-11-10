import styled from 'styled-components';

export const PageContainer = styled.div`
  margin: 0 5em;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1em;
  }
`;
