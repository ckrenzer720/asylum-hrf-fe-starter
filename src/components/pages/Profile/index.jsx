import { useAuth0 } from '@auth0/auth0-react';
import { React, useState } from 'react';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */

const Profile = () => {
  // Auth0 functionality
  const { isLoading, logout, user } = useAuth0();
  const [name, setName] = useState(user?.name || '');
  const [isEditing, setIsEditing] = useState(false);

  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const saveName = () => {
    setIsEditing(false);
  };

  return (
    <div className='max-w-sm mx-auto mt-10 bg-white rounded-lg shadow-lg p-6 text-center'>
      {/* User's profile picture */}
      <img src={user.picture} alt={user.name} className='w-24 h-24 rounded-full mx-auto mb-4' />
      {/* User's name */}
      {isEditing ? (
        <div className='mb-4'>
          <input type='text' value={name} onChange={handleNameChange} className='border rounded px-2 py-1 w-full' />
          <button className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition' onClick={saveName}>
            Save
          </button>
        </div>
      ) : (
        <>
          <h2 className='text-2xl font-semibold mb-2'>{name}</h2>
          <button className='mb-4 px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition' onClick={() => setIsEditing(true)}>
            Edit Username
          </button>
        </>
      )}
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
