import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
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
import AddService from './components/Dashboard/AddService';
import AllOrder from './components/Dashboard/AllOrder';
import ReviewSubmit from './components/Dashboard/ReviewSubmit';
import Book from './components/Dashboard/Book';
import BookingList from './components/Dashboard/BookingList';
import Payment from './components/Dashboard/Payment';
import AuthProviders from './providers/AuthProviders';
import UserHome from './components/Dashboard/UserHome';
import AdminHome from './components/Dashboard/AdminHome';
import AllServices from './components/Dashboard/AllServices';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          return fetch('http://localhost:5000/addService')
        },
      },
      {
        path: "services",
        element: <Services></Services>,
        loader: async () => {
          return fetch('http://localhost:5000/addService')
        },
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
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "OrderDetails/:Id",
        element: <PrivateRoute><OrderDetails></OrderDetails></PrivateRoute>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/addService/${params.Id}`)
        },
      }

    ]
  },

  {
    path: '/dashboard',
    element: <PrivateRoute><Admin></Admin></PrivateRoute>,
    children: [
      // {
      //   path: '/dashboard',
      //   element: <AllOrder></AllOrder>,
      //   loader: async () => {
      //     return fetch('http://localhost:5000/orderList')
      //   },
      // },
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      {
        path: 'adminhome',
        element: <AdminHome></AdminHome>
      },
      {
        path: 'allServices',
        element: <AllServices></AllServices>,
        loader: async () => {
          return fetch('http://localhost:5000/addService')
        },
      }
      ,
      {
        path: 'order',
        element: <AllOrder></AllOrder>,
        loader: async () => {
          return fetch('http://localhost:5000/orderList', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('tailorAccessToken')}`
            }
          })
        },
      },
      {
        path: 'addService',
        element: <AddService></AddService>
      },
      {
        path: 'admin',
        element: <AllUser></AllUser>,
        loader: async () =>{
          return fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('tailorAccessToken')}`
            }
          })
        }
      },
      {
        path: 'book',
        element: <Book></Book>,
      },
      {
        path: 'book/payment/:id',
        element: <Payment></Payment>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/book/payment/${params.id}`)
        }
      },
      {
        path: 'bookingList',
        element: <BookingList></BookingList>,
      },
      {
        path: 'review',
        element: <ReviewSubmit></ReviewSubmit>
      }
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
