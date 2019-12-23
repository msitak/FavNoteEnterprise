import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(require.context('../src/components', true, /\.stories\.js$/), module);
