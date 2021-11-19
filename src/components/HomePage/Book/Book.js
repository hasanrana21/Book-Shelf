import React from "react";
import { Link } from "react-router-dom";
import './Book.css'
import { useState } from 'react/cjs/react.development';
import allBooks from '../../../fakeData/books.json';
import { useEffect } from 'react/cjs/react.development';
import BookDetails from "./BookDetails";

const Book = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    // console.log(allBooks)
    setBooks(allBooks);
  },[])
  return (
    <div className="mx-20 my-12">
      <div className="grid grid-cols-12 gap-4 gap-x-4 gap-y-8">
        {
          books.map((book, index) => <BookDetails book={book} key={index} ></BookDetails>)
        }


        {/* <div className="col-span-2 book cursor-pointer hover:shadow-lg p-4 border-2 border-gray-300 rounded-lg">
          <div className="w-40 mx-auto mb-2">
            <img
              src={"https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/337275098_160901.jpg"}
              alt="coodian"
            />
          </div>
          <div>
            <h3 className="text-xl text-center py-1">
              Cestar Gymnasium Future er Calcium
            </h3>
            <p className="text-lg font-bold">by Jhankar Mahbub</p>
            <p className="text-green-400 text-lg py-1">Product In Stock</p>
            <div className="flex justify-between">
              <p className="text-xl font-semibold line-through">TK. 260</p>
              <p className="text-xl font-semibold">TK. 221</p>
            </div>
            <Link to="/place-order">
              <div className="text-center pt-2">
                <button className="text-lg font-bold bg-gray-400 text-white px-3 py-1 rounded">Order Now</button>
              </div>
             </Link>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Book;
