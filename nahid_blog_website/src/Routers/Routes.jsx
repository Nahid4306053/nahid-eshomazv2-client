import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import { AuthProvider } from "../Context/Authinicetion";
import Blogs from '../Pages/Blogs'
import DashBoardlayout from "../Layouts/DashBoardlayout";
import Profile from "../Pages/DashBoard/Profile";
import UserSignUp from "../Pages/UserSignUp";
import UserLogin from "../Pages/UserLogin"
import Privaterouter from './Privaterouter'
// import CheckAuth from "./CheckAuth";
import HandelBlog from "../Pages/DashBoard/handelBlog";
import BlogFullPreview from "../Pages/BlogFullPreview";
import MyBlogs from "../Pages/DashBoard/MyBlogs";
import UpdateBlog from "../Pages/DashBoard/UpdateBlog";
import FilterBlog from "../Pages/FilterBlog";
const Routers = createBrowserRouter([
   {
    path: "/",
    element : <AuthProvider><MainLayout></MainLayout></AuthProvider>,
    children : [
      {
        path: "/",
        element : <Privaterouter><Blogs></Blogs></Privaterouter>            
      }
      , {
        path: "/filter",
        element : <Privaterouter><FilterBlog></FilterBlog></Privaterouter>            
      }
      ,  {
        path: "/post/:id",
        element : <Privaterouter><BlogFullPreview></BlogFullPreview></Privaterouter>            
      }
      
      ,{
        path : "/dashboard",
        element: <Privaterouter><DashBoardlayout></DashBoardlayout></Privaterouter>,
        children : [
          {
            path:"profile",
            element : <Profile></Profile>
          },  {
            path:"add-blog",
            element : <HandelBlog></HandelBlog>
          }, {
            path:"update-blog/:id",
            element : <UpdateBlog></UpdateBlog>
          }, {
            path:"my-blogs",
            element : <MyBlogs></MyBlogs>
          }
        ]
      }
    ]
   },{
        path: "/login",
        element : <AuthProvider><><UserLogin></UserLogin></> </AuthProvider>           
      }
      ,{
        path: "/signup",
        element : <AuthProvider><><UserSignUp></UserSignUp>  </>         </AuthProvider> 
      }
])

export default Routers;