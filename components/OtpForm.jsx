"use client";
import React, { useRef, useState } from "react";
import { CommonLable } from "./common/CommonLable";
import { Logo } from "./common/Icon";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import NewPassword from "./NewPassword";

const OtpForm = ({ setSuccessfully, setIsOpen }) => {
  const [otpUpdate, setOtpUpdate] = useState(false);
  const [otpValues, setOtpValues] = useState(['', '', '', '', '']);
  const [error, setError] = useState(false);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index, value) => {
    if (/^\d$/.test(value) || value === '') {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      if (value && index < refs.length - 1) {
        refs[index + 1].current.focus();
      } else if (!value && index > 0) {
        refs[index - 1].current.focus();
      }

      setError(false);
    } else {
      setError(true);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain');
    const otpArray = pasteData.split('').slice(0, 5);
    const newOtpValues = [...otpValues];
    otpArray.forEach((digit, index) => {
      if (/^\d$/.test(digit)) {
        newOtpValues[index] = digit;
      }
    });
    setOtpValues(newOtpValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otpValues.join('');
    const isAnyFieldEmpty = otpValues.some(value => value.trim() === '');
    
    if (isAnyFieldEmpty) {
      setError(true);
    } else {
      setError(false);
      console.log('OTP:', otpValue);
      setOtpUpdate(true)
      // Add further processing here, such as sending the OTP value to the server
    }
  };

  return (
    <>
      {otpUpdate ? (
        <NewPassword setSuccessfully={setSuccessfully} setIsOpen={setIsOpen} />
      ) : (
        <div className="max-w-[526px] w-full px-3 sm:px-0 lg:py-10 md:py-8 py-6">
          <div className="flex items-center gap-3 justify-center mb-10">
            <Logo />
            <h1 className="text-[40px] text-white font-bold">CupidAI</h1>
          </div>
          <div className="p-5 sm:p-6 md:p-[30px] w-full bg-lightgray md:rounded-[26px] rounded-2xl">
            <h2 className="text-[32px] font-medium text-white leading-[38.73px] mb-[2px]">
              Forgot Password
            </h2>
            <p className="text-base font-normal text-white opacity-60 leading-[19.36px] mb-6 sm:mb-7 md:mb-8 lg:mb-10">
              Loss password? Don’t worry we got you.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-10">
                <div className="flex items-center justify-between">
                  <CommonLable htmlFor={"otp"} lableText={"OTP"} />
                  <p className="font-normal text-xs leading-[20px] text-white opacity-50 mb-2">
                    Resend in 00:45s
                  </p>
                </div>

                <div className="flex gap-2 items-center relative">
                {otpValues.map((value, index) => (
          <Input
            key={index}
            ref={refs[index]}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onPaste={handlePaste}
            className="sm:px-9 px-7"
            placeholder={"0"}
          />
        ))}
        {error && <p className="text-red-700  text-[10px] font-normal absolute -bottom-[18px] left-0">Please enter a valid OTP.</p>}
                </div>
              </div>
              <Button className="!text-white py-3 md:py-4 lg:py-[18px] bg_pinkGradient hover:!border-lightBlack duration-500">
                Verify
              </Button>
            </form>
          </div>
          <div className=" bg-lightgray md:rounded-[26px] rounded-2xl w-full max-w-[526px] p-5 sm:p-6 md:p-[30px] mt-2.5">
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
