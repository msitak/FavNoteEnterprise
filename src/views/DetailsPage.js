import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes/index';
import withContext from 'hoc/withContext';

class DetailsPage extends Component {
  state = {
    pageContext: 'notes',
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.twitter:
        this.setState({ pageContext: 'twitters' });
        break;
      case routes.note:
        this.setState({ pageContext: 'notes' });
        break;
      case routes.article:
        this.setState({ pageContext: 'articles' });
        break;
      default:
        console.log('something went wrong with matching paths.');
    }
  }

  render() {
    const { pageContext } = this.state;

    return (
      <DetailsTemplate pageContext={pageContext} />
    );
  }
}

export default withContext(DetailsPage);
