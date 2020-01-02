import React from 'react';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

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

const UserPageTemplate = ({ children, pageType }) => (
  <StyledWrapper>
    <Sidebar pageType={pageType} />
    <StyledPageHeader>
      <Input search placeholder="search" />
      <StyledHeading big as="h1">
        {pageType}s
      </StyledHeading>
      <StyledParagraph>6{pageType}s</StyledParagraph>
    </StyledPageHeader>
    <StyledGridWrapper>{children}</StyledGridWrapper>
  </StyledWrapper>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.element.isRequired,
};

export default UserPageTemplate;
