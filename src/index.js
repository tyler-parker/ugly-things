import { ColorModeScript } from '@chakra-ui/react';
import { ThemeProvider } from '@chakra-ui/react'
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {UglyThingsContext} from './context/UglyThingsContext'

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
      <UglyThingsContext>
        <App />
      </UglyThingsContext>
  </StrictMode>,
  document.getElementById('root')
);

