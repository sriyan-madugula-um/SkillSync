import React from 'react';
import Chat from './ChatElement';

const ChatElement = () => {
  const username = 'John'; // Replace with the actual username

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <Chat username={username} />
    </div>
  );
};

export default ChatElement;