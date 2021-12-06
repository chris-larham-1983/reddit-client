import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
  const { name } = props;

  return (
    <img
      src={`https://avatars.dicebear.com/api/bottts/${name}.svg`}
      alt={`${name} profile`}
      className="avatar-profile-image"
    />
  );
};

export default Avatar;
