"use client"
import React from 'react'
import Image from 'next/image'

function Flake(props:{className:string}) {
    const imageWidth = typeof window !== 'undefined' && window.innerWidth>762? 200:100
  return (
    <div>
           <Image src="/flake.svg" width={imageWidth} height={300} className={`absolute ${props.className} lg:top-[75.13rem] h-auto mx-auto`} alt={'flake'}/>
    </div>
  )
}

export default Flake