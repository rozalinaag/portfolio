import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { router } from './router';

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
});

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    setCursorPosition({
      x: event.clientX - 150,
      y: event.clientY - 150,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <React.StrictMode>
      <MantineProvider theme={theme}>
        <div
          className="shadow"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        />
        <RouterProvider router={router} />
      </MantineProvider>
    </React.StrictMode>
  );
}

export default App;
