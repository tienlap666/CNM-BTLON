import React from 'react'
import Add from "../img/defaultAvatar.png";
import Find from "../img/find3.png";

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <img src={Find} />
        <input type="text" placeholder='Enter Name Find'/>
      </div>
      <div className="userChat">
        <img src={Add} />
        <div className="userChatInfo">
          <span>Tien</span>
        </div>
      </div>
    </div>
  )
}

export default Search