import React from "react";
import Meta from "../components/Meta";
import BreadCrump from "../components/BreadCrump";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title="Signup" />
      <BreadCrump title="Signup" />
      <Container class1="login-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="Email" placeholder="Email" />
                <CustomInput type="name" name="Name" placeholder="Full Name" />
                <CustomInput
                  type="tel"
                  name="Mobile"
                  placeholder="Mobile Number"
                />
                <CustomInput
                  className="mt-1"
                  type="password"
                  name="Password"
                  placeholder="Password"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
