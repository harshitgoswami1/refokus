import React from 'react'
import { IoMdReturnRight } from "react-icons/io";


function Button({title = "Get Started"}) {
  return (
    <div className='max-w-40 px-5 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='font-medium text-sm mr-2'>{title}</span>
        <IoMdReturnRight />
    </div>
  )
}

export default Button