import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const Login = () => {
  const [userLogin, setUserLogin] = useState(false);
  const [userToken, setUserToken] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // setUserInfo(data);
    const userInfo = {
      email: data.email,
      password: data.password,
      name: data.name,
    };
    axios
      .post("http://127.0.0.1:8000/api/accounts/create/", userInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = () => {
    axios
      .post("http://127.0.0.1:8000/api/accounts/token/", {
        email: "aminul@gmail.com",
        password: "aminul1234",
      })
      .then((res) => {
        console.log("Alhamdulilah Successfully Login YaY!!", res);
        setUserToken(res.data.token);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="my-12 mx-auto form-wrapper">
      <h4>{userToken}</h4>
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

        {/* <input type="submit" value={userLogin ? "Sign Up" : "Sign In"} /> */}
        <div className="w-44 mx-auto">
          {userLogin && <input type="submit" value="Sign Up" />}
          {userLogin === false && (
            <input onClick={handleLogin} type="submit" value="Sign In" />
          )}
        </div>
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
