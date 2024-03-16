import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className=" grid grid-cols-12 p-4 gap-4 bg-red-500 h-[60vh] mt-[8vh]">
      <div className="col-span-4 rounded-md bg-violet-500 flex items-center justify-center">
        <Link to="123">product one</Link>
      </div>
      <div className="col-span-4 rounded-md bg-violet-500 flex items-center justify-center">
        <Link to="456">product two </Link>
      </div>
      <div className="col-span-4 rounded-md bg-violet-500 flex items-center justify-center">
        <Link to="789">product three </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
