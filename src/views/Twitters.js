import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(({
      id, title, content, created, twitterName,
    }) => (
      <Card
        key={id}
        id={id}
        title={title}
        content={content}
        created={created}
        twitterName={twitterName}
        cardType="twitters"
      />
    ))}
  </GridTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterName: PropTypes.string.isRequired,
  })),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
