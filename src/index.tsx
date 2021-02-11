import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <CSSReset />
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
