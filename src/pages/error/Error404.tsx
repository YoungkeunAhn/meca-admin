import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold'>404 Not found</h1>
      <Link to='/main'>
        <button className='mt-5 rounded-md text-sm font-bold p-2 bg-[#E3EAF1]'>
          메인페이지로 이동
        </button>
      </Link>
    </div>
  )
}

export default Error404
