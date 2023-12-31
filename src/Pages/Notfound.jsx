/* eslint-disable no-unused-vars */
import Lottie from "lottie-react";
import { Link, useLocation, useRouteError } from "react-router-dom";

import notfound from "../assets/404-not-found.json";

export default function Notfound() {
  const { status, data, statusText } = useRouteError();
  const { pathname } = useLocation();
return (
    <>
    
      <div className=" min-h-screen bg-blue-100 mx-auto flex h-[90vh] text-center flex-col justify-center items-center ">
        <Lottie className="max-h-[500px]" animationData={notfound} alt="" />

        <div className="-translate-y-10">
          <p className="text-xl my-5">{data}</p>
          <Link
            to={pathname.includes("/dashboard") ? "/dashboard/profile" : "/"}
          >
            <button className="btn bg-blue-900 btn-lg text-white hover:bg-blue-900 mt-5">
              {pathname.includes("/dashboard")
                ? "Go to Dashboard"
                : "Go to Home Page"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
