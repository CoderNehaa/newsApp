import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './home/Home';
import SignInForm from './FormPages/SignInForm';
import SignUpForm from './FormPages/SignUpForm';

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
