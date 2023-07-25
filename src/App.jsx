// import './App.css'
// // import {
// //   createBrowserRouter,
// //   RouterProvider,
// // } from "react-router-dom";
// // import Layout from './components/Main/Layout';
// // import ErrorPage from './components/ErrorPage/ErrorPage';
// // import Home from './components/Home/Home';
// // import Login from './components/Login/Login';
// // import Services from './components/Home/Services';
// // import About from './components/About/About';
// // import Shop from './components/Shop/Shop';
// // import Contact from './components/Home/Contact';
// // import OrderDetails from './components/ServiceDetails/OrderDetails';
// // import Admin from './components/Dashboard/Admin';
// // import AllUser from './components/Dashboard/AllUser';
// // import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// // import AddService from './components/Dashboard/AddService';
// // import AllOrder from './components/Dashboard/AllOrder';
// // import ReviewSubmit from './components/Dashboard/ReviewSubmit';
// // import Book from './components/Dashboard/Book';
// // import BookingList from './components/Dashboard/BookingList';
// // import Payment from './components/Dashboard/Payment';

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <Layout></Layout>,
// //     errorElement: <ErrorPage />,
// //     children: [
// //       {
// //         path: "/",
// //         element: <Home></Home>,
// //         loader: async () =>{
// //           return fetch('http://localhost:5000/addService')
// //         }
// //       },
// //       {
// //         path: "services",
// //         element: <Services></Services>,
// //         loader: async () =>{
// //           return fetch('http://localhost:5000/addService')
// //         }
// //       },
// //       {
// //         path: "about",
// //         element: <About></About>
// //       },
// //       {
// //         path: "shop",
// //         element: <Shop></Shop>
// //       },
// //       {
// //         path: "contact",
// //         element: <Contact></Contact>
// //       },
// //       {
// //         path: "OrderDetails/:Id",
// //         element: <PrivateRoute><OrderDetails></OrderDetails></PrivateRoute>,
// //         loader: async ({params}) =>{
// //           return fetch(`http://localhost:5000/addService/${params.Id}`)
// //         },
// //       },
// //       {
// //         path: "/login",
// //         element: <Login></Login>
// //       },

// //     ]
// //   },
// //   {
// //     path: '/dashboard',
// //     element:<PrivateRoute><Admin></Admin></PrivateRoute>,
// //     children: [
// //       {
// //         path: 'order',
// //         element: <AllOrder></AllOrder>
// //       },
// //       {
// //         path: 'addService',
// //         element: <AddService></AddService>
// //       },
// //       {
// //         path: 'admin',
// //         element: <AllUser></AllUser>
// //       },
// //       {
// //         path: 'book',
// //         element: <Book></Book>,
// //         loader: async () =>{
// //           return fetch('http://localhost:5000/orderList')
// //         }, 
// //       },
// //       {
// //         path: 'book/payment/:id',
// //         element: <Payment></Payment>,
// //         loader: async ({params}) =>{
// //           return  fetch(`http://localhost:5000/book/payment/${params.id}`)
// //         }
// //       },
// //       {
// //         path: 'bookingList',
// //         element: <BookingList></BookingList>,
// //         loader: async () =>{
// //           return fetch('http://localhost:5000/orderList')
// //         }
// //       },
// //       {
// //         path: 'review',
// //         element: <ReviewSubmit></ReviewSubmit>
// //       }
// //     ]
// //   }

// // ]);


// function App() {
//   return (
//     <RouterProvider router={router} />
//   )
// }

// export default App
