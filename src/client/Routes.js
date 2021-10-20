import React from 'react';

import App from './App';
import AuthPage from './pages/AuthPage';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import NewBlogPage from './pages/NewBlogPage';
import SavedBlogPage from './pages/SavedBlogPage';
import UpdateBlogPage from './pages/UpdateBlogPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...AuthPage,
        path: '/signin',
      },
      {
        ...BlogPage,
        path: '/blogs/:id/:slug',
      },
      {
        ...SavedBlogPage,
        path: '/saved/:id',
      },
      {
        ...NewBlogPage,
        path: '/newBlog',
      },
      {
        ...UpdateBlogPage,
        path: '/updateBlog/:id/:slug',
      },
    ],
  },
];
