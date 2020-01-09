import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  transform: translateX(${({ isVisible }) => (isVisible ? '0%' : '100%')});
  transition: transform 0.2s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({
  pageContext, isVisible, addItem, handleClose
}) => (
  <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
    <Heading big>
      Create new
      {' '}
      {pageContext}
    </Heading>
    <Formik
      initialValues={{
        title: '', content: '', articleUrl: '', twitterName: '', created: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        addItem(pageContext, values);
        handleClose();

        setSubmitting(false);
      }}
    >
      {({
        values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,
      }) => (
        <StyledForm autoComplete="off">
          <StyledInput
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          { pageContext === 'twitters'
          && (
          <StyledInput
            placeholder="twitter name eg. hello_roman"
            type="text"
            name="twitterName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.twitterName}
          />
          ) }
          { pageContext === 'articles'
          && (
          <StyledInput
            placeholder="content"
            type="text"
            name="articleUrl"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.articleUrl}
          />
          ) }
          <StyledTextArea
            placeholder="link"
            type="text"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button
            activecolor={pageContext}
            type="submit"
            disabled={isSubmitting}
          >
            Add Note
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withContext(NewItemBar));
