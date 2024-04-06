"use client"
import Link from "next/link";
import { useState } from "react";
import { CommonLable } from "./common/CommonLable";
import { Logo } from "./common/Icon";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import OtpForm from "./OtpForm";

const ForgotPassword = (props) => {
  let [isOpen, setIsOpen] = useState(false);
  let [successfully, setSuccessfully] = useState(false);
  const intialData = {
    email: "",
  }
  const [formdata, setFormdata] = useState(intialData);
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // ============ ERROR STATE ==============
  const [error, setError] = useState({
    email: false,
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
      default:
        break;
    }
  };
  // ========== FORM SUBMITION FUNCTION ===============
  const formSubmit = (e) => {
    // Prevent page reload after form submission
    e.preventDefault();
 
    // Check for empty fields
    if (
      formdata.email.trim() === ""
    ) {
      setError({
        email: formdata.email.trim() === "",
      });
      return;
    }
  
    // Check regex patterns
    if (!regexEmail.test(formdata.email)) {
      setError({ ...error, email: true });
      return;
    }
    console.log(formdata)
    // Clear form data and reset error state after successful submission
    setFormdata(intialData);
    setError({
      email: false,
    });
    setSuccessfully(true);
  };
  
  return (
    <>
      <div className="min-h-screen bg-mainbg bg-cover bg-no-repeat flex justify-center items-center">
        <div  className={`${successfully ? "hidden" : "" } max-w-[526px] w-full px-3 sm:px-0`}>
          <div className="flex gap-3 items-center justify-center mb-6 sm:mb-7 md:mb-8 lg:mb-10">
            <Logo />{" "}
            <h1 className="text-[40px] text-white font-bold">CupidAI</h1>
          </div>
          <div className=" bg-lightgray rounded-[26px] w-full max-w-[526px] p-5 sm:p-6 md:p-[30px]">
            <h2 className="text-white font-medium text-[32px]">
              Forgot Password
            </h2>
            <p className="text-white text-opacity-60 text-base mb-10">
              Loss password? Don’t worry we got you.
            </p>
            <form onSubmit={formSubmit}>
            <div className="relative">
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
            <Button className="!text-white mt-6 sm:mt-7 md:mt-8 lg:mt-10 py-3 md:py-4 lg:py-[18px] bg_pinkGradient hover:!border-lightBlack duration-500">
              Send OTP
            </Button>
            </form>
          </div>
          <div className=" bg-lightgray rounded-[26px] w-full max-w-[526px] p-5 sm:p-6 md:p-[30px] mt-2.5">
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
        {successfully && <OtpForm setIsOpen={setIsOpen} setSuccessfully={setSuccessfully} />}
      </div>
    </>
  );
};

export default ForgotPassword;
