import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/theme';
import GlobalStyle from '../src/styles/globalStyles';
import React from 'react';
import '@/translations/i18n';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
