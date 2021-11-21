import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CoodianLogo from "../../asstets/img/coodian.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [profileMenu, setProfileMenu] = useState(false)
  return (
    <div className="navbar-wrapper py-6">
      <div className="flex justify-between mx-32 h-16">
        <img src={CoodianLogo} alt="" className="w-20" />
        <input
          className="border-2 border-gray-600 w-3/6 px-4 py-2 text-xl rounded-lg"
          type="search"
          placeholder="Search books that you like most"
        />
        <div>
          <div className="flex space-x-3 py-1 items-center border-2 border-green-400 py-0 px-2 rounded cursor-pointer" onClick={()=>setProfileMenu(!profileMenu)}>
            <img className="w-12 h-12 rounded-full" src={CoodianLogo} alt="" />
            <h4 className="text-xl font-semibold">Hasan Rana</h4>
            <span className="text-2xl">
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </div>
         {profileMenu && <ul className="px-6 shadow-lg profile-submenu rounded py-3">
            <li>My Account</li>
            <li>My Orders</li>
            <li>My Wishlist</li>
          </ul>}
        </div>
      </div>
      <div className="mx-auto w-10/12 pt-6">
        <ul className="menu flex justify-center space-x-10">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
          <li>Stationary & Others</li>
          <li>Institution Order</li>
          <li>Electronics</li>
          <li>Blog</li>
          <li>Offer</li>
          <li style={{zIndex: '-3'}}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
