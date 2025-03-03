import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Goodbye from "@/components/Goodbye";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";
import Corousal from "@/components/Corousal";
import Last from "@/components/Last";
import Flake from "@/components/Flake";
import MasonryCarousel from "@/components/Testimonial";
import Faq from "@/components/Faq";
import type { Metadata } from 'next'
import Feedback from "@/components/feedback";
export const metadata: Metadata = {
  title: 'JobSpring | AI-Powered Job Search Tools & Career Resources',
  description: 'Transform your job search with JobSprings AI-powered tools. Create professional resumes, practice interviews, and track applications - all in one platform.',
  keywords: 'job search, career tools, AI resume builder, interview practice, job application tracking, career resources',
  openGraph: {
    title: 'JobSpring | AI-Powered Job Search Tools & Career Resources',
    description: 'Transform your job search with JobSprings AI-powered tools.',
    type: 'website',
    url: 'https://jobspring.com',
  }
}

export default function Home() {

  return (
    <main className="font-inter overflow-x-hidden">
    <NavBar />
    {/* Hero Section */}
    {/* <Threads/> */}
    {/* <Feedback /> */}
    <section className="px-4 md:px-8 lg:mt-[14.5rem] mt-[10.5rem] ">
      
      <h1 className="text-center text-[2.17rem] md:text-4xl lg:text-[54px] font-bold mt-16 lg:mt-36 mx-auto max-w-6xl  ">
        AI for Resumes & Interviews
      </h1>
      <p className="text-center text-base md:text-xl lg:text-2xl mt-4 mx-auto max-w-3xl ">
        Create tailored resumes and ace interviews with AI<br className="hidden md:block" />
        tools designed to land your dream job
      </p>

      
      <div className="flex justify-center mt-8">
        <Button
          variant={"default"}
          className="lg:w-[188px] lg:h-[73.33px] rounded-[15px] w-[130px] h-[51.5px] bg-[#1B29CB] hover:bg-[#1b2acbc0] text-white font-semibold lg:text-[19.67px] text-[13.55px]"
        >
          Try for free
        </Button>
      </div>
      <center>
      <HeroImage />
      </center>
      <div className="w-screen scale-110 right-9 lg:scale-125  h-[11.94rem] md:h-[22.94rem]  -z-30 lg:h-[650px] bg-gradient-to-br from-[#A4A9EA] via-[#4954D5] to-[#1B29CB] mt-20 lg:mt-52 relative overflow-hidden">
        <div className="w-full h-full absolute inset-0 bg-[url('/noise.png')]" />
      </div>
    </section>
  
    {/* Features Section */}
    <section className="bg-[#FAFBFE] py-16 lg:py-32">
      <Flake className="" />
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl lg:text-4xl font-semibold text-primaryColor text-center" id="features">
          Features
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold text-center mt-4 mx-auto max-w-4xl leading-10">
          Simplify Every Step of Your Job <br className="hidden lg:block"/> with Jobspring
        </h1>
        <Flake className="transform rotate-180 z-10 absolute lg:left-[86%] left-[73.5%]  top-[105.4rem]"/>
        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center lg:max-w-[68.62rem] gap-12 mt-16 lg:mx-auto">
          <div className="w-full lg:w-1/2">
            <Image
              src="/feature1.svg"
              alt="Resume Builder"
              width={500}
              height={500}
              className="w-[20.77rem] mx-auto h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:ml-[6.06rem] ">
            <h3 className="text-2xl lg:text-4xl font-bold mb-6 lg:w-[33.5rem]">
              A resume builder tailored to your job description
            </h3>
            <p className="hidden lg:block text-base lg:text-xl text-gray-600 mb-8 lg:w-[33.5rem] w-[20rem] mx-auto">
            Effortlessly create resumes that match job descriptions with AI-powered precision. Optimize your chances of landing the perfect job with smart suggestions tailored to your dream role.
            </p>
            <p className="lg:hidden text-base lg:text-xl text-gray-600 mb-8 lg:w-[33.5rem] w-[20rem] mx-auto">
            Create AI-optimized resumes tailored to job descriptions and boost your chances of landing your dream job
            </p>
            <Button className="bg-primaryColor text-white hover:bg-[#1b2acbe3] px-8 py-3 w-[188px] h-[62px] rounded-xl text-lg">
              Create resume
            </Button>
          </div>
          </div>
        </div>
  
        {/* Feature 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:max-w-[68.62rem] gap-12 mt-16 lg:mx-auto">
          <div className="w-full lg:w-1/2">
            <Image
              src="/feature2.svg"
              alt="Resume Builder"
              width={500}
              height={500}
              className="w-[20.77rem] mx-auto h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:mr-[6.06rem] ">
            <h3 className="text-2xl lg:text-4xl font-bold mb-6 lg:w-[33.5rem]">
            AI-Powered Interview Coach to Master Your Skills
            </h3>
            <p className="hidden lg:block text-base lg:text-xl text-gray-600 mb-8 lg:w-[33.5rem] w-[20rem] mx-auto">
            Level up your preparation with our AI-driven platform. Practice scenarios, get feedback, and boost your confidence for your dream role.
             </p>
            <p className="lg:hidden text-base lg:text-xl text-gray-600 mb-8 lg:w-[33.5rem] w-[20rem] mx-auto">
            Create AI-optimized resumes tailored to job descriptions and boost your chances of landing your dream job
            </p>
            <Button className="bg-primaryColor text-white hover:bg-[#1b2acbe4] px-8 py-3 w-[236px] h-[62px] rounded-xl text-lg">
              Start Practicing Now
            </Button>
          </div>
        </div>
    </section>
  
    {/* Carousel Section */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-primaryColor text-center">
          All you need to land your dream job
        </h2>
        <p className="text-base lg:text-xl text-center mt-4 mb-12 max-w-2xl mx-auto">
          We provide the best features to help you get your dream job.
        </p>
        <Corousal />
      </div>
    </section>
  
    {/* Say Goodbye Section */}
    <section className="bg-[#f6f8fd62] py-16 lg:py-24 overflow-clip">
    <div style={{backgroundImage:"url('/goodbye.svg')",backgroundRepeat: "no-repeat", background: "cover",}} className='w-full right-[4rem] lg:right-0 scale-100 h-screen absolute top-[186.5rem]  -z-20'></div>
      <div className="container mx-auto px-4 md:px-8 ">
        <Goodbye />
      </div>
    </section>
  
    {/* Why Choose Us Section */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          Why users choose Jobspring
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center p-5">
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
          <Button className="bg-primaryColor text-white px-12 py-4 rounded-xl text-lg w-[233px] h-[74px] hover:bg-[#1b2acbf3]" >
            Try for free
          </Button>
        </div>
      </div>
    </section>
  
    {/* Testimonials Section */}
    <section className="bg-[#E8EAFC33] py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h3 className="text-2xl lg:text-3xl text-primaryColor font-semibold">Testimonials</h3>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4">
            Hear from our successful users
          </h2>
        </div>
        <MasonryCarousel />
      </div>
    </section>
  
    {/* Upcoming Features Section */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto lg:relative left-[9rem] px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[95px]">
          <Image src={"/upcoming.png"} alt={"upcoming"} width={350} height={500} className={" "}/>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-lg lg:text-xl text-primaryColor font-semibold">Upcoming features</p>
            <h2 className="text-3xl lg:text-4xl font-bold my-6">
              Land your dream job with these features
            </h2>
            <p className="text-base lg:text-lg text-gray-600 mb-8">
              Effortlessly land your dream job with Auto Apply, Job Tracking, Interview AI, 
              and Networking—all tailored to boost your success.
            </p>
            <Button className="bg-primaryColor text-white px-8 py-3 rounded-[17.96px] text-lg w-[265px] h-[74px] hover:bg-[#1b2acbd9]">
            <Image src={"/lock.svg"} alt={"upcoming"} width={17} height={500} className={""}/>
              Launching soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  
    {/* FAQ Section */}
    <section className="bg-[#E8EAFC33] py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-primaryColor text-center mb-[82px]">
          Frequently Asked Questions
        </h2>
        <Faq/>
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
  </main>
  );
}
