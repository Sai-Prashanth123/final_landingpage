"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import InfiniteCarousel from "@/components/InfiniteCorousel";

export default function MasonryCarousel() {
  // Detect mobile screens (adjust the breakpoint as needed)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820);
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Standard masonry layout for larger screens (all 9 cards)
  const masonryContent = (
    <ResponsiveMasonry columnsCountBreakPoints={{ 450: 1, 750: 2, 900: 3 }}>
      <Masonry> 
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFive />
        <CardSix />
        <CardSeven />
        <CardEight />
        <CardNine />
      </Masonry>
    </ResponsiveMasonry>
  );

  // Mobile layout: 5 cards in a horizontal flex container
  const mobileCards = (
    <div className="flex flex-row gap-4">
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
    </div>
  );

  return (
    <>
      {isMobile ? (
        // On mobile, wrap the flex container in the InfiniteCarousel for horizontal infinite scrolling
        <InfiniteCarousel baseVelocity={-50}>
          {mobileCards}
        </InfiniteCarousel>
      ) : (
        // On larger screens, display the full masonry grid
        masonryContent
      )}
    </>
  );
}

function CardOne(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[23rem] text-start p-10'>
      <div className='flex items-start flex-col '>
        <div className='flex items-start gap-[0.78rem] mr-7'>
          <span><Image src="/alex.svg" alt="" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Ishaan R.</h1>
            <p className='opacity-30'>Final Year Engineering Student</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'>
          <mark className='bg-[#1B29CB42]'>JobSpring made my placement journey stress-free. </mark>The resume builder highlighted my projects perfectly, and the AI interview bot helped me practice answering tough questions. I aced my first interview and secured an offer!
        </p>
        <p className='self-start opacity-30'>Feb 14th,2025</p>
      </div>
    </div>
  )
}

function CardTwo(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[27.33rem] text-start p-10'>
      <div className='flex items-start flex-col '>
        <div className='flex items-start gap-[0.78rem] mr-7'>
          <span><Image src="/carlos.svg" alt="carlos" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Ananya S</h1>
            <p className='opacity-30'>4th Year B.Tech Student</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'>
          <mark className='bg-[#1B29CB42]'>The AI mock interviews played a crucial role in preparing me for the technical rounds. </mark>They provided real-time practice, helping me build confidence and improve my responses. As a result, I cracked my campus placement effortlessly!
        </p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}

function CardThree(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[13.87rem] text-start p-10'>
      <div className='flex items-start flex-col '>
        <div className='flex items-start gap-[0.78rem] mr-7'>
          <span><Image src="/gab.jpg" alt="" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Rahul V.</h1>
            <p className='opacity-30'>Recent College Graduate</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'>OMG! <mark className='bg-[#1B29CB42]'>Game changer</mark></p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}

function CardFour(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[16.76rem] text-start p-10'>
      <div className='flex items-start flex-col '>
        <div className='flex items-start gap-[0.78rem] mr-7'>
          <span><Image src="/jess.svg" alt="jess" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Rajesh Kumar</h1>
            <p className='opacity-30'>Recent College Graduate</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="stars" width={100} height={100}/></div>
        <p className='w-72 my-4'>I wasn&apos;t getting interview calls until I used <mark className='bg-[#1B29CB42]'>JobSpring&apos;s AI resume builder.</mark> After fixing my resume, I got shortlisted for an MNC!</p>
        <p className='self-start opacity-30'>Jan 20th,2024</p>
      </div>
    </div>
  )
}

function CardFive(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[27rem] text-start p-10'>
      <div className='flex items-start flex-col '>
        <div className='flex items-start gap-[0.78rem] mr-7'>
          <span><Image src="/maria.jpg" alt="" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Kavya Mishra</h1>
            <p className='opacity-30'>4th Year, B.Sc (CS)</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'>
        I used to speak too fast during interviews, which made me sound nervous and unclear. <mark className='bg-[#1B29CB42]'>The AI coach guided me to slow down, articulate my thoughts better, and stay composed. </mark> 
           As a result, I became more confident and improved my overall interview performance!
        </p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}

function CardSix(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[21.89rem] text-start p-10'>
      <div className='flex items-start flex-col '>
        <div className='flex items-start gap-[0.78rem] mr-7'>
          <span><Image src="/Ankit.jpg" alt="" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Ankit pandey</h1>
            <p className='opacity-30'>Recent College Graduate</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'>
        I failed two interviews before using <mark className='bg-[#1B29CB42]'>JobSpring&apos;s AI, but its detailed feedback helped me improve.</mark>    
          With better preparation and insights, I finally cleared a screening round successfully!
        </p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}

function CardSeven(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[22.77rem] text-start p-10'>
      <div className='flex items-start flex-col '>
        <div className='flex items-start gap-[0.78rem] mr-7'>
          <span><Image src="/Nishanth.jpg" alt="" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Nishant Tiwari</h1>
            <p className='opacity-30'>4th Year, BCA</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'>
        The resume templates are clean and professional, making my application stand out. <mark className='bg-[#1B29CB42]'>Thanks to Jobspring, my final-year project attracted more recruiters</mark>  
           and opportunities!
        </p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}

function CardEight(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[14.07rem] text-start p-10'>
      <div className='flex items-start flex-col '>
        <div className='flex items-start gap-[0.78rem] mr-7'>
          <span><Image src="/Pranav.png" alt="" width={50} height={50} className='rounded-[0.8rem]'/></span>
          <div className='text-start'>
            <h1 className='text-[1.06rem] font-semibold'>Pranav Sharma</h1>
            <p className='opacity-30'>Recent College Graduate</p>
          </div>
        </div>
        <div className='self-start'><Image src={"/stars.svg"} alt="" width={100} height={100}/></div>
        <p className='w-72 my-4'> <mark className='bg-[#1B29CB42]'>AI boosted Placement!</mark></p>
        <p className='self-start opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}

function CardNine(){
  return(
    <div className='border-[1.2px] border-[#E8E8E8] bg-[#FFF] border-solid rounded-[1.25rem] w-[23.17rem] h-[25.6rem] text-start p-10'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-start gap-[0.78rem]'>
          <Image src="/Meera.jpg" alt="" width={50} height={50} className='rounded-[0.8rem]'/>
          <div>
            <h1 className='text-[1.06rem] font-semibold'>Meera Gupta </h1>
            <p className='opacity-30'>Recent Graduate, MBA</p>
          </div>
        </div>
        <Image src={"/stars.svg"} alt="" width={100} height={100}/>
        <p className='w-72'>
          Behavioral interviews were always a challenge for me, and I struggled to structure my responses. <mark className='bg-[#1B29CB42]'> JobSpring&apos;s AI guided me on using the STAR method to craft clear and impactful answers.</mark> 
          With this approach, I became more confident and handled behavioral questions with ease!
        </p>
        <p className='opacity-30'>Jan 5,2024</p>
      </div>
    </div>
  )
}
