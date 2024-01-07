import { NavLink } from "react-router-dom";
import "../../scss/DashBoard/DashBoardSidebar.scss";

export default function DashBoardSidebar() {
  return (
    <div className="DashBoardSidebar overflow-y-auto  w-16 lg:w-[30%] xl:w-[25%] bg-[#002347] h-full">
      <div className="header  h-20 w-full   flex px-2 space-x-2 items-center  bg-[#001d3b] shadow-lg border-b-2">
        <img className="h-12 w-12 object-cover" src="https://i.ibb.co/9ZV4gBG/user.png" alt="" />
        <h3 className="text-white lg:block hidden">Md Nahid Hasan</h3>
      </div>

      <div className="manus h-[calc(100%-160px)]">
        <NavLink to="/dashboard/profile" className="item">
          <i className="fa-solid fa-id-card"></i>
          <p className="lg:block hidden">My Profile</p>
        </NavLink>
        <NavLink to="/dashboard/my-blogs" className="item">
          <i className="fa-duotone fa-browser"></i>
          <p className="lg:block hidden">My Blogs</p>
        </NavLink>
        <NavLink to="/dashboard/add-blog" className="item">
          <i className="fa-solid fa-signs-post"></i>
          <p className="lg:block hidden">Add New Blog</p>
        </NavLink>
        <a className="item">
          <i className="fa-solid fa-heart"></i>
          <p className="lg:block hidden">My Folowers</p>
        </a>

        <NavLink to="/" className="item">
          <i className="fa-duotone fa-browser"></i>
          <p className="lg:block hidden">All Blogs</p>
        </NavLink>
        <a className="item">
          <i className="fa-solid fa-messages-question"></i>
          <p className="lg:block hidden">Contact & Support</p>
        </a>
        <a  className="item">
          <i className="fa-solid fa-gear"></i>
          <p className="lg:block hidden">Settings</p>
        </a>
      </div>
      <div className="header  h-20 w-full   flex justify-center items-center  bg-[#001d3b] shadow-lg border-t-2"></div>
    </div>
  );
}
