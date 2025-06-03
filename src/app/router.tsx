import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Projects from '../pages/Home/Projects/Projects';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/projects',
    element: <Projects />,
  }
]);
