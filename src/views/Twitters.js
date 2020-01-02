import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';

const twitters = [
  {
    id: 1,
    title: 'Hello Roman',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'hello_roman',
  },
  {
    id: 2,
    title: 'Redux guy',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'dan_abramov',
  },
  {
    id: 3,
    title: 'React router stuff',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
    twitterName: 'mjackson',
  },
  {
    id: 4,
    title: 'Super animacje!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
    twitterName: 'sarah_edo',
  },
];

const Twitters = () => (
  <UserPageTemplate pageType="twitter">
    {twitters.map(({ id, title, content, created, twitterName }) => (
      <Card
        key={id}
        title={title}
        content={content}
        created={created}
        twitterName={twitterName}
        cardType="twitter"
      />
    ))}
  </UserPageTemplate>
);

UserPageTemplate.propTypes = {
  pageType: PropTypes.oneOf(['article', 'twitter', 'note']),
};

UserPageTemplate.defaultProps = {
  pageType: 'note',
};

export default Twitters;
