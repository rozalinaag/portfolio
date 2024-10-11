import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import Home from '../pages/Home/Home';

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Home />
    </MantineProvider>
  );
}

export default App;
