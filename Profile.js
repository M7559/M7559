import React from 'react';
import { useParams } from 'react-router-dom';

export const Profile = () => {
  const { username } = useParams();
  return <div>Welcome to {username}'s Profile</div>;
};
