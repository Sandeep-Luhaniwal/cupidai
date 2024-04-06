"use client"
import React, { useState } from "react";
import { Captcha, Eye, Logo } from "./common/Icon";
import { CommonLable } from "./common/CommonLable";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import Link from "next/link";

const SignUp = () => {
  const intialData = {
    email: "",
    password: "",
    confirmPassword: "",
  }
  const [formdata, setFormdata] = useState(intialData);
  const [showPassword, setShowPassword] = useState(false);
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#])[A-Za-z\d@#]{8,}$/;
  const [error, setError] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleInputChange = (field, value) => {
    setFormdata({ ...formdata, [field]: value });
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (
      formdata.confirmPassword.trim() === "" ||
      formdata.email.trim() === "" ||
      formdata.password.trim() === ""
    ) {
      setError({
        email: formdata.email.trim() === "",
        password: formdata.password.trim() === "",
        confirmPassword: formdata.confirmPassword.trim() === "",
      });
      return;
    }
    if (!regexEmail.test(formdata.email)) {
      setError({ ...error, email: true });
      return;
    }
    if (!regexPassword.test(formdata.password)) {
      setError({ ...error, password: true });
      return;
    }
    if (formdata.confirmPassword !== formdata.password) {
      setError({ ...error, confirmPassword: true });
      return;
    }
    console.log(formdata)
    setFormdata(intialData);
    setError({
      email: false,
      password: false,
      confirmPassword: false,
    });
    // If all checks passed, you can submit the form here
  };

  return (
    <div className="min-h-screen bg-mainbg bg-cover bg-no-repeat flex justify-center items-center">
      <div className="max-w-[526px] w-full px-3 sm:px-0">
        <div className="flex items-center gap-3 justify-center mb-10">
          <Logo />
          <h1 className="text-[40px] text-white font-bold">CupidAI</h1>
        </div>
        <div className="p-5 sm:p-6 md:p-[30px] w-full bg-lightgray rounded-[26px]">
          <h2 className="text-[32px] font-medium text-white leading-[38.73px]">
            Sign up
          </h2>
          <p className="text-base font-normal text-white opacity-60 leading-[19.36px] mb-10">
            Sign up for free to access to in any of our products
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
            <div className="mb-10 relative">
              <CommonLable
                htmlFor={"confirmPassword"}
                lableText={"Confirm Password"}
              />
              <div className="relative">
                <Input
                 type={showPassword ? "text" : "password"}
                  className="pe-12"
                  placeholder={"Enter Password"}
                  value={formdata.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                />
                <span  onClick={togglePasswordVisibility} className="absolute right-[18px] top-[50%] -translate-y-[50%] cursor-pointer">
                  <Eye />
                </span>
              </div>
              <p className="leading-[12.1px] text-[10px] font-normal text-dovengray mt-[5px]">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
              {error.confirmPassword && (
              <p className="text-red-700  text-[10px] font-normal absolute -bottom-[18px] left-0">
                {formdata.confirmPassword.trim() === ""
                  ? "Please enter your confirm password!"
                  : "password does not match!"}
              </p>
            )}
            </div>
            <div className="flex items-center gap-2 mb-12">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="cursor-pointer font-normal text-base leading-[19.36px] text-boulder">
                Agree to our
                <a href="#" className="underline mx-2">
                  Terms of use
                </a>
                and
                <a href="#" className="underline ms-2">
                  Privacy Policy
                </a>
              </label>
            </div>
            <div className="max-w-[383px] w-full px-6 py-[10px] rounded-[10px] bg-gray flex items-center justify-between mb-10">
              <div className="flex items-center gap-2">
                <Checkbox id="captcha" />
                <label htmlFor="captcha" className="cursor-pointer font-normal text-base leading-[19.36px] text-boulder">
                  I’m not a robot
                </label>
              </div>
              <span>
                <Captcha />
              </span>
            </div>

            <Button className="!text-white py-3 md:py-4 lg:py-[18px] bg_pinkGradient hover:!border-lightBlack duration-500">
              Sign up
            </Button>
          </form>
          <Link
            href={"/"}
            className="w-full block text-center text-base text-white border border-lightBlack py-3 md:py-4 lg:py-[18px] rounded-[14px] !leading-none hover:border-pink duration-300 mt-4"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

