import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { Input, Button, Logo } from "./index";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data); // data entered by the user
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData)); // if we get userdata dispatch the userData to login reducer
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", { required: true })}// explain me the braces
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="password"
              type="password"
              placeholder="Ener your password"
              {...register("password", { required: true })}
            />
            <Button type="submit" className="w-full">Creat Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// import React, {useState} from 'react'
// import {Logo, Input, Button, Container} from './index'
// import {useDispatch} from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import authService from '../appwrite/auth'
// import { login } from '../store/authSlice'
// import { useForm } from "react-hook-form"

// const Signup = () => {
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { register, handleSubmit } = useForm();

//   const signup = async (createdUserData) => {
//     setError("");
//     try {
//       const userData = await authService.createAccount(createdUserData);
//       if (userData) {
//         const getUserData = await authService.getCurrentUser();
//         if (getUserData) {
//           dispatch(login(getUserData));
//           navigate("/");
//         }
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };
//   return (
//     <div>
//       <Container>
//         <Logo />
//         <form onSubmit={handleSubmit(signup)}>
//         <Input label = "name" type="text" placeHolder="enter your full name" className="w-full"
//         {...register ('name', {required: true})}
//         />
//         <Input label = "email" type="email" placeHolder="email@example.com" className="w-full"
//         {...register ('email', {required: true})}
//         />
//         <Input label = "password" type="password" placeHolder="please enter your password" className="w-full"
//         {...register ('password', {required: true})}
//         />
//         <Button type='submit'className="w-full">Sign up</Button>
//         </form>
//         {error && <p>{error}</p>}
//       </Container>
//     </div>
//   );
// }

// export default Signup