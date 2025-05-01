import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './Rename';
import { AppProvider } from './app-provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
