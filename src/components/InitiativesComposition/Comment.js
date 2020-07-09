import React from 'react';
import styled from 'styled-components';

import { Paragraph, TextLink } from '..';
import { HeartO } from '../../assets';

const Comment = props => {
  const { theme, author, comment, likeNumber } = props;

  return (
    <CommentStyled className="comment">
      <Paragraph fontWeight={600}>{author}</Paragraph>
      <Paragraph fontWeight={'normal'}>{comment}</Paragraph>
      <div className="comment__footer">
        <div className="comment__like">
          <HeartO width={24} fill={theme.black} />
          <Paragraph fontWeight={'normal'}>{likeNumber}</Paragraph>
        </div>
        <TextLink>Signaler</TextLink>
      </div>
    </CommentStyled>
  );
};

const CommentStyled = styled.div`
  .comment {
    margin-bottom: 24px;

    p {
      margin-bottom: 8px;
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      padding-top: 4px;
    }

    &__like {
      display: flex;

      p {
        margin-left: 8px;
      }
    }
  }
`;

export default Comment;
