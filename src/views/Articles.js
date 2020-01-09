import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <GridTemplate pageContext="articles">
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
const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
