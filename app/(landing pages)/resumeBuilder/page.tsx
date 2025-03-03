import NavBar from '@/components/NavBar'
import React, { JSX } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Testimonial from '@/components/Testimonial'
import Last from '@/components/Last'
import Footer from '@/components/Footer'
import { Card, CardContent } from "@/components/ui/card";
import Faq from '@/components/Faq'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Resume Builder | Create Professional Resumes | JobSpring',
  description: 'Create ATS-friendly, professional resumes in minutes with JobSprings AI resume builder. Tailored templates, smart suggestions, and instant customization for your dream job.',
  keywords: 'AI resume builder, professional resume, CV maker, ATS-friendly resume, job application, resume templates',
  openGraph: {
    title: 'AI Resume Builder | Create Professional Resumes | JobSpring',
    description: 'Create ATS-friendly, professional resumes in minutes with JobSprings AI resume builder.',
    type: 'website',
    url: 'https://jobspring.com/resume-builder',
  }
}

function page() {
  return (
    <div className='overflow-x-hidden'>

      <NavBar/>
      {/* hero section */}
      <section>
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-5 lg:gap-0  mt-[14.88rem] pb-20">
          <div className="w-full lg:w-1/2">
         <div style={{backgroundImage: "url('/resumeLandingM.svg')", backgroundRepeat: "no-repeat", background: "contain"}} className='w-full h-screen scale-[1.23]  -z-40 absolute top-[31rem] right-[3rem] sm:hidden'></div>
          {/* <div
              style={{
                backgroundImage: "url('/resumeLanding.svg')",
                backgroundRepeat: "no-repeat",
                background: "contain",
              }}
              className="w-[978px] h-[732px] md:hidden lg:block -z-40 absolute top-[0rem] right-0 hidden sm:block"
            ></div> */}
            <Image
              src="/feature1.svg"
              alt="Interview Coach"
              width={400}
              height={400}
              className="mx-auto h-auto"
            />
          </div> 
          <div className="w-full lg:w-[43rem] text-center lg:text-left lg:relative lg:left-20">
            <div className="text-center lg:text-left">
            <h3 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className='text-primaryColor'> Craft Tailored</span> <br />Resumes
              in Seconds
            </h3>
            <p className="text-[16px] lg:text-lg text-gray-600 mb-8 mx-9 md:mx-0 lg:mx-0">
              AI-crafted resumes tailored to match your dream job, effortlessly
            </p>
            </div>
            <Button className="bg-primaryColor text-white px-8 py-3 rounded-lg text-lg mx-9 lg:mx-0 w-[170px] h-[67.33px]">
            Try for free
            </Button>
          </div>
          </div>
      </section>
      {/* Feature */}
      <section className='mt-[10.75re]  pt-[3.75rem] bg-[#E8EAFC59]'>
      <h2 className="text-3xl lg:text-4xl font-semibold text-primaryColor text-center">
          Features
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold text-center mt-4 mx-auto max-w-4xl">
        All you need to land your dream job
        </h1>
        <p className='mx-[70px] mt-[0.88rem] text-xl text-center text-[#011948B2]'>We provide the best features to help you get your dream job.</p>
        <center>
        <div className='flex flex-col justify-evenly items-center lg:flex-row md:relative md:right-56 pb-10'>
        <Image src="/ResumeSec1.svg" width={800} height={300} className='w- h-auto mx-auto' alt={'resume'}/> 
        {/* <Frame/> */}
        <Image src={"/resumeBulSec2.svg"} alt='' width={400} height={50} className='mx-auto h-auto hidden md:block md:relative md:left-48 lg:left-0'/>
        <Image src={"/resumeBulSec2.svg"} alt='' width={300} height={50} className='mx-auto h-auto block md:hidden '/>
        </div>
        </center>
      </section>
      {/* Steps */}
      <section className='h-[60.25rem] md:h-[26.23rem] lg:h-[54.23rem] bg-[#E8EAFC33]'>
      <div className="w- -z-30 h-48 lg:h-[546px] bg-gradient-to-br from-[#A4A9EA] via-[#4954D5] to-[#1B29CB]">
        <center>
          <h1 className='text-3xl lg:text-5xl font-bold font-inter text-white pt-[1.25rem] lg:pt-[6.25rem]'>How it work&apos;s</h1>
          <p className='text-lg lg:text-xl text-white'>Build and optimize your resume with AI in minutes</p>
          <div className=''>
            <div className='flex flex-col gap-4 justify-center items-center mx-4 md:mx-16 lg:mx-32 md:flex-row relative top-6 lg:top-40'>
              <Image src="/HowSec1.svg" width={200} height={200} className='h-auto lg:hidden' alt={'resume'} /> 
              <Image src="/HowSec2.svg" width={200} height={200} className='h-auto lg:hidden' alt={'resume'} /> 
              <Image src="/HowSec3.svg" width={200} height={200} className='h-auto lg:hidden' alt={'resume'} /> 
              <div className='flex justify-center items-center'>
              <Image src="/HowSec1.svg" width={300} height={200} className='h-auto hidden lg:block' alt={'resume'} /> 
              <Image src="/HowSec2.svg" width={300} height={200} className='h-auto hidden lg:block' alt={'resume'} /> 
              <Image src="/HowSec3.svg" width={300} height={200} className='h-auto hidden lg:block' alt={'resume'} /> 
              </div>
            </div>
            </div>
        </center>
      </div>
      </section>
      {/* why choose us */}
      <section className='mt-[5rem]'>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          Why users choose Jobspring
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center p-6">
            <Image src="/money.svg" alt="Free" width={76} height={50} className="mx-auto"/>
            <h3 className="text-xl lg:text-2xl font-bold mt-6 mb-4">Free of cost</h3>
            <p className="text-base lg:text-lg text-gray-600">
              Create a professional resume for free! Our builder empowers job seekers by removing financial barriers.
            </p>
          </div>
          <div className="text-center p-6">
            <Image src="/ats.svg" alt="ATS" width={76} height={50} className="mx-auto"/>
            <h3 className="text-xl lg:text-2xl font-bold mt-6 mb-4">90+ ATS Score Resume</h3>
            <p className="text-base lg:text-lg text-gray-600">
              Create ATS-optimized resumes with 90+ score to boost your chances with recruiters.
            </p>
          </div>
          <div className="text-center p-6">
            <Image src="/inter.svg" alt="Interview" width={76} height={50} className="mx-auto"/>
            <h3 className="text-xl lg:text-2xl font-bold mt-6 mb-4">Interview Coach</h3>
            <p className="text-base lg:text-lg text-gray-600">
              Effortlessly land your dream job with Auto Apply, Job Tracking, and Interview AI.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Button className="bg-primaryColor text-white px-12 py-4 w-[233px] h-[74px] rounded-xl text-lg hover:bg-[#1b2acbc4]">
            Try for free
          </Button>
        </div>
      </div>
      </section>
      {/* Testimonials */}
      <div className='mt-[5.03rem] bg-[#E8EAFC59] lg:h-[140rem] h-[100rem] pt-[5rem]'>
      <section className=''>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h3 className="text-2xl lg:text-3xl text-primaryColor font-semibold">Testimonials</h3>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4">
            Hear from our successful users
          </h2>
        </div>
        <Testimonial />
      </div>
      </section>
      <section>
      <div className="container mx-auto px-4 md:px-8 mt-[7rem]">
        <h2 className="text-3xl lg:text-4xl font-bold text-primaryColor text-center mb-12">
          Frequently Asked Questions
        </h2> 
        <Faq/>
      </div>
      </section>
      </div>
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
   
  )
}

export default page


const features = [
  {
    icon: "/coro1.svg",
    title: "Instant customization",
    description:
      "Create a tailored resume in seconds, aligned with your target job.",
    bgColor: "bg-[#2e3bd1]",
  },
  {
    icon: "/coro2.svg",
    title: "ATS Optimization",
    description:
      "Optimize your resume with keywords & formatting to pass systems.",
    bgColor: "bg-[#4451e2]",
  },
  {
    icon: "/coro3.svg",
    title: "Time-Saving",
    description:
      "Eliminate hours of manual effort—let our AI streamline your resume-building process effortlessly.",
    bgColor: "bg-[#4451e2]",
  },
  {
    icon: "/coro4.svg",
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
                <Image className="w-[150px] h-[34px]" width={100} height={34} src={feature.icon} alt='icon'  />
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

