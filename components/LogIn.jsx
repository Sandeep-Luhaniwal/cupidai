"use client";
import React, { useState } from "react";
import { Apple, Eye, Facebook, GoogleIcon, Logo } from "./common/Icon";
import { Button } from "./ui/button";
import Link from "next/link";
import { CommonLable } from "./common/CommonLable";
import { Input } from "./ui/input";

const LogIn = () => {
  const intialData = {
    email: "",
    password: "",
  }
  const [formdata, setFormdata] = useState(intialData);
  const [showPassword, setShowPassword] = useState(false);
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#])[A-Za-z\d@#]{8,}$/;
  // ============ ERROR STATE ==============
  const [error, setError] = useState({
    email: false,
    password: false,
  });
  // =========== GET VALUES FROM INPUTS =============
  const handleInputChange = (field, value) => {
    setFormdata({ ...formdata, [field]: value });
    // ================ VALIDATE IN REAL TIME ===========
    switch (field) {
      case "email":
        setError({
          ...error,
          email: value.trim() === "",
        });
        break;
      case "password":
        setError({
          ...error,
          password: value.trim() === "",
        });
        break;
      default:
        break;
    }
  };
  // ======== PASSWORD SHOW AND HIDDEN FUNCTION ===============
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // ========== FORM SUBMITION FUNCTION ===============
  const formSubmit = (e) => {
    // Prevent page reload after form submission
    e.preventDefault();
 
    // Check for empty fields
    if (
      formdata.email.trim() === "" ||
      formdata.password.trim() === ""
    ) {
      setError({
        email: formdata.email.trim() === "",
        password: formdata.password.trim() === "",
      });
      return;
    }
  
    // Check regex patterns
    if (!regexEmail.test(formdata.email)) {
      setError({ ...error, email: true });
      return;
    }
    if (!regexPassword.test(formdata.password)) {
      setError({ ...error, password: true });
      return;
    }
   
    console.log(formdata)
    // Clear form data and reset error state after successful submission
    setFormdata(intialData);
    setError({
      email: false,
      password: false,
    });
  };
  
  return (
    <>
      <div className="min-h-screen bg-mainbg bg-cover bg-no-repeat flex justify-center items-center">
        <div className="max-w-[526px] w-full px-3 sm:px-0">
          <div className="flex gap-3 items-center justify-center mb-6 sm:mb-7 md:mb-8 lg:mb-10">
            <Logo />{" "}
            <h1 className="text-[40px] text-white font-bold">CupidAI</h1>
          </div>
          <div className=" bg-lightgray rounded-[26px] w-full max-w-[526px] p-5 sm:p-6 md:p-[30px]">
            <h2 className="text-white font-medium text-[32px]">Login</h2>
            <p className="text-white text-opacity-60 text-base mb-10">
              We are really happy to see you again
            </p>
            <form onSubmit={formSubmit}>
            <div className="mb-6 relative">
              <CommonLable
                htmlFor={"email_address"}
                lableText={"Email address"}
              />
              <Input
                type={"email"}
                placeholder={"Enter Email"}
                value={formdata.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
               {error.email && (
              <p className="text-red-700  text-[10px] font-normal absolute -bottom-[18px] left-0">
                {formdata.email.trim() === ""
                  ? "Please enter your Email!"
                  : "Invalid Email!"}
              </p>
            )}
            </div>
            <div className="mb-6 relative">
              <CommonLable htmlFor={"password"} lableText={"Password"} />
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  className="pe-12"
                  placeholder={"Enter Password"}
                  value={formdata.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                />
                <span  onClick={togglePasswordVisibility} className="absolute right-[18px] top-[50%] -translate-y-[50%] cursor-pointer">
                  <Eye />
                </span>
                </div>
                {error.password && (
              <p className="text-red-700  text-[10px] font-normal absolute -bottom-[18px] left-0">
                {formdata.password.trim() === ""
                  ? "Please enter your password!"
                  : "password must be strong!"}
              </p>
            )}
            </div>
            <Button className="!text-white my-6 sm:my-7 md:my-8 lg:my-10 py-3 md:py-4 lg:py-[18px] bg_pinkGradient hover:!border-lightBlack duration-500">
              Login
            </Button>
          </form>
            <div className="gap-4 md:gap-6 flex items-center">
              <span className="w-full h-0.5 bg-dovengray bg-opacity-25"></span>
              <p className="text-xl text-dovengray !leading-7 font-medium">
                OR
              </p>
              <span className="w-full h-0.5 bg-dovengray bg-opacity-25"></span>
            </div>
            <div className="flex my-6 sm:my-7 md:my-8 lg:my-10 flex-col gap-4">
              <Button className="!text-white rounded-[40px] h-12 sm:h-14 md:h-[64px] font-normal">
                <GoogleIcon />{" "}
                <span className="ms-2.5 md:ms-4 text-base leading-none">
                  Continue with Google
                </span>
              </Button>
              <Button className="!text-white rounded-[40px] h-12 sm:h-14 md:h-[64px] font-normal">
                <Facebook />{" "}
                <span className="ms-2.5 md:ms-4 text-base leading-none">
                  Continue with Facebook
                </span>
              </Button>
              <Button className="!text-white rounded-[40px] h-12 sm:h-14 md:h-[64px] font-normal">
                <Apple />{" "}
                <span className="ms-2.5 md:ms-4 text-base leading-none">
                  Continue with Apple
                </span>
              </Button>
            </div>
            <div className="flex justify-center">
              <Link
                className="text-white text-sm font-normal hover:opacity-60 duration-500 hover:before:w-0 before:duration-300 relative before:absolute before:w-full before:h-[1px] before:bg-white before:bottom-[-2px] "
                href="/forgot-password"
              >
                Forget your password?
              </Link>
            </div>
          </div>
          <div className=" bg-lightgray rounded-[26px] w-full max-w-[526px] p-5 sm:p-6 md:p-[30px] mt-2.5">
            <div className="flex justify-center items-center border border-lightBlack py-3 md:py-4 lg:py-[18px] rounded-[14px] hover:border-pink duration-300">
              <p className="text-base text-white font-normal">
                Don’t have account?
              </p>
              <Link
                className="text-pink text-sm font-normal hover:opacity-60 duration-500 hover:before:w-0 before:duration-300 relative before:absolute before:w-full before:h-[1px] ms-1 before:bg-pink before:bottom-[0px] "
                href="/sign-up"
              >
                {" "}
                Create Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
