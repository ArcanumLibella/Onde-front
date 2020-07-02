import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  DisplayTitle,
  Paragraph,
  Button,
  MiniTag,
  Truncate
} from '../components';
import { DropCircleF } from '../assets';

const InitiativesCard = props => {
  const { theme, initiative } = props;

  const { name, description, likes, tags, id } = initiative;
  console.log('tags minicard', tags);

  return (
    <InitiativesCardStyled className="initiative">
      <Link to={`/initiatives/${id}`}>
        {/* <MiniTag tags={tags} /> */}
        <MiniTag />

        <DisplayTitle>
          <Truncate maxChars="40" trailingCharCount="0">
            {name}
          </Truncate>
        </DisplayTitle>
        <Paragraph fontSize={17}>
          <Truncate maxChars="120" trailingCharCount="0">
            {description}
          </Truncate>
        </Paragraph>
        <div className="like">
          <DropCircleF width={34} fill={theme.blue} />
          <Paragraph fontSize={17}>{likes.length}</Paragraph>
        </div>
      </Link>
      <Button>En savoir plus</Button>
    </InitiativesCardStyled>
  );
};

const InitiativesCardStyled = styled.article`
  margin-bottom: 64px;

  .minitags {
    margin-bottom: 24px;
  }

  h2 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 24px;
  }

  .like {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 24px;

    p {
      margin: 0 8px;
    }
  }
`;

export default InitiativesCard;
