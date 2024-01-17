import React from 'react'
import { NavbarSimple } from '../NavbarSimple/NavbarSimple'
import Image from 'next/image'
import lazyImage from "../../public/startablog.png"
import Card from '../Card'

const Community = () => {
  return (
    <>
    <div className='flex'>
    <NavbarSimple/>
    <div className="overflow-hidden mx-auto pt-10 break-words lg:grid lg:gap-8 lg:grid-cols-[minmax(0,_1fr)_300px]">
      <div>
        <Card/>
      </div>
      <div className='"lg:flex lg:flex-col"'>
        <div className="mb-4 lg:mb-4 cursor-pointer flex justify-center items-center">
          <a href="/">
            <Image
              src={lazyImage}
              alt="image"
              className="object-contain h-[300px] w-[300px]"
            />
          </a>
        </div>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Community