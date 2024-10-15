import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import { router } from './router';

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
});

function App() {
  return (
    <React.StrictMode>
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </React.StrictMode>
  );
}

export default App;
