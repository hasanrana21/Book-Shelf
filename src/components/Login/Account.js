import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";

const Account = () => {
  const [getUser, setGetUser] = useState({});
  console.log(getUser);
  axios
    .get("http://127.0.0.1:8000/api/accounts/me/")
    .then((res) => setGetUser(res.data))
    .catch((err) => console.log(err));
  return (
    <div className="mx-40 my-12">
      <h1 className="text-2xl font-bold">This is Account page </h1>
      <p>{getUser.name}</p>
    </div>
  );
};

export default Account;
