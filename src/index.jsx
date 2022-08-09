import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import theme from './styles/theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
   <StrictMode>
      <ChakraProvider theme={theme}>
         <ColorModeScript
            initialColorMode={theme.configTheme.initialColorMode}
         />
         <App />
      </ChakraProvider>
   </StrictMode>
);
