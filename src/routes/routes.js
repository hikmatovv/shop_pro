import React from 'react';
import { Navigate } from 'react-router-dom';
import Users from '../views/Users/List';
import Home from '../components/Home';
import Kor from '../components/Kor';
import Fovorute from "../components/Fovorute"

export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: '/fovourite', element: <Fovorute /> },
      { path: '/kor', element: <Kor /> },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
