import React from "react";
import "./Account.css";
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";
import { useForm } from "react-hook-form";

const Account = () => {
  const [getUser, setGetUser] = useState({});
  const [edit, setEdit] = useState(true);
  console.log(getUser);
  const [userToken, setUserToken] = useState("");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState(null);

  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    let Token = sessionStorage.getItem("token");
    setUserToken(Token);
    console.log(userToken);
    axios
      .get("http://127.0.0.1:8000/api/accounts/me/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${userToken}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setGetUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [userToken]);

  const handleEdit = () => {
    setEdit(!edit);
    console.log(getUser)
    const data = {
      email: email,
      password: password,
      name: name,
    }
    console.log(data)
    axios.put('http://127.0.0.1:8000/api/accounts/me/', data)
    .then(res => {
      setData(res.data);
      setName('');
      setEmail('');
      setPassword('');
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="profile-wrapper">
      <h1 className="text-5xl py-6 font-bold text-center"> User Profile </h1>
      <div className="text-right">
        <button className="text-2xl font-semibold border-4 border-gray-600 p-2 rounded-lg" onClick={handleEdit}> {edit ? 'Edit' : 'Save'} Profile</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
        <label>Name</label>
        <input type="text" name="name" disabled={edit} onChange={e => setName(e.target.value)} defaultValue={getUser.name} />
        <label>Email</label>
        <input type="email" name="email" disabled={edit} onChange={e => setEmail(e.target.value)} defaultValue={getUser.email} />

        <label>Password</label>
        <input type="text" name="text" disabled={edit} onChange={e => setPassword(e.target.value)} defaultValue={getUser.password} />
      </form>
    </div>
  );
};

export default Account;
