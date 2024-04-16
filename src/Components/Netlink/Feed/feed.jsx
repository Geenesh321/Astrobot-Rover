import React from 'react';
import './feed.scss';

const Feed = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null

  return (
    <div className="feed-container">
      <div className="identity-module">
        {currentUser?
        <img alt="Logo-Astrobot" src={'http://127.0.0.1:8000'+currentUser.profile} className='profile-picture' />
        :
        <img alt="Logo-Astrobot" src={require("../../../Assets/Netlink/373647746_1401147563782948_9041879153840682067_n.jpg")} className='profile-picture' />  
      }
        <div className="identity-info">
          <div className="name">{currentUser?currentUser.full_name:'Geenesh Acharya'}</div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
