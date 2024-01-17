import { Avatar } from '@mantine/core'
import React from 'react'

const Card = () => {
  return (
    <div className='border-2 border-[#EAEAEA] h-fit flex flex-col gap-3 p-4'>
        <div className='flex gap-3'>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="lg"
        />
        <h2>Anish Deshpande</h2>
        </div>
        <div>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, in.</p>
        </div>
        <div className='flex justify-between'>
            <div className='flex gap-2 bg-gray-500'>
                <span>Golang</span>
                <span>Golang</span>
                <span>Golang</span>
            </div>
            <div className='flex gap-2'>
                <span>Golang</span>
                <span>Golang</span>
            </div>
        </div>
    </div>
  )
}

export default Card