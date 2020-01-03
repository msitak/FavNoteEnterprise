import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';

const notes = [
  {
    id: 1,
    title: 'Wake me up when Vue ends',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    id: 2,
    title: 'Como es An Gular?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    id: 3,
    title: 'Du bist Reactish',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
  },
  {
    id: 4,
    title: 'Reactuj się kto moze!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
  },
];

const Notes = () => (
  <GridTemplate pageType="notes">
    {notes.map(({
      id, title, content, created,
    }) => (
      <Card
        key={id}
        id={id}
        title={title}
        content={content}
        created={created}
        cardType="notes"
      />
    ))}
  </GridTemplate>
);

GridTemplate.propTypes = {
  pageType: PropTypes.oneOf(['articles', 'twitters', 'notes']),
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};

export default Notes;
