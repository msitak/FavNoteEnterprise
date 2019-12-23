import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Paragraph from './Paragraph';

export default {
  component: Paragraph,
  title: 'Paragraph',
  decorators: [withKnobs],
};

export const Regular = () => {
  const label = 'Text';
  const defaultValue = 'Hello World';
  const groupId = 'GROUP-ID1';

  const value = text(label, defaultValue, groupId);

  return <Paragraph>{value}</Paragraph>;
};
