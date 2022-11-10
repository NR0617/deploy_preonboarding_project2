import * as Styled from './style';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const DetailPageComponent = ({ detailPageData }) => {
  const markdown = detailPageData.body;

  return (
    <>
      <Styled.ItemContainer>
        <Styled.UserAvaterImg src={`${detailPageData.user.avatar_url}`} alt="avatar" />
        <Styled.ItemDetails>
          <Styled.IssueContainerHeader>
            <>#{detailPageData.number}</>
            <Styled.IssueTitle>{detailPageData.title}</Styled.IssueTitle>
          </Styled.IssueContainerHeader>
          <Styled.IssueListUserName>{detailPageData.user.login}</Styled.IssueListUserName>
          <Styled.CreatedAt>{detailPageData.Created_at}</Styled.CreatedAt>
        </Styled.ItemDetails>
        <Styled.CommentCounter>
          <p>코멘트:</p>
          <p>{detailPageData.comments}</p>
        </Styled.CommentCounter>
      </Styled.ItemContainer>
      <Styled.MarkdownContainer>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          children={markdown}
          style={{ margin: '1px 5px' }}
          components={{
            img: ({ node, ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt="" />,
          }}
        />
      </Styled.MarkdownContainer>
    </>
  );
};

export default DetailPageComponent;
