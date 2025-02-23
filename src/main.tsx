import App from '@/App.tsx';
import GlobalStyle from '@/styles/globalStyles.ts';
import theme from '@/theme/theme.ts';
import '@/translations/i18n';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
