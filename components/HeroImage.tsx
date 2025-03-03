"use client"
   import React, { useState, useEffect } from 'react';
   import Image from 'next/image';
   
   function HeroImage() {
     const [imgWidth, setImgWidth] = useState(310);
     const [imgHeight, setImgHeight] = useState(430);
   
     useEffect(() => {
       const handleResize = () => {
         if (typeof window !== 'undefined') {
           const width = window.innerWidth;
           if (width >= 768 && width < 1024) {
             setImgWidth(700);
             setImgHeight(600); // adjust the height accordingly
           } else if (width > 1024) {
             setImgWidth(1300);
             setImgHeight(700); // adjust the height accordingly
           }else if(width == 430){
             setImgWidth(350);
             setImgHeight(430);
           }
           else if(width >= 440){
             setImgWidth(410);
             setImgHeight(430);
           }else {
             setImgWidth(310);
             setImgHeight(430);
           }
         }
       };
       handleResize(); // Set initial value
       window.addEventListener("resize", handleResize);
       return () => window.removeEventListener("resize", handleResize);
     }, []);
   
     return (
       <div>
         <center>
           <Image
             src="/hero.png"
             alt="hero"
             width={imgWidth}
             height={imgHeight}
             className="object-contain flex justify-center max-md:mx-5 md:mx-6 lg:mx-20 max-w-full  absolute top-[28.5rem] md:top-[24rem] lg:top-[32.8rem]"
           />
         </center>
       </div>
     );
   }


export default HeroImage