import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const Login = () => {
  //   const [userInfo, setUserInfo] = useState({});
  const [userLogin, setUserLogin] = useState(false);
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
        console.log("User Already Created", err.message);
      });
  };

  const handleLogin = () => {
    axios
      .post("http://127.0.0.1:8000/api/accounts/token/", {
        email: "aminul@gmail.com",
        password: "aminul1234",
      })
      .then((res) => console.log("Alhamdulilah Successfully Login YaY!!", res))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="my-12 mx-40 text-center">
      <h1 className="text-4xl font-semibold text-center">Create an User</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        action="#"
        className="form"
      >
        {userLogin && <label>Name</label>}
        {userLogin && (
          <input placeholder="Name" name="name" {...register("name")} />
        )}
        <label>Email</label>
        <input placeholder="Email" name="email" {...register("email")} />

        <label>Password</label>
        <input
          placeholder="Password"
          name="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        {/* <input type="submit" value={userLogin ? "Sign Up" : "Sign In"} /> */}
        {userLogin && <input type="submit" value="Sign Up" />}
        {userLogin === false && (
          <input onClick={handleLogin} type="submit" value="Sign In" />
        )}
      </form>
      <div>
        <p class="text-lg">
          Do you have an account?
          <span
            className="cursor-pointer font-semibold text-lg underline ml-2"
            onClick={() => setUserLogin(!userLogin)}
          >
            {userLogin ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
