import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CoodianLogo from "../../asstets/img/coodian.png";

const Navbar = () => {
  return (
    <div class="navbar-wrapper py-6">
      <div class="flex justify-between mx-32 h-16">
        <img src={CoodianLogo} alt="" class="w-20" />
        <input
          class="border-2 border-gray-600 w-3/6 px-4 py-2 text-xl rounded-lg"
          type="search"
          placeholder="Search books that you like most"
        />
        <div class="flex space-x-3 items-center border-2 border-green-400 py-0 px-2 rounded">
          <img class="w-12 h-12 rounded-full" src={CoodianLogo} alt="" />
          <h4 class="text-xl font-semibold">Hasan Rana</h4>
        </div>
      </div>
      <div class="mx-auto w-10/12 pt-6">
        <ul class="menu flex justify-center space-x-12">
          <li>
            <Link to="/">Book</Link>
          </li>
          <li>Stationary & Others</li>
          <li>Institution Order</li>
          <li>Electronics</li>
          <li>Blog</li>
          <li>Offer</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
