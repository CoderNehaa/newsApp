import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/reducers/userReducer';

const Home = () => {
  const user = useSelector(userSelector);
  
  return (
    <div>
      <h1> Welcome { user && user.name } </h1>
    </div>
  )
}

export default Home
