import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-full mt-5 mb-20 px-8 py-3 border-1 border-zinc-700 flex items-center justify-between text-white'>
        <img className='w-15 h-auto' src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe