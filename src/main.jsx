import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { ProvideAppContext } from './context/AppContext.jsx';
import { Auth0ProviderWithConfig } from './auth/auth0-provider-with-config.jsx';
import { BrowserRouter } from 'react-router-dom';

const AUTH_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const AUTH_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth0ProviderWithConfig>
      <ProvideAppContext>
        <App />
      </ProvideAppContext>
    </Auth0ProviderWithConfig>
  </BrowserRouter>
);
