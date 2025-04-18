import { useAuth0 } from '@auth0/auth0-react';

/*
 * TODO: Ticket 3:
 * Implement authentication and logging functionality using Auth0
*/

export const LoggingButtons = () => {
  // Auth0 functionality
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const buttonText = isAuthenticated ? 'Log Out' : 'Log In';

  const handleLogging = () => {
    if (isAuthenticated) {
      // Logout functionality here:
      logout({ returnTo: window.location.origin });
    } else {
      // Redirect functionality here:
      loginWithRedirect();
    }
  };

  return (
    <button className='nav-btn  px-4 py-1' onClick={handleLogging}>
      {buttonText}
    </button>
  );
};
