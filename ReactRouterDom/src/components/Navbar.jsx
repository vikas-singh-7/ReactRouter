import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav >
      <div className="h-[100px] bg-violet-500 flex  items-center">
        <ul className="style-none font-semibold text-xl flex justify-around w-full items-center ">
          <input
            type="text"
            className="rounded-3xl outline-none h-[2em] text-center"
            placeholder="Search here...."
          />
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/products"}>products</Link>
          </li>
          <li>
            <Link to={"/contact"}>contact</Link>
          </li>
          <li>
            <Link to={"/help"}>help</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
