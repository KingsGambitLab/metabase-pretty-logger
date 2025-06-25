import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import NotFoundPage from 'pages/NotFoundPage';
import PrettyLogsPage from 'pages/PrettyLogsPage';

const AppRoutes = createBrowserRouter(
  [
    {
      element: <PrettyLogsPage />,
      errorElement: <NotFoundPage />,
      path: '/pretty/:serviceName/:logId',
    },
    {
      path: '/',
      element: <NotFoundPage />,
      errorElement: <NotFoundPage />,
    },
  ],
  {
    basename: process.env.REACT_APP_FRONTEND_BASE_PATH,
  },
);

export default AppRoutes;
