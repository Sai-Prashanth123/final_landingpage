import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

function Hero(props:{h1:string,p1:string,src:string,button:string,buttonClass:string,ImageName:string}) {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">{props.h1}</h1>
      <p className="mb-8 leading-relaxed">{props.p1}</p>
      <div className="flex w-full md:justify-start justify-center items-end">
      <Button className={props.buttonClass}>{props.button}</Button>
    </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className={`object-cover object-center rounded ${props.ImageName}`} alt="hero" src={props.src} width={720} height={600}/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero