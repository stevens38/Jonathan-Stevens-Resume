import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'

import ErrorPage from './pages/ErrorPage.jsx'
import AboutMe from './pages/AboutMe.jsx'
import ResumePage from './pages/Resume.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ContactPage from './pages/contact.jsx'
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
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
])
    

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
