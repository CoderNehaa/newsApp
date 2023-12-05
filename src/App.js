import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import Home from './components/home/Home.js';
import Navbar from './components/navbar/Navbar.js';
import SignInForm from './components/FormPages/SignInForm.js';
import SignUpForm from './components/FormPages/SignUpForm.js';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Navbar />,
      children:[
      {index: true, element: <Home />},
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
