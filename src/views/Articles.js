import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map(({
      id, title, content, articleUrl, created,
    }) => (
      <Card
        key={id}
        id={id}
        title={title}
        articleUrl={articleUrl}
        created={created}
        cardType="articles"
        content={content}
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

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
