import './App.css';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login/Login';
import Main from './layout/Main';
import Services from './components/Services/Services'
import Contact from './components/Home/Contact';
import About from './components/About/About';
function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Main></Main>,
      children: [
        {path: '/', element: <Home></Home>},
        { path: 'services', element: <Services></Services> },
        { path: 'contact', element: <Contact></Contact> },
        { path: 'login', element: <Login></Login> }
      ]
    },
    { path: 'about', element: <About></About> }
    
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
