import React from "react";

const CheckoutSummary = () => {
  return (
    <div>
      <h4 className="text-2xl border-b-2 border-gray-300 pb-3 font-semibold">
        Checkout Summary
      </h4>
      <div>
        <select className="border-2 border-black my-6 w-full py-2 rounded px-3 text-xl">
          <option>Bangladesh</option>
          <option>Pakistan</option>
          <option>Afganistan</option>
          <option>Nepal</option>
          <option>Katmundo</option>
        </select>
        <div className="checkout-summary">
          <div className="flex justify-between py-2 border-b-2 border-gray-300 text-xl text-gray">
            <p>Subtotal</p>
            <p>907 Tk.</p>
          </div>
          <div className="flex justify-between py-2 border-b-2 border-gray-300 text-xl text-gray">
            <p>Sipping</p>
            <p>907 Tk.</p>
          </div>
          <div className="flex justify-between py-2 border-b-2 border-gray-300 text-xl text-gray">
            <p>Total</p>
            <p>907 Tk.</p>
          </div>
          <div className="flex font-semibold justify-between py-2 border-b-2 border-dashed border-gray-300 text-xl text-gray">
            <p>Payment Total</p>
            <p>907 Tk.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
