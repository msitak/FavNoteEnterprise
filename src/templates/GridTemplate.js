import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
`;

const StyledWrapper = styled.div`
  padding: 25px 100px 25px 40px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  text-transform: capitalize;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const GridTemplate = ({ children, pageType, context }) => (
  <UserPageTemplate pageType={pageType} context={context}>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="search" />
        <StyledHeading big as="h1">
          {pageType}
        </StyledHeading>
        <StyledParagraph>
          6
          {` ${pageType}`}
        </StyledParagraph>
      </StyledPageHeader>
      <StyledGridWrapper>{children}</StyledGridWrapper>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf.isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};

export default withContext(GridTemplate);
