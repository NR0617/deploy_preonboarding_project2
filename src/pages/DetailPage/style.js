import styled from 'styled-components';

export const PageContainer = styled.div`
  margin: 0 5em;

  @media screen and (max-width: 768px) {
    /* margin: 10em 0 0 0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
