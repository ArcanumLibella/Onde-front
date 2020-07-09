import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Button, DisplayTitle, MiniTag, Paragraph, DropButton } from '../';
import { ShareCircleF } from '../../assets';
import { formatDate } from '../../utilities';

const HeaderInitiatives = props => {
  const { initiativeData, initiativeTags, theme } = props;
  const [initiativeAuthor, setInitiativeAuthor] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const {
    id,
    name: initiativeTitle,
    description,
    dateCreated,
    User
  } = initiativeData;

  useEffect(() => {
    !isLoaded &&
      axios
        .get(`https://onde-api.frb.io/api/users/${User}`)
        .then(result => {
          setIsLoaded(true);
          setInitiativeAuthor(result);
        })
        .catch(error => {
          setIsLoaded(true);
        });
  });

  const getSurname = () => {
    if (initiativeAuthor) {
      const {
        data: { surname, name }
      } = initiativeAuthor;

      const authorName = surname ? surname : name;

      return (
        <Paragraph>
          <em>{authorName}</em> a lancé cette initiative le
        </Paragraph>
      );
    } else return <Paragraph>Cette initiative a été lancée le</Paragraph>;
  };

  return (
    <>
      <div className="initiativeDetails__header">
        <MiniTag tags={initiativeTags} />
        <div className="initiativeDetails__icons">
          <ShareCircleF width="34" fill={theme.midnight} />
          <DropButton width="34" theme={theme} initiativeId={id} />
        </div>
      </div>
      <div className="initiativeDetails__content">
        <DisplayTitle>{initiativeTitle}</DisplayTitle>
        <Paragraph>{description}</Paragraph>
        <div className="initiativeDetails__cta">
          {getSurname()} <time> {formatDate(dateCreated)}</time>
          <Button textCta="Je participe" linkCta={`/initiatives/${id}`} />
        </div>
      </div>
    </>
  );
};

export default HeaderInitiatives;
