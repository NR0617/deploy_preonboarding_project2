import styled from 'styled-components';

//IssueList Components
export const ItemContainer = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
`;
export const ItemDetails = styled.div`
  flex-basis: 70%;
`;

export const IssueContainerHeader = styled.div`
  display: flex;
`;
export const IssueTitle = styled.div`
  margin-left: 1em;
  font-weight: bolder;
  margin-bottom: 1.2em;
`;
export const IssueListUserName = styled.div`
  color: purple;
`;

export const CreatedAt = styled.div``;
export const CommentCounter = styled.div`
  p {
    margin: 0;
  }
  flex-basis: 15%;
  text-align: end;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AdImg = styled.img`
  width: 12em;
  height: 5em;
  margin: auto 0;
`;

export const AdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

//DetailPage Components
export const UserAvaterImg = styled.img`
  width: 4em;
  height: 4em;
  margin: auto 0;
  @media screen and (max-width: 768px) {
    width: 3em;
    height: 3em;
  }
`;
export const MarkdownContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    height: fit-content;

    pre {
      white-space: pre-wrap;
    }
  }
`;
// ErrorPage Components
export const ErrorComponent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 13em;
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5em auto;
  height: 30%;
  width: 30%;
`;
