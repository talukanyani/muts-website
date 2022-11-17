import React from 'react';

import Home from './pages/Home';
import Apps from './pages/Apps';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "apps",
        element: <Apps />,
    },
    {
        path: "terms",
        element: <Terms />,
    },
    {
        path: "privacy",
        element: <Privacy />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]