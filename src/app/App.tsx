import { useState } from 'react';
import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
});

function App() {
  return <MantineProvider theme={theme}>hffh</MantineProvider>;
}

export default App;
