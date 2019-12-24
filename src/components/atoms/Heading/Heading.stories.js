import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Atoms/Heading',
  decorators: [withKnobs],
};

export const Bigger = () => {
  const label = 'Text';
  const defaultValue = 'Hello World';
  const groupId = 'GROUP-ID1';

  const value = text(label, defaultValue, groupId);

  return <Heading big>{value}</Heading>;
};

export const Smaller = () => {
  const label = 'Text';
  const defaultValue = 'Hello World';
  const groupId = 'GROUP-ID1';

  const value = text(label, defaultValue, groupId);

  return <Heading>{value}</Heading>;
};
