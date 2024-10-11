import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import Home from '../pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import NotFound from '../pages/NotFound/NotFound';

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

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
