import { useAuth0 } from '@auth0/auth0-react';
import { React, useState } from 'react';

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
      {/* Profile Picture */}
      <img src={user.picture} alt={user.name} className='w-24 h-24 rounded-full mx-auto mb-4' />
      {/* Username */}
      {isEditing ? (
        <div className='mb-4'>
          <input type='text' value={name} onChange={handleNameChange} className='border rounded px-2 py-1 w-full' />
          <button className='mt-2 px-4 py-2 bg-red-800/75 text-white rounded-lg hover:bg-red-600 transition' onClick={saveName}>
            Save
          </button>
        </div>
      ) : (
        <>
          <h2 className='text-2xl font-semibold mb-2'>{name}</h2>
          <button className='mb-4 px-4 py-2 bg-neutral-300 text-black rounded-lg hover:bg-neutral-200 transition' onClick={() => setIsEditing(true)}>
            Edit Username
          </button>
        </>
      )}
      {/* Email */}
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
