import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'

import ErrorPage from './ErrorPage.jsx'
import AboutMe from './aboutMe.jsx'
import ResumePage from './ResumePage.jsx'
import ProjectsPage from './ProjectsPage.jsx'
import ContactPage from './ContactPage.jsx'
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
])
    

ReactDom.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
