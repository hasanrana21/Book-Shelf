import React from "react";
import Book from "../Book/Book";

const Home = () => {
  return (
    <div className="grid grid-cols-12 mx-16 my-10">
      <div className="col-span-2">
        <h1 className="text-2xl font-bold">Categories Section</h1>
      </div>
      <div className="col-span-10">
        <Book></Book>
      </div>
    </div>
  );
};

export default Home;
