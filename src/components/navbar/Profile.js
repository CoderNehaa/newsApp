import React from 'react';
import { Link } from 'react-router-dom';
 import { useDispatch, useSelector } from 'react-redux';

import pageStyle from  './navbar.module.css';
import { userSelector, logOutAsync } from '../../redux/reducers/userReducer';


const Profile = ({onMouseEnter, onMouseLeave}) => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

  return (
        <div className={pageStyle.ticket} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
        {user ?<>
            <h1 className={pageStyle.border}> Hello {user.name} </h1>
            <span className={pageStyle.border}> Welcome to our website </span>
            <button onClick={() => dispatch(logOutAsync())}> Sign out <i class="fa-solid fa-arrow-right-from-bracket"></i> </button>
            </>
            :<>
            <h2 className={pageStyle.border}> Hello user </h2>
            <span className={pageStyle.border}> To access your account </span>
            <button><Link to="/signin">  Sign In <i className="fa-solid fa-arrow-right-into-bracket"></i> </Link> </button>
            </>
        }
        </div>
  )
}

export default Profile;
