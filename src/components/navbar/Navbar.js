import pageStyle from  './navbar.module.css';

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userSelector, logOutAsync } from '../../redux/reducers/userReducer';

const Navbar = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  
  return (
    <>
        <nav>
                <div className={pageStyle.navbar}>

                    <div className={pageStyle.container}>
                      <Link to="/">
                        <a href="#" className={pageStyle.logo}>
                          <img src="https://t3.ftcdn.net/jpg/03/07/93/88/360_F_307938835_NChzYE26DIyfzHdAdW722BTaOnjaHSqV.jpg" alt="company logo"/>
                        </a>
                      </Link>
                      
                      <div className={pageStyle.searchBar}>
                          <input id="searchText" type="text" className={pageStyle.searchBox} placeholder="Search here.."/>
                          <button id="searchBtn" className={pageStyle.searchBtn}>Search</button>
                      </div>

                      <div>
                        {user
                        ?<button onClick={() => dispatch(logOutAsync())}> Sign Out </button>
                        :<Link to="/signin"> <button> Sign In </button> </Link>}
                        <Link to="/signup"> <button> Sign Up </button> </Link>
                        
                      </div>
                    </div>
                </div>
            </nav>
          <Outlet/> 
    </>
)}

export default Navbar;
