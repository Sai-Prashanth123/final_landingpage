"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function Last() {
  const bgImage=typeof window !== 'undefined' && window.innerWidth>1240? "url('/lastD.svg')":"url('/last.svg')"
  return (
    <div>
      <center>
        <div
          className=" w-[1245px] h-[375px] mx-[1.5rem] lg:relative lg:left-[45px]"
          style={{
            backgroundImage:bgImage,
            backgroundRepeat: "no-repeat",
            background: "contain",
          }}
        >
          <center>
            <h1 className="text-[20px] pt-16 text-white font-semibold lg:text-[42px] lg:w-[722px] relative w-[14.56rem] right-[29rem] lg:left-[-35px] ">
            Craft Your Future with a Custom Resume & AI Interview Coach
            </h1>
            <Button
              variant={"default"}
              className="rounded-[10px] bg-white hover:bg-white/90 font-semibold z-50 w-[130px] h-[51px] mr-[30px] mt-4 text-primaryColor right-[28rem] lg:w-[210px] lg:h-[66px] lg:text-[19.5px] relative lg:left-[-20px]"
            >
              Create resume
            </Button>
          </center>
        </div>
      </center>

      <center>
        <div className="flex justify-center items-center gap-4 lg:mt-12">
          <Image src="/flask.svg" alt="" width={50} height={100} />
          <h1 className="text-[24px] text-[#A4A9EA] font-semibold lg:text-[44px]">
            #Let the fresh start <span className="text-[#4954D5]">begin!</span>
          </h1>
          <Image src="/flask.svg" alt="" width={50} height={100} />
        </div>
      </center>
    </div>
  );
}

export default Last;
