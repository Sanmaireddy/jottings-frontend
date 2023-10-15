import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
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
    <div className="flex h-screen justify-center items-center bg-slate-400">
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border  bg-white h-[600px] w-[400px] rounded-xl p-10"
        >
          <div className="flex justify-center font-inter text-4xl font-semibold">
            Welcome Back!
          </div>
          <div className="flex justify-center font-inter text-xl font-medium">
            Log in
          </div>
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
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="border border-black h-[40px] mt-[50px]"
          >
            Login
          </button>
          <button className="border border-black h-[40px] mt-3">
            Log in with Goggle
          </button>
          <div className="flex justify-center mt-4">
            Don't have account? Sign up
          </div>
          <div className="flex justify-center">Forgot your password?</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
