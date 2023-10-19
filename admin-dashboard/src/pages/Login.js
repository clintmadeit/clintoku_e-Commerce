import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-5" style={{ background: "#b8860b", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue</p>
        <CustomInput type="text" label="Email Address" id="email" />
        <CustomInput type="password" label="Password" id="pass" />
        <div className="mb-3 text-end mt-2">
          <Link
            to="/forgot-password"
            className="text-dark text-decoration-none"
          >
            Forgot Password?
          </Link>
        </div>
        <Link
          to="/admin"
          className="border-0 px-3 py-2 text-decoration-none text-white rounded-3 w-100 text-center fw-bold mt-3"
          style={{ background: "#b8860b" }}
          type="submit"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Login;
