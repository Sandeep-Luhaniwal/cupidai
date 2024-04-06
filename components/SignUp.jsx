"use client";
import React from "react";
import { Captcha, Eye, Logo } from "./common/Icon";
import { CommonLable } from "./common/CommonLable";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-mainbg bg-cover bg-no-repeat flex justify-center items-center">
      <div className="max-w-[526px] w-full px-3 sm:px-0">
        <div className="flex items-center gap-3 justify-center mb-10">
          <Logo />
          <h1 className="text-[40px] text-white font-bold">CupidAI</h1>
        </div>
        <div className=" p-[30px] w-full bg-lightgray rounded-[26px]">
          <h2 className="text-[32px] font-medium text-white leading-[38.73px]">
            Sign up
          </h2>
          <p className="text-base font-normal text-white opacity-60 leading-[19.36px] mb-10">
            Sign up for free to access to in any of our products{" "}
          </p>
          <div className="mb-6">
            <CommonLable
              htmlFor={"Email address"}
              lableText={"Email address"}
            />
            <Input placeholder={"Enter Email"} />
          </div>
          <div className="mb-6">
            <CommonLable htmlFor={"Password"} lableText={"Password"} />
            <div className="relative">
              <Input className="pe-12" placeholder={"Enter Password"} />
              <span className="absolute right-[18px] top-[50%] -translate-y-[50%] cursor-pointer">
                <Eye />
              </span>
            </div>
          </div>
          <div className="mb-10">
            <CommonLable
              htmlFor={"ConfirmPassword"}
              lableText={"Confirm Password"}
            />
            <div className="relative">
              <Input className="pe-12" placeholder={"Enter Password"} />
              <span className="absolute right-[18px] top-[50%] -translate-y-[50%] cursor-pointer">
                <Eye />
              </span>
            </div>
            <p className="leading-[12.1px] text-[10px] font-normal text-dovengray mt-[5px]">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          </div>
          <div className="flex items-center gap-2 mb-12">
            <Checkbox />
            <p className="cursor-pointer font-normal text-base leading-[19.36px] text-boulder">
              Agree to our{" "}
              <a href="#" className="underline">
                Terms of use{" "}
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
            </p>
          </div>
          <div className="max-w-[383px] w-full px-6 py-[10px] rounded-[10px] bg-gray flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <Checkbox />
              <p className="cursor-pointer font-normal text-base leading-[19.36px] text-boulder">
                I’m not a robot
              </p>
            </div>
            <span>
              <Captcha />
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <Button className="!text-white py-3 md:py-4 lg:py-[18px] bg_pinkGradient hover:!border-lightBlack duration-500" >Sign up</Button>

            <Link href={"/"} className='text-center text-base text-white border border-lightBlack py-3 md:py-4 lg:py-[18px] rounded-[14px] !leading-none hover:border-pink duration-300'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
