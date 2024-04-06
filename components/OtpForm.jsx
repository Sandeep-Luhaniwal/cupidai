"use client";
import React, { useState } from "react";
import { CommonLable } from "./common/CommonLable";
import { Logo } from "./common/Icon";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import NewPassword from "./NewPassword";

const OtpForm = ({ setSuccessfully, setIsOpen }) => {
  const [otpUpdate, setOtpUpdate] = useState(false);
  const intialData = {
    firstOtp: "",
    secondOtp: "",
    thirdOtp: "",
    forthOtp: "",
    fifthOtp: "",
  };
  const [formdata, setFormdata] = useState(intialData);
  // ============ ERROR STATE ==============
  const [error, setError] = useState({
    firstOtp: false,
    secondOtp: false,
    thirdOtp: false,
    forthOtp: false,
    fifthOtp: false,
  });
  // =========== GET VALUES FROM INPUTS =============
  const handleInputChange = (field, value) => {
    if (value.length > 1) {
      value = value.substring(0, 1);
    }
    setFormdata({ ...formdata, [field]: value });
    // ================ VALIDATE IN REAL TIME ===========
    switch (field) {
      case "firstOtp":
        setError({
          ...error,
          firstOtp: value.trim() === "",
        });
        break;
      case "secondOtp":
        setError({
          ...error,
          secondOtp: value.trim() === "",
        });
        break;
      case "thirdOtp":
        setError({
          ...error,
          thirdOtp: value.trim() === "",
        });
        break;
      case "forthOtp":
        setError({
          ...error,
          forthOtp: value.trim() === "",
        });
        break;
      case "fifthOtp":
        setError({
          ...error,
          fifthOtp: value.trim() === "",
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
      formdata.firstOtp.trim() === "" ||
      formdata.secondOtp.trim() === "" ||
      formdata.thirdOtp.trim() === "" ||
      formdata.forthOtp.trim() === "" ||
      formdata.fifthOtp.trim() === ""
    ) {
      setError({
        firstOtp: formdata.firstOtp.trim() === "",
        secondOtp: formdata.secondOtp.trim() === "",
        thirdOtp: formdata.thirdOtp.trim() === "",
        forthOtp: formdata.forthOtp.trim() === "",
        fifthOtp: formdata.fifthOtp.trim() === "",
      });
      return;
    }

    console.log(formdata);
    // Clear form data and reset error state after successful submission
    setFormdata(intialData);
    setOtpUpdate(true);
    setError({
      firstOtp: false,
      secondOtp: false,
      thirdOtp: false,
      forthOtp: false,
      fifthOtp: false,
    });
  };

  return (
    <>
    {otpUpdate ? (<NewPassword setSuccessfully={setSuccessfully} setIsOpen={setIsOpen} />) : (
    <div className="max-w-[526px] w-full px-3 sm:px-0">
      <div className="flex items-center gap-3 justify-center mb-10">
        <Logo />
        <h1 className="text-[40px] text-white font-bold">CupidAI</h1>
      </div>
      <div className="p-5 sm:p-6 md:p-[30px] w-full bg-lightgray rounded-[26px]">
        <h2 className="text-[32px] font-medium text-white leading-[38.73px] mb-[2px]">
          Forgot Password
        </h2>
        <p className="text-base font-normal text-white opacity-60 leading-[19.36px] mb-10">
          Loss password? Don’t worry we got you.
        </p>
        <form onSubmit={formSubmit}>
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <CommonLable htmlFor={"otp"} lableText={"OTP"} />
            <p className="font-normal text-xs leading-[20px] text-white opacity-50 mb-2">
              Resend in 00:45s
            </p>
          </div>
         
          <div className="flex gap-2 items-center">
            <Input value={formdata.firstOtp} onChange={(e) => handleInputChange("firstOtp", e.target.value)} type={"number"} placeholder={"0"} className="sm:px-9 px-4" />
            <Input value={formdata.secondOtp} onChange={(e) => handleInputChange("secondOtp", e.target.value)} type={"number"} placeholder={"0"} className="sm:px-9 px-4" />
            <Input value={formdata.thirdOtp} onChange={(e) => handleInputChange("thirdOtp", e.target.value)} type={"number"} placeholder={"0"} className="sm:px-9 px-4" />
            <Input value={formdata.forthOtp} onChange={(e) => handleInputChange("forthOtp", e.target.value)} type={"number"} placeholder={"0"} className="sm:px-9 px-4" />
            <Input value={formdata.fifthOtp} onChange={(e) => handleInputChange("fifthOtp", e.target.value)} type={"number"} placeholder={"0"} className="sm:px-9 px-4" />
          </div>
        </div>
        <Button className="!text-white py-3 md:py-4 lg:py-[18px] bg_pinkGradient hover:!border-lightBlack duration-500">
          Verify
        </Button>
        </form>
      </div>
      <div className=" bg-lightgray rounded-[26px] w-full max-w-[526px] p-5 sm:p-6 md:p-[30px] mt-2.5">
        <div className="flex justify-center items-center border border-lightBlack py-3 md:py-4 lg:py-[18px] rounded-[14px] hover:border-pink duration-300">
          <p className="text-base text-white font-normal">
            Already have an account?
          </p>
          <Link
            className="text-pink text-sm font-normal hover:opacity-60 duration-500 hover:before:w-0 before:duration-300 relative before:absolute before:w-full before:h-[1px] ms-1 before:bg-pink before:bottom-[0px] "
            href="/"
          >
            {" "}
            Login
          </Link>
        </div>
      </div>
    </div>
  )}
  </>
  );
};

export default OtpForm;
