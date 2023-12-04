import { RouterProvider, createBrowserRouter} from 'react-router-dom';

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
