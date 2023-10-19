import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="py-5" style={{ background: "#b8860b", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Forgot Password?</h3>
        <p className="text-center">
          Enter Your email to receive reset password instructions
        </p>
        <CustomInput type="text" label="Email Address" id="email" />
        <Link
          to="/"
          className="border-0 px-3 py-2 text-decoration-none text-white rounded-3 w-100 text-center fw-bold mt-3"
          style={{ background: "#b8860b" }}
          type="submit"
        >
          OK
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
