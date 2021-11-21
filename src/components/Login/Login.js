import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const Login = (props) => {
  const [userLogin, setUserLogin] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [newUser, setNewUser] = useState({});
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setNewUser(data);
    const userInfo = {
      email: data.email,
      password: data.password,
      name: data.name,
    };

    // USER CREATE
    axios
      .post("http://127.0.0.1:8000/api/accounts/create/", userInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // USER TOKEN
    axios
      .post("http://127.0.0.1:8000/api/accounts/token/", userInfo)
      .then((res) => {
        console.log("Alhamdulilah Successfully Login YaY!!", res);
        setUserToken(res.data.token);
        sessionStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err.message));
  };

  // REDIRECT ACCOUNT PAGE
  
  return (
    <div className="my-12 mx-auto form-wrapper">
      <h1 className="text-4xl font-semibold text-center mb-6">
        Register/Sign in
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {userLogin && <label>Name</label>}
        {userLogin && (
          <input
            type="text"
            placeholder="Name"
            name="name"
            {...register("name")}
          />
        )}
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          {...register("email")}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input type="submit" value={userLogin ? "Sign Up" : "Sign In"} />
      </form>
      <div>
        <h6 className="text-lg">
          Do you have an account?
          <span
            className="cursor-pointer font-semibold text-lg underline ml-2"
            onClick={() => setUserLogin(!userLogin)}
          >
            {userLogin ? "Log In" : "Sign Up"}
          </span>
        </h6>
      </div>
    </div>
  );
};

export default Login;
