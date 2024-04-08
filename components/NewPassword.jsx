"use client";
import React, { useState } from "react";
import { Apple, Eye, Facebook, GoogleIcon, Logo } from "./common/Icon";
import { Button } from "./ui/button";
import Link from "next/link";
import { CommonLable } from "./common/CommonLable";
import { Input } from "./ui/input";
import SuccessFull from "./SuccessFull";

const NewPassword = ({setSuccessfully, setIsOpen}) => {
  const [newPassword, setNewPassword] = useState(false);
  const intialData = {
    password: "",
    confirmPassword: "",
  };
  const [formdata, setFormdata] = useState(intialData);
  const [showPassword, setShowPassword] = useState(false);
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#])[A-Za-z\d@#]{8,}$/;
  // ============ ERROR STATE ==============
  const [error, setError] = useState({
    password: false,
    confirmPassword: false,
  });
  // =========== GET VALUES FROM INPUTS =============
  const handleInputChange = (field, value) => {
    setFormdata({ ...formdata, [field]: value });
    // ================ VALIDATE IN REAL TIME ===========
    switch (field) {
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
      formdata.confirmPassword.trim() === "" ||
      formdata.password.trim() === ""
    ) {
      setError({
        password: formdata.password.trim() === "",
        confirmPassword: formdata.confirmPassword.trim() === "",
      });
      return;
    }

    // Check regex patterns
    if (!regexPassword.test(formdata.password)) {
      setError({ ...error, password: true });
      return;
    }
    if (formdata.confirmPassword !== formdata.password) {
      setError({ ...error, confirmPassword: true });
      return;
    }
    console.log(formdata);
    // Clear form data and reset error state after successful submission
    setFormdata(intialData);
    setNewPassword(true)
    setError({
      password: false,
      confirmPassword: false,
    });
  };

  return (
    <>
      {newPassword ? (
        <SuccessFull
          setSuccessfully={setSuccessfully}
          setIsOpen={setIsOpen}
        />
      ) : (
        <div className="max-w-[526px] w-full px-3 sm:px-0 lg:py-10 md:py-8 py-6">
          <div className="flex gap-3 items-center justify-center mb-6 sm:mb-7 md:mb-8 lg:mb-10">
            <Logo />{" "}
            <h1 className="text-[40px] text-white font-bold">CupidAI</h1>
          </div>
          <div className=" bg-lightgray md:rounded-[26px] rounded-2xl w-full max-w-[526px] p-5 sm:p-6 md:p-[30px]">
            <h2 className="text-white font-medium text-[32px]">
              Forgot Password
            </h2>
            <p className="text-white text-opacity-60 text-base mb-6 sm:mb-7 md:mb-8 lg:mb-10">
              Enter new password. It should not be same as previous password.
            </p>
            <form onSubmit={formSubmit}>
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
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-[18px] top-[50%] -translate-y-[50%] cursor-pointer"
                  >
                    <Eye />
                  </span>
                </div>
                {error.password && (
                  <p className="text-red-700  text-[10px] font-normal absolute -bottom-[18px] left-0">
                    {formdata.password.trim() === ""
                      ? "Please enter your new password!"
                      : "password must be strong!"}
                  </p>
                )}
              </div>
              <div className="relative">
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
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-[18px] top-[50%] -translate-y-[50%] cursor-pointer"
                  >
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
              <Button className="!text-white mt-6 sm:mt-7 md:mt-8 lg:mt-10 py-3 md:py-4 lg:py-[18px] bg_pinkGradient hover:!border-lightBlack duration-500">
                Submit
              </Button>
            </form>
          </div>
          <div className=" bg-lightgray md:rounded-[26px] rounded-2xl w-full max-w-[526px] p-5 sm:p-6 md:p-[30px] mt-2.5">
            <div className="flex justify-center items-center border bg-gray cursor-pointer border-lightBlack py-3 md:py-4 lg:py-[18px] rounded-[14px] hover:border-pink duration-300">
              <p className="text-base text-white font-normal">
                Already have an account?
              </p>
              <Link
                className="text-pink text-sm font-normal hover:opacity-60 duration-500 hover:before:w-0 before:duration-300 relative before:absolute before:w-full before:h-[1px] ms-1 before:bg-pink before:bottom-[0px] "
                href="/"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewPassword;
