import React from 'react';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';

const UserPageTemplate = ({ children, pageContext }) => (
  <>
    <Sidebar pageContext={pageContext} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPageTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(UserPageTemplate);
