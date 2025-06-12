'use client';

import { Auth0Provider } from '@auth0/auth0-react';

export function Providers({ children }) {
  // Add console log to check if provider is rendering
  console.log('Auth0 Provider rendering');
  
  // Check if environment variables are available
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;

  if (!domain || !clientId) {
    console.error('Auth0 environment variables are missing');
    // Return children without Auth0 provider if env vars are missing
    return <>{children}</>;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : ''
      }}
    >
      {children}
    </Auth0Provider>
  );
} 