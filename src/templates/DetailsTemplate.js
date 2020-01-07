import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const StyledButton = styled(Button)`
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
`;

const DetailsTemplate = ({
  pageType, title, created, content, articleUrl, twitterName
}) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          My best note
        </StyledHeading>
        <StyledParagraph>created - 25/03/2019</StyledParagraph>
      </StyledPageHeader>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet asperiores
        consectetur cumque distinctio dolorum error est fugit id illo ipsa itaque labore magnam
        magni modi, necessitatibus neque nesciunt nobis optio possimus praesentium provident, quam
        quas quia quos sit soluta suscipit tempore tenetur voluptatem? Assumenda blanditiis cum
        delectus dolore ducimus earum error esse ipsa, nulla quasi quos sed sunt velit. Atque,
        deleniti excepturi facilis inventore laboriosam nam natus obcaecati praesentium qui, quia
        quidem, quis recusandae unde. Atque beatae consequuntur cupiditate deleniti, dolore
        doloremque dolorum error fuga id magni modi nihil pariatur perferendis placeat possimus
        quisquam reiciendis, repudiandae vitae! Autem dolores minima odit officiis unde? Eaque eum
        fuga ipsam iusto, minus molestias necessitatibus nulla possimus quae quasi quia quo rem
        reprehenderit tenetur voluptates. Distinctio ducimus ea esse harum nobis, obcaecati
        perferendis tenetur veritatis. At doloribus omnis quisquam repellendus voluptate? Accusamus
        animi consequuntur culpa inventore laborum quo repellat reprehenderit sunt suscipit.
        Aliquid, amet consequatur consequuntur culpa debitis delectus doloribus earum eius error
        esse ex expedita fugit hic in ipsa ipsam laborum magnam molestiae mollitia necessitatibus
        nemo non numquam odio qui rem sed tenetur veniam. Beatae deserunt ducimus eaque est ex,
        facere harum iusto maiores nesciunt, officiis qui repellendus rerum saepe sint tempora.
      </Paragraph>
      {pageType === 'articles' && <StyledLink href="https://reactjs.org/">Open article</StyledLink>}
      {pageType === 'twitters' && (
        <StyledImage alt={title} src="https://avatars.io/twitter/dan_abramov" />
      )}
      <Button as={Link} to={`/${pageType}`} activecolor={pageType}>
        save / close
      </Button>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default DetailsTemplate;
