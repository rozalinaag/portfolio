import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Projects from '../pages/Projects/Projects';
import Project from '../pages/Projects/Project/Project';
import Contacts from '../pages/Contacts/Contacts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/projects/:projectId',
    element: <Project />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
  },
]);
