import pageStyle from  './navbar.module.css';

import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Profile from './Profile';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/reducers/userReducer';

const Navbar = () => {
  const[showProfile, setShowProfile] = useState(false);
  const user = useSelector(userSelector);
  const location = useLocation();

  return (
    <>
        <nav>
                <div className={pageStyle.navbar}>
                    <div className={pageStyle.container}>

                      <div className={pageStyle.logo}>
                        <Link to='/'>
                              <div className={pageStyle.brandName}>NEWS TIMES </div>
                              <span> The only news you need to know </span>
                              </Link>
                      </div>

                      {/* {location.pathname==='/'?
                      <form className={pageStyle.searchBar}>
                        <input id="searchText" type="search" className={pageStyle.searchBox} placeholder="Search here.."/>
                        <button id="searchBtn" type="submit" className={pageStyle.searchBtn}><i className="fa-solid fa-magnifying-glass"></i></button>
                      </form>
                      :null}  */}

                      <div className={pageStyle.profile} onMouseEnter={() => {setShowProfile(true)}} onMouseLeave={() => setShowProfile(false)}>
                        <i className="fa-solid fa-circle-user"></i>
                      </div>
                      
                      {showProfile?<Profile onMouseEnter={() => setShowProfile(true)} onMouseLeave={() => setShowProfile(false)} /> :null}
                    </div>
                </div>
            </nav>
          <Outlet/> 
    </>
)}

export default Navbar;
