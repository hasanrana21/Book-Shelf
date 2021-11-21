import React from "react";
import "./ShippingPage.css";
import { useForm } from "react-hook-form";
import CheckoutSummary from "./CheckoutSummary";

const ShippingPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="px-32 py-6">
      <div className="grid grid-cols-12">
        <div
          className="col-span-8 px-6 py-4 rounded-lg border-2 border-gray-200 mx-6"
          style={{ backgroundColor: "#fffaf4" }}
        >
          <h4 className="text-2xl">
            Shipping Address
            <span className="text-base px-2">
              (Please Fill Out Your Information)
            </span>
          </h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="shipping-form pt-8"
          >
            <div className="form-input">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  {...register("name")}
                />
              </div>
              <div className="flex space-x-6">
                <div className="w-2/4">
                  <label>Phone Number</label>
                  <input
                    type="phone"
                    placeholder="Phone Number"
                    name="phone"
                    {...register("phone")}
                  />
                </div>
                <div className="w-2/4">
                  <label>Phone Number (2)</label>
                  <input
                    type="phone"
                    placeholder="Phone Number(2)"
                    name="phone2"
                    {...register("phone2")}
                  />
                </div>
              </div>
              <div className="flex space-x-6 mb-4">
                <div className="w-2/4">
                  <label>Country</label>
                  <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    {...register("country")}
                  />
                </div>
                <div className="w-2/4">
                  <label>City</label>
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    {...register("city")}
                  />
                </div>
              </div>
              <div className="flex space-x-6 mb-4">
                <div className="w-2/4">
                  <label>Area</label>
                  <input
                    type="text"
                    placeholder="Area"
                    name="area"
                    {...register("area")}
                  />
                </div>
                <div className="w-2/4">
                  <label>Zone</label>
                  <input
                    type="text"
                    placeholder="Zone"
                    name="zone"
                    {...register("zone")}
                  />
                </div>
              </div>
              <div>
                <label>Address</label>
                <textarea
                  rows="10"
                  cols="30"
                  placeholder="Address"
                  className="border-2 border-gray-500 rounded w-full text-xl px-2 py-2"
                ></textarea>
              </div>
            </div>

            <div className="w-52 mx-auto pt-6">
              <input
                type="submit"
                value="CONFIRM ORDER"
                className="my-4 bg-green-500 text-white font-semibold"
              />
            </div>
          </form>
        </div>

        <div className="col-span-4 h-96 bg-white border-2 border-gray-400 px-6 py-4 mx-6 rounded-lg">
          <CheckoutSummary></CheckoutSummary>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
