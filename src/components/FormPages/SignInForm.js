import formStyle from "./formStyle.module.css";

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { logInAsync, signInWithGoogle, userSelector } from '../../redux/reducers/userReducer';

const SignInForm = () => {
  const [values, setValues] = useState({name:"", email:"", pass:"", confirmPass:""});
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/'); 
    }
  }, [user, navigate]);

  function handleSubmit(e){
    e.preventDefault();
    dispatch(logInAsync(values));
  }

  return (
    <div>
    <div className={formStyle.pageStyle}>
      <h1> Sign  In </h1>
      <form>
        <input type="email" placeholder="Enter email" onChange={(e) => setValues((prev) => ({...prev, email:e.target.value}))} required/>
        <input type="passwrord" placeholder="Enter password" onChange={(e) => setValues((prev) => ({...prev, pass:e.target.value}))} required/>
        <button type='submit' onClick={handleSubmit}> Sign In </button>
        <button type='button' onClick={() => dispatch(signInWithGoogle())}> 
          <span> Sign In with Google </span> 
        </button>
      </form>

      <Link to='/signup' className="linkStyle">  Or SignUp instead </Link>
    </div>
    </div>
  )
}

export default SignInForm;
