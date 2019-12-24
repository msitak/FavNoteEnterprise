import React from 'react';
import StoryRouter from 'storybook-react-router';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

export default {
  component: Sidebar,
  title: 'Organisms/Sidebar',
  decorators: [StoryRouter()],
};

export const Regular = () => <Sidebar />;
