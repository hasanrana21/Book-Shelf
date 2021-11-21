import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import allBooks from "../../fakeData/books.json";
import { useEffect } from "react/cjs/react.development";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const { id } = useParams();
  console.log(id);
  //string to number
  const [receiveBook, setReceiveBook] = useState([]);

  useEffect(() => {
    setReceiveBook(allBooks);
  }, [receiveBook]);

  let getDetails =
    receiveBook.filter((book) => book.id === parseFloat(id)) || {};
  console.log(getDetails[0]);
  const getBookDetails = getDetails[0];
  return (
    <div className="px-40 py-16 flex justify-evenly">
      <img src={getBookDetails?.image} alt="" />
      <div>
        <h3 className="text-4xl font-semibold">{getBookDetails?.bookName} </h3>
        <p className="py-5 text-2xl">
          by <span className="font-bold">{getBookDetails?.author} </span>
        </p>
        <p>Category: come to proceed</p>
        <div className="py-5">
          <h4 className="text-3xl font-semibold line-through py-2">
            Tk. {getBookDetails?.beforePrice}
          </h4>
          <h4 className="text-3xl font-semibold">
            Tk. {getBookDetails?.afterPrice}{" "}
            <span className="text-lg">You Save TK. 16 (5%)</span>
          </h4>
        </div>
        <h6 class="text-xl">
          In Stock <span class="text-red-600">(number of copy's left)</span>
        </h6>
        <div class="my-6 space-x-11">
          <Link to="/add-to-cart">
            <button class="text-xl border-2 border-yellow-500 bg-yellow-500 text-white font-semibold px-9 py-4 rounded-lg ">
              Add to Cart
            </button>
          </Link>
          <button class="text-xl border-2 border-green-500 text-green-500 font-semibold px-9 py-4 rounded-lg">
            Reading Somethings
          </button>
        </div>
      </div>
      {/* <div className="modal">
        <div className="modalContent">
          <iframe
            title="readingFrame"
            src="http://www.africau.edu/images/default/sample.pdf"
            frameborder="5"
          ></iframe>
        </div>
      </div> */}
    </div>
  );
};

export default PlaceOrder;
