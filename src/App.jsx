import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Main/Layout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Services from './components/Home/Services';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Contact from './components/Home/Contact';
import OrderDetails from './components/ServiceDetails/OrderDetails';
import Admin from './components/Dashboard/Admin';
import AllUser from './components/Dashboard/AllUser';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "services",
        element: <Services></Services>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "shop",
        element: <Shop></Shop>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "OrderDetails/:Id",
        element: <PrivateRoute><OrderDetails></OrderDetails></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },

    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Admin></Admin></PrivateRoute>,
    children: [
      {
        path: 'user',
        element: <AllUser></AllUser>
      }
    ]
  }

]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
