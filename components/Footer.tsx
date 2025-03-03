import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full h-auto bg-[#e8eafc20] py-[2.58rem] lg:py-0  ">
      <center className="flex justify-center items-center flex-col lg:flex-row gap-10">
        <div className="">
        <Image src="/footer.svg" alt="footer" width={300} height={500} className=""/>
        <ul className=" hidden mt-[10rem] lg:flex gap-2 shrink-0">
              <li>
                <Link href={"https://www.instagram.com/jobspring._?igsh=ajJtMWhpd2Uybmpu&utm_source=qr"}>
                  <Image
                    src="/insta.svg"
                    alt="instagram"
                    width={57}
                    height={57}
                  />
                </Link>
              </li>
              <li>
                <Link href={"https://www.linkedin.com/company/job-spring/"}>
                  <Image
                    src="/linkedin.svg"
                    alt="linkedin"
                    width={57}
                    height={57}
                  />
                </Link>
              </li>
              <li>
                <Link href={"https://x.com/jobspring__?s=21"}>
                  <Image
                    src="/twitter.svg"
                    alt="twitter"
                    width={57}
                    height={57}
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Image
                    src="/youtube.svg"
                    alt="youtube"
                    width={57}
                    height={57}
                  />
                </Link>
              </li>
            </ul>
            </div> 
            <div className="flex flex-col justify-evenly items-center lg:flex-row-reverse gap-[9.06rem] relative lg:bottom-10 lg:left-10">
        <div className="flex flex-col justify-evenly items-center lg:items-start mt-[2.565rem] lg:mt-3 ">
          <h1 className="text-[18px] text-[#002163] lg:text-[25px] font-bold relative bottom-3">
            Subscribe to our news letter
          </h1>
          <input
            type="text"
            placeholder="your email"
            className="w-[287px] h-[54px] rounded-full lg:rounded-lg placeholder:pl-7 mt-[1.75rem]"
          />
          <Button className="w-[287px] lg:w-[7rem] lg:h-[2rem] h-[54px] rounded-full lg:rounded-lg mt-[0.88rem] bg-primaryColor text-xl lg:text-[0.65rem] hover:bg-primaryColor text-white">Subscribe</Button>
        </div>
        <div className="flex justify-evenly items-center  gap-[4.04rem] relative bottom-[8.5rem] lg:bottom-0 lg:left-11">
          <div className="flex flex-col justify-evenly items-start gap-[0.97rem] lg:gap-[1.4rem]">
            <h1 className="text-[18px] text-[#002163] lg:text-[25px] font-bold mt-[3.6rem] lg:mt-[5.5rem]">
              Company
            </h1>
            <Link href={"/resumeBuilder"}>Resume Builder</Link>
            <Link href={"/interviewCoach"}>Interview Coach</Link>
            <Link href={"/"}>How it works</Link>
            <Link href={"/"}>Contact Us</Link>
            <Link href={"/"}>FAQ&apos;s</Link>
            <Link href={"/"}>About us</Link>
          </div>
          <div className="flex flex-col justify-evenly items-start lg:hidden">
            <h1 className="text-[18px] text-[#002163] lg:text-[25px] font-bold">
              Follow us
            </h1>
            <ul className="grid grid-cols-2 gap-[22.13px] lg:flex  lg:items-center lg:gap-[18px]">
              <li>
                <Link href={"/"}>
                  <Image
                    src="/insta.svg"
                    alt="instagram"
                    width={57}
                    height={57}
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Image
                    src="/linkedin.svg"
                    alt="linkedin"
                    width={57}
                    height={57}
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Image
                    src="/twitter.svg"
                    alt="twitter"
                    width={57}
                    height={57}
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Image
                    src="/youtube.svg"
                    alt="youtube"
                    width={57}
                    height={57}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </center>
    </div>
  );
}

export default Footer;
