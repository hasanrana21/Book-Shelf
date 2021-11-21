import React from "react";

const AddToCart = () => {
  return (
    <div className="mx-32 my-6">
      <div className="grid grid-cols-12">
        <div className="col-span-8 rounded-lg border-2 border-gray-200 mx-6" style={{backgroundColor: '#fffaf4'}}>
          <div className="grid grid-cols-12 px-10 py-6 border-b-2 border-gray-400">
            <div className="col-span-2">
              <img
                src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/38e267230_212414.jpg"
                alt=""
              />
            </div>
            <div className="col-span-6 p-2 flex flex-wrap content-between">
              <div>
                <h3 className="text-2xl font-semibold">
                  Cester Gymneciam Future er Calcium
                </h3>
                <h5 className="text-xl font-semibold py-2">Jhankar Mahbub</h5>
              </div>
              <div className="space-x-6">
                <button className="text-xl">Delete</button>
                <button className="text-xl">Wishlist</button>
              </div>
            </div>
            <div className="col-span-2 text-center my-auto">
              <input
                type="text"
                className="w-20 border-2 border-black rounded"
              />
            </div>
            <div className="col-span-2 text-right my-auto">
              <h5 className="text-2xl py-1 line-through">Tk. 227</h5>
              <h5 className="text-2xl py-1">Tk. 267</h5>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <h1 className="text-5xl font-semibold">Checkout Summary</h1>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
