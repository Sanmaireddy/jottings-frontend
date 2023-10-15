import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password }
      );
      if (res.data.success) {
        console.log(res);
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex h-screen justify-center items-center bg-slate-400">
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col border  bg-white h-[600px] w-[400px] rounded-xl p-10"
          >
            <div className="flex justify-center font-inter text-4xl font-semibold">
              Welcome!
            </div>
            <div className="flex justify-center font-inter text-xl font-medium">
              Register
            </div>
            <label htmlFor="name" className="mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-black h-[40px] rounded-md p-2"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="border border-black h-[40px] p-2 rounded-md"
              placeholder="example@domain.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="border border-black h-[40px] rounded-md p-2"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="border border-black h-[40px] mt-[50px]"
            >
              Sign up
            </button>
            <button className="border border-black h-[40px] mt-3">
              Sign up with Goggle
            </button>
            <div className="flex justify-center mt-4">
              Have a account? Log in?
            </div>
            {/* s<div className="flex justify-center">Forgot your password?</div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
