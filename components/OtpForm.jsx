"use client"
import React from "react";
import { CommonLable } from "./common/CommonLable";
import { Logo } from "./common/Icon";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

const OtpForm = () => {
  return (
    <div className="min-h-screen bg-mainbg bg-cover bg-no-repeat flex justify-center items-center">
      <div className="max-w-[526px] w-full px-3 sm:px-0">
        <div className="flex items-center gap-3 justify-center mb-10">
          <Logo />
          <h1 className="text-[40px] text-white font-bold">CupidAI</h1>
        </div>
        <div className=" p-[30px] w-full bg-lightgray rounded-[26px]">
          <h2 className="text-[32px] font-medium text-white leading-[38.73px] mb-[2px]">
          Forgot Password
          </h2>
          <p className="text-base font-normal text-white opacity-60 leading-[19.36px] mb-10">
          Loss password? Don’t worry we got you.
          </p>
          <div className="mb-10">
            <div className="flex items-center justify-between">
          <CommonLable
              htmlFor={"otp"}
              lableText={"OTP"}
            />
            <p className="font-normal text-xs leading-[20px] text-white opacity-50 mb-2">Resend in 00:45s</p></div>
            <div className="flex gap-2 items-center">
            <Input type={"number"} placeholder={"0"} className="px-7" />
            <Input type={"number"} placeholder={"0"} className="px-7" />
            <Input type={"number"} placeholder={"0"} className="px-7" />
            <Input type={"number"} placeholder={"0"} className="px-7" />
            <Input type={"number"} placeholder={"0"} className="px-7" />
            </div>
          </div>
          <Button className="!text-white py-3 md:py-4 lg:py-[18px] bg_pinkGradient hover:!border-lightBlack duration-500">
          Verify
            </Button>
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
    </div>
  );
};

export default OtpForm;
