import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTrashAlt,
  faHeart,
  faGrinHearts,
} from "@fortawesome/free-solid-svg-icons";
import CheckoutSummary from "./CheckoutSummary";
import { Link } from "react-router-dom";

const AddToCart = () => {
  return (
    <div className="px-32 py-6">
      <div className="grid grid-cols-12">
        <div
          className="col-span-8 rounded-lg border-2 border-gray-200 mx-6"
          style={{ backgroundColor: "#fffaf4" }}
        >
          <div className="grid grid-cols-12 px-10 py-6 border-b-2 border-gray-400">
            <div className="col-span-2">
              <img
                src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/38e267230_212414.jpg"
                alt=""
              />
            </div>
            <div className="col-span-5 ml-4 p-2 flex flex-wrap content-between">
              <div>
                <h3 className="text-2xl font-semibold">
                  Cester Gymneciam Future er Calcium
                </h3>
                <h5 className="text-xl font-semibold py-2">Jhankar Mahbub</h5>
              </div>
              <div className="space-x-6">
                <button className="text-xl">
                  {" "}
                  <FontAwesomeIcon icon={faTrashAlt} />{" "}
                </button>
                <button className="text-xl">
                  {" "}
                  <FontAwesomeIcon icon={faHeart} /> Wishlist
                </button>
              </div>
            </div>
            <div className="col-span-3 text-center my-auto">
              <button className="bg-gray-200 px-3 py-1">
                {" "}
                <FontAwesomeIcon icon={faMinus} />{" "}
              </button>
              <input
                type="text"
                defaultValue={1}
                className="w-20 border-2 border-black rounded px-1 text-xl font-semibold text-center"
              />
              <button className="bg-gray-200 px-3 py-1">
                {" "}
                <FontAwesomeIcon icon={faPlus} />{" "}
              </button>
            </div>
            <div className="col-span-2 text-right my-auto">
              <h5 className="text-2xl font-semibold py-1">Tk. 267</h5>
              <h5 className="text-xl py-1 line-through text-red-600">
                Tk. 227
              </h5>
            </div>
          </div>
          <div className="bg-white px-10 py-6 text-right">
            <h4 className="text-xl font-semibold">
              Order your all products, shipping charge only Tk. 100
            </h4>
            <div className="space-x-5 my-5">
              <button className="text-xl font-semibold px-10 py-4 border-2 border-green-500 rounded text-green-500">
                ORDER AS A GIFT
              </button>
              <Link to="/shipping-page">
                <button className="text-xl font-semibold px-10 py-4 border-2 border-green-500 bg-green-500 rounded text-white">
                  GO FOR SHIPPING
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-4 bg-white border-2 border-gray-400 px-6 py-4 mx-6 rounded-lg">
          <CheckoutSummary></CheckoutSummary>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
