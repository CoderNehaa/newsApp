import pageStyle from  './navbar.module.css';

import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import Profile from './Profile';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/reducers/userReducer';

const Navbar = () => {
  const[showProfile, setShowProfile] = useState(false);
  const user = useSelector(userSelector);

  return (
    <>
        <nav>
                <div className={pageStyle.navbar}>

                    <div className={pageStyle.container}>
                      <Link to="/">
                          <div>NEWS NATION</div> 
                          <span> The only news you need to know </span>
                      </Link>
                      
                      <form className={pageStyle.searchBar}>
                        <input id="searchText" type="search" className={pageStyle.searchBox} placeholder="Search here.."/>
                        <button id="searchBtn" type="submit" className={pageStyle.searchBtn}><i className="fa-solid fa-magnifying-glass"></i></button>
                      </form>

                      <div className={pageStyle.profile} onMouseEnter={() => {setShowProfile(true)}} onMouseLeave={() => setShowProfile(false)}>
                        <i className="fa-solid fa-circle-user"></i> <span> {user ? user.name:"Profile"} </span>
                      </div>
                      
                      {showProfile?<Profile onMouseEnter={() => setShowProfile(true)} onMouseLeave={() => setShowProfile(false)} /> :null}
                    </div>
                </div>
            </nav>
          <Outlet/> 
    </>
)}

export default Navbar;
