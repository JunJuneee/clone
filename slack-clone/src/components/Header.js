import React from 'react';
import './Header.css'
import Avatar from '@material-ui/core/Avatar'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from '../StateProvider';


function Header() {
  const [{user}] = useStateValue()
  return (
    <div className='header'>
      <div className='header_left'>
        <Avatar
          className='header_avatar'
          alt = {user?.displayName}
          src={user?.photoURL}
        />
        <QueryBuilderIcon />
        </div>

      <div className='header_search'>
        <SearchIcon />
        <input placeholder='search here' />
      </div>
      <div className='header_right'>
        <HelpOutlineIcon />
      </div>
      
    </div>
  );
}

export default Header;