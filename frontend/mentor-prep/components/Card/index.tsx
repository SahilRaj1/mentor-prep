import { ActionIcon, Avatar, rem } from '@mantine/core'
import { IconArrowBigDown, IconArrowBigUp } from '@tabler/icons-react'
import React from 'react'

const Card = () => {
  return (
    <div className='border-2 border-[#EAEAEA] h-fit flex flex-col gap-3 p-4 w-[800px] rounded-md shadow-md'>
        <div className='SECTION-1 flex gap-3 items-center'>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="lg"
        />
        <h2>Anish Deshpande</h2>
        </div>
        <div className='SECTION-2'>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga officia provident doloribus natus facere ipsa minima earum blanditiis sequi.</p>
        </div>
        <div className='SECTION-3 flex justify-between'>
            <div className='flex gap-2'>
                <span className="bg-gray-200 px-2 py-[2px] rounded-xl">Golang</span>
                <span className="bg-gray-200 px-2 py-[2px] rounded-xl">Golang</span>
                <span className="bg-gray-200 px-2 py-[2px] rounded-xl">Golang</span>
            </div>
            <div className='flex gap-2'>
              <ActionIcon size="lg" color="green" variant="subtle">
                <IconArrowBigUp style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" color="red" variant="subtle">
                <IconArrowBigDown style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
              </ActionIcon>
            </div>
        </div>
    </div>
  )
}

export default Card