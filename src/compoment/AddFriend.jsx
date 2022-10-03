import React, { useState } from 'react'
import Find from "../img/find3.png";
import UserChat from './UserChat';

const AddFriend = ({ open, onClose }) => {

  if (!open) return null;

  return (
    <div className="formContainer2" >
      <div className="formWrapper">
        <span className="logo">Add Friend</span>
        <span className='btnClose' onClick={onClose}>X</span>
        <div className='search'>
          <div className="searchForm">
            <img src={Find} />
            <input type="text" placeholder='Enter Mail Find' />
          </div>
          <UserChat />
          <UserChat />
          <UserChat />
          <UserChat />
        </div>

        <button>Find</button>
      </div>

    </div>
  )
}

export default AddFriend