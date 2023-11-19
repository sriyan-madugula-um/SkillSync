import React from 'react';

const AboutMe = ({ user }) => {
  return (
    <div className="profile-pane">
      <img src={user.avatar} alt={`${user.displayName}'s avatar`} />
      <h2>{user.displayName}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default AboutMe;