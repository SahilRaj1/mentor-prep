import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>

    <div className='container mx-auto py-3'>
      <div className='flex justify-between'>
          <div className='self-center'>Menter-Prep</div>
          <div>
            <div className='flex gap-5'>
                <Link className='p-2 bg-blue-600 rounded-xl' href={`/login`}>Login</Link>
                <Link className='p-2 bg-blue-600 rounded-xl' href={`/signup`}>SignUp</Link>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar