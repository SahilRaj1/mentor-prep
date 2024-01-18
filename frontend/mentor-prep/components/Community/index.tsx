import React from 'react'
import Image from 'next/image'
import lazyImage from "../../public/startablog.png"
import Card from '../Card'

const Community = () => {
  return (
    <>
    <div className='flex'>
    <div className="overflow-hidden mx-auto pt-5 break-words lg:grid lg:gap-8 lg:grid-cols-[minmax(0,_1fr)_300px]">
      <div>
        <Card/>
      </div>
      <div className='"lg:flex lg:flex-col"'>
        <div className="lg:cursor-pointer flex justify-center items-center">
          <a href="/">
            <Image
              src={lazyImage}
              alt="image"
              className="object-contain h-[250px] w-[300px]"
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