'use client';

import { useAuth0 } from '@auth0/auth0-react';

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <div className="profile-info">
        {user?.picture && (
          <img 
            src={user.picture} 
            alt={user.name} 
            className="profile-picture"
          />
        )}
        <h3>{user?.name}</h3>
        <p>{user?.email}</p>
      </div>
    </div>
  );
} 