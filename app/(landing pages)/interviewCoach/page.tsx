import NavBar from "@/components/NavBar";
import React, { JSX } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Testimonial from "@/components/Testimonial";
import Last from "@/components/Last";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Faq from "@/components/Faq";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Interview Coach | Practice Interviews with AI | JobSpring',
  description: 'Practice interviews with AI-powered coaching. Get real-time feedback, personalized tips, and improve your interview skills with JobSpring\'s intelligent interview practice platform.',
  keywords: 'AI interview practice, interview coaching, job interview preparation, interview simulator, AI interview coach, interview skills, JobSpring',
  openGraph: {
    title: 'AI Interview Coach | Practice Interviews with AI | JobSpring',
    description: 'Practice interviews with AI-powered coaching. Get real-time feedback, personalized tips, and improve your interview skills.',
    type: 'website',
    url: 'https://jobspring.com/interview-coach',
  }
}

const InterviewCoachPage = (): JSX.Element => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <section className="mt-[12.38rem]">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:max-w-[68.62rem] gap-12 mt-16 lg:mx-auto">
          <div className="w-full lg:w-1/2">
            {/* <div
              style={{
                backgroundImage: "url('/resumeLandingM.svg')",
                backgroundRepeat: "no-repeat",
                background: "contain",
              }}
              className="w-[5rem] h-[5rem] scale-125 -z-40 absolute top-[31rem] right-[3rem] "
            ></div>
            <div
              style={{
                backgroundImage: "url('/resumeLanding.svg')",
                backgroundRepeat: "no-repeat",
                background: "contain",
              }}
              className="w-[978px] h-[732px] -z-40 absolute top-[0rem] right-0 hidden "
            ></div> */}
            <Image
              src="/feature2.svg"
              alt="Resume Builder"
              width={565}
              height={500}
              className=" mx-auto hidden lg:block h-auto shrink-0"
            />
            <Image
              src="/feature2.svg"
              alt="Resume Builder"
              width={365}
              height={500}
              className=" mx-auto lg:hidden h-auto shrink-0"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:mr-[6.06rem] ">
            <h3 className="text-2xl lg:text-[4rem] w-fulls font-bold leading-[1.2] mb-[18px] lg:w-[37.5rem]">
              <span className="text-primaryColor">Humanized AI</span> Interview
              Practice
            </h3>
            <p className=" text-[16px] md:text-[24px] lg:text-xl text-gray-600 mb-[36px] lg:w-[33.5rem] w-[20rem] mx-auto">
            AI-crafted resumes tailored to match your dream job, effortlessly
            </p>

            <Button className="bg-primaryColor text-white hover:bg-[#1b2acbe4] px-8 py-3 w-[188px] h-[73.33px] rounded-xl text-lg">
              Try for free
            </Button>
          </div>
        </div>
      </section>
      <section className="mt-[10.75rem] pt-[3.75rem] bg-[#E8EAFC59]">
        <h2 className="text-3xl lg:text-4xl font-semibold text-primaryColor text-center">
          Features
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold text-center mt-4 mx-auto max-w-4xl">
          All you need to land your dream job
        </h1>
        <p className="mx-[70px] mt-[0.88rem] text-xl text-center text-[#011948B2]">
          We provide the best features to help you get your dream job.
        </p>

        <div className="flex flex-col justify-center items-center gap-[] mt-12 md:flex-row md:relative md:right-56 pb-10 md:pb-0">
          <Image
            src="/interview2n.svg"
            width={900}
            height={300}
            className="relative right-[80px] h-auto mx-auto"
            alt={"resume"}
          />
          <Image
            src="/interview2n2.svg"
            width={400}
            height={300}
            className=" h-auto hidden lg:block mx-auto"
            alt={"resume"}
          />
          <Image
            src="/interview2n2.svg"
            width={300}
            height={300}
            className=" h-auto mx-auto lg:hidden"
            alt={"resume"}
          />
        </div>
      </section>
      {/* Steps */}
      <section className="h-[60.25rem] md:h-[26.23rem] lg:h-[54.23rem] bg-[#E8EAFC33]">
        <div className="w- -z-30 h-48 lg:h-[546px] bg-gradient-to-br from-[#A4A9EA] via-[#4954D5] to-[#1B29CB]">
          <center>
            <h1 className="text-2xl lg:text-5xl font-bold font-inter text-white pt-[1.25rem] lg:pt-[6.25rem]">
              How it work&apos;s
            </h1>
            <p className="text-md lg:text-xl text-white font-inter">
            Get personalized interview coaching with AI in minutes.
            </p>
            <div className=''>
            <div className='flex flex-col gap-4 justify-center items-center mx-4 md:mx-16 lg:mx-32 md:flex-row relative top-6 lg:top-40'>
              <Image src="/HowSec4.svg" width={200} height={200} className='h-auto lg:hidden' alt={'resume'} /> 
              <Image src="/HowSec5.svg" width={200} height={200} className='h-auto lg:hidden' alt={'resume'} /> 
              <Image src="/HowSec6.svg" width={200} height={200} className='h-auto lg:hidden' alt={'resume'} /> 
              <div className='flex justify-center items-center'>
              <Image src="/HowSec4.svg" width={300} height={200} className='h-auto hidden lg:block' alt={'resume'} /> 
              <Image src="/HowSec5.svg" width={300} height={200} className='h-auto hidden lg:block' alt={'resume'} /> 
              <Image src="/HowSec6.svg" width={300} height={200} className='h-auto hidden lg:block' alt={'resume'} /> 
              </div>
            </div>
            </div>
          </center>
        </div>
      </section>
      {/* Section of prison */}
      <section>
        <center>
          <h1 className="text-primaryColor text-[1.75rem] md:text-[2.75rem] mt-[8.125rem] font-bold mb-[5rem] ">
            Advantages of <br /> JobSpring&apos;s AI Interview
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 px-4 md:px-8 max-w-5xl mx-auto">
            <Image
              src={"/UIM.svg"}
              alt={"uim"}
              width={500}
              height={50}
              className="mx-auto"
            />
            <Image
              src={"/TargetedComapnay.svg"}
              alt={"uim"}
              width={500}
              height={50}
              className="mx-auto"
            />
            <Image
              src={"/ResumeDriven.svg"}
              alt={"uim"}
              width={500}
              height={50}
              className="mx-auto"
            />
            <Image
              src={"/InsightfullAnalytics.svg"}
              alt={"uim"}
              width={500}
              height={50}
              className="mx-auto"
            />
          </div>
          <Button className="bg-primaryColor text-white px-12 py-4 rounded-xl mt-[80px] text-lg w-[233px] h-[74px] hover:bg-[#1b2acbf3]">
            Try for free
          </Button>
        </center>
      </section>
      {/* Testimonials */}
      <section className="mt-[10.03rem] bg-[#E8EAFC59] p-[80px]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h3 className="text-2xl lg:text-3xl text-primaryColor font-semibold">
              Testimonials
            </h3>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">
              Hear from our successful users
            </h2>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* Upcoming Features */}
      <section className="mt-[8.12rem] ">
        <div className="container mx-auto px-4 md:px-8">
          <section className="md:mb-[16.62rem]">
            <div className="flex flex-col lg:flex-row items-center lg:max-w-[68.62rem] gap-12 mt-16 lg:mx-auto">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/Training.jpg"
                  alt="Resume Builder"
                  width={550}
                  height={500}
                  className="w-[20.77rem] mx-auto h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left lg:ml-[-5rem] ">
                <p className="text-primaryColor font-semibold text-[1.49rem] mb-[0.81rem]">
                  Upcoming Features
                </p>
                <h3 className="text-2xl lg:text-4xl font-bold mb-6 lg:w-[33.5rem]">
                  Practice & Train - Your AI-Powered Training Zone
                </h3>
                <p className="hidden lg:block text-base lg:text-xl text-gray-600 mb-8 lg:w-[33.5rem] w-[20rem] mx-auto">
                  Boost your interview confidence with our upcoming Practice &
                  Train feature, a comprehensive training platform.
                </p>
                <Button className="bg-primaryColor text-white hover:bg-[#1b2acbe3] px-8 py-3 w-[266px] h-[72px] rounded-xl text-lg mb-8 md:-mb-36">
                  <Image
                    src={"/lock.svg"}
                    alt="lock"
                    width={17.96}
                    height={50}
                  />
                  Launching Soon
                </Button>
              </div>
            </div>
          </section>
          <section />
          <div className=" container mx-auto px-4 md:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primaryColor text-center mb-[82px]">
              Frequently Asked Questions
            </h2>
            <Faq />
          </div>
        </div>
      </section>
      
      {/* Last Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <Last />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 pt-16 lg:pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default InterviewCoachPage;

const features = [
  {
    icon: "",
    title: "Instant customization",
    description:
      "Create a tailored resume in seconds, aligned with your target job.",
    bgColor: "bg-[#2e3bd1]",
  },
  {
    icon: "",
    title: "ATS Optimization",
    description:
      "Optimize your resume with keywords & formatting to pass systems.",
    bgColor: "bg-[#4451e2]",
  },
  {
    icon: "",
    title: "Time-Saving",
    description:
      "Eliminate hours of manual effort—let our AI streamline your resume-building process effortlessly.",
    bgColor: "bg-[#4451e2]",
  },
  {
    icon: "",
    title: "Smart Highlights",
    description:
      "Highlight your most relevant skills and experiences with AI-powered precision for every application.",
    bgColor: "bg-[#4451e2]",
  },
];

export function Frame(): JSX.Element {
  return (
    <div className="flex flex-col w-full max-w-[334px] gap-[75px] ">
      {features.map((feature, index) => (
        <Card key={index} className="border-none shadow-none bg-[#e8eafc37]">
          <CardContent className="flex items-center gap-[35px] p-0">
            <div className="relative w-[60px] h-[60px]">
              <div
                className={`${feature.bgColor} w-full h-full rounded-full flex items-center justify-center`}
              >
                <Image
                  className="w-[34px] h-[34px]"
                  width={34}
                  height={34}
                  src={feature.icon}
                  alt="icon"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3.5 flex-1">
              <h3 className="font-semibold text-[#002a7f] text-[16.8px] leading-[21.5px]">
                {feature.title}
              </h3>
              <p className="font-medium text-[#011848] text-[13.4px] leading-[18.8px]">
                {feature.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
