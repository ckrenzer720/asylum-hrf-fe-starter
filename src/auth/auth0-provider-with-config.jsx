import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

export const Auth0ProviderWithConfig = ({ children }) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

  console.log('Auth0 Domain:', domain);
  console.log('Auth0 Client ID:', clientId);

  const onRedirectCallback = appState => {
    console.log('Redirect Callback AppState:', appState);
    navigate(appState?.returnTo || '/');
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
