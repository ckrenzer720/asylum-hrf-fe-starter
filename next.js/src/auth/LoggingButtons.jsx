'use client';

import { useAuth0 } from '@auth0/auth0-react';

export function LoggingButtons() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <button
          onClick={() => loginWithRedirect()}
          className="nav-btn"
        >
          Log In
        </button>
      ) : (
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="nav-btn"
        >
          Log Out
        </button>
      )}
    </div>
  );
} 