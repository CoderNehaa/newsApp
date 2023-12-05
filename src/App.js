import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import Home from './components/home/Home.js';
import Navbar from './components/navbar/Navbar.js';
import SignInForm from './components/FormPages/SignInForm.js';
import SignUpForm from './components/FormPages/SignUpForm.js';
import Favorites from './components/favorites/Favorites.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authentication } from './redux/reducers/userReducer.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authentication());
  }, [])
  
  const router = createBrowserRouter([
    {path: '/', element: <Navbar />,
      children:[
      {index: true, element: <Home />},
      {path:'/favorites', element:<Favorites />},
      {path:'/signin', element: <SignInForm/>},
      {path:'/signup', element: <SignUpForm/>}
    ]},
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
