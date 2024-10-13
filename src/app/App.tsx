import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import { router } from './router';
import Layout from './Layout/Layout';

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
});

function App() {
  return (
    <React.StrictMode>
      <MantineProvider theme={theme}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </MantineProvider>
    </React.StrictMode>
  );
}

export default App;
