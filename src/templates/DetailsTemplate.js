import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DetailsTemplate = () => (
  <div>
    <h1>Note</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aperiam, earum eveniet
      laboriosam magnam maiores provident quasi quisquam unde!
    </p>
    <Link to="/">Go back</Link>
  </div>
);

export default DetailsTemplate;
