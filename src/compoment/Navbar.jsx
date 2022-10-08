import React, { useState } from 'react'
import Add from "../img/defaultAvatar.png";
import Info from './Info';
import { HiUserAdd } from 'react-icons/hi';
import { MdOutlineGroupAdd } from 'react-icons/md';
import AddFriend from './AddFriend';
import AddGroup from './AddGroup';

const Navbar = () => {
  const [openInfo, seTopenInfo] = useState(false);
  const [openAddFriend, seTopenAddFriend] = useState(false);
  const [openAddGroup, setOpenAddGroup] = useState(false);

  return (
    <div className='navbar'>
      <span className='logo'>Chat</span>
      <div className="user" >
        <img src={Add} alt='' onClick={() => seTopenInfo(true)}></img>
        <span onClick={() => seTopenInfo(true)}>Lap</span>
        <button  >Logout</button>
        <HiUserAdd className='icons' onClick={() => seTopenAddFriend(true)} />
        <MdOutlineGroupAdd className='icons' onClick={()=> setOpenAddGroup(true)}/>

      </div>
      <Info open={openInfo} onClose={() => seTopenInfo(false)} />

      <AddFriend open={openAddFriend} onClose={()=> seTopenAddFriend(false)} />
      <AddGroup open={openAddGroup} onClose={()=> setOpenAddGroup(false)} />
    </div>
  )
}

export default Navbar