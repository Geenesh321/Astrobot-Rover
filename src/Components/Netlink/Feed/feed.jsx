import React from 'react';
import './feed.scss';

const Feed = () => {
  return (
    <div className="feed-container">
      <div className="identity-module">
        <img alt="Logo-Astrobot" src={require("/Astrobot-Rover/Frontend/src/Assets/Netlink/373647746_1401147563782948_9041879153840682067_n.jpg")} className='profile-picture' />
        <div className="identity-info">
          <div className="name">Geenesh Acharya</div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
