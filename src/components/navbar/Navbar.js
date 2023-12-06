import pageStyle from  './navbar.module.css';

import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Profile from './Profile';
import { useDispatch } from 'react-redux';
import { fetchData,onCategoryClick } from '../../redux/reducers/userReducer';

const Navbar = () => {
  const categoriesArray = ["Politics", "Sports", "Education", "Tech", "Business", "Entertainment","Lifestyle","Research","Investigations","Elections","Terrorism","IPL","Finance", "Careers","Movies","Music"];
  const[showProfile, setShowProfile] = useState(false);
  const [searchText, setSearchText] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  
  function handleSubmit(e){
    e.preventDefault();
    if(searchText===''){
      dispatch(fetchData('world'));
      return;
    }
    dispatch(fetchData(searchText));
  }

  return (
    <>
        <nav>
                <div className={pageStyle.navbar}>
                    <div className={pageStyle.container}>

                      <div className={pageStyle.logo}>
                        <a href='/'>
                            <div className={pageStyle.brandName}>NEWS TIMES </div>
                            <span className={pageStyle.slogan}> Unbiased, accurate, fastest </span>
                        </a>
                      </div>

                      <div>
                        {location.pathname==='/'?
                        <form className={pageStyle.searchBar} onSubmit={handleSubmit}>
                          <input id="searchText" type="search" className={pageStyle.searchBox} placeholder="Search here.." 
                                onChange={(e) => {
                                  setSearchText(e.target.value)
                                }} 
                              />
                          <button id="searchBtn" className={pageStyle.searchBtn}><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                        :null} 
                      </div>
 
                      {/* {location.pathname==='/favorites'
                        ?<div className={pageStyle.homeIcon}><Link to='/'> <i className="fa-solid fa-house"></i> </Link></div>
                        :null
                      }  */}

                      <div className={pageStyle.profile} onMouseEnter={() => {setShowProfile(true)}} onMouseLeave={() => setShowProfile(false)}>
                        <i className="fa-solid fa-circle-user"></i>
                      </div>
                      
                      {showProfile
                        ?<Profile onMouseEnter={() => setShowProfile(true)} onMouseLeave={() => setShowProfile(false)} /> 
                        :null
                      }
                    </div>
                              
                    {/* {location.pathname==='/favorites' || location.pathname === '/'
                      ?<div className={pageStyle.categories}>
                        {categoriesArray.map((obj, index) => 
                          <span className='categoryItem' key={index} onClick={() => dispatch(onCategoryClick(obj))} id={`${obj}`}> {obj} </span>
                        )}
                      </div>
                      :null
                    } */}
                </div>
            </nav>
          <Outlet/> 
    </>
)}

export default Navbar;
