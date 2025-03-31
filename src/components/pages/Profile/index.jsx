import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Profile = () => {
  // Auth0 functionality
  const { isLoading, logout, user } = useAuth0();

  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  return (
    <div className='max-w-sm mx-auto mt-10 bg-white rounded-lg shadow-lg p-6 text-center'>
      {/* User's profile picture */}
      <img src={user.picture} alt={user.name} className='w-24 h-24 rounded-full mx-auto mb-4' />
      {/* User's name */}
      <h2 className='text-2xl font-semibold mb-2'>{user.name}</h2>
      {/* User's email */}
      <p className='text-gray-600'>{user.email}</p>
      {/* Logout button */}
      <button
        className='mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
