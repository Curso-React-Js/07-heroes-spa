import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

import './styles.css';

import { router } from './router';
import { AuthProvider } from './auth';
import { HeroesApp } from './HeroesApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <RouterProvider router={ router } /> */}
      <BrowserRouter>
        <HeroesApp />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
