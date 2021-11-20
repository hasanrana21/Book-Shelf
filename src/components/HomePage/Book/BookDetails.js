import React from 'react';
import { Link } from 'react-router-dom';

const BookDetails = (props) => {
    // console.log(props.book)
    const details = props.book;
    return (
        <div className="col-span-3 book cursor-pointer hover:shadow-lg p-4 border-2 border-gray-300 rounded-lg">
          <div className="w-40 mx-auto mb-2">
            <img
              src={details.image}
              alt="coodian"
              className="h-40 mx-auto"
            />
          </div>
          <div>
            <h3 className="text-xl text-center py-1">
              {details.bookName}
            </h3>
            <p className="text-lg font-bold">by {details.author}</p>
            <p className="text-green-400 text-lg py-1">{details.stockTitle}</p>
            <div className="flex justify-between">
              <p className="text-xl font-semibold line-through"> Tk. {details.beforePrice} </p>
              <p className="text-xl font-semibold">TK. {details.afterPrice} </p>
            </div>
            <Link to={`/place-order/${details.id}`}>
              <div className="text-center pt-2">
                <button className="text-lg font-bold bg-gray-400 text-white px-3 py-1 rounded">Order Now</button>
              </div>
             </Link>
          </div>
        </div>
    );
};

export default BookDetails;