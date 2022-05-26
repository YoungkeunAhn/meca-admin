import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

function DashboadLayout(props: Props) {
  const { children } = props

  return (
    <div className='flex flex-col w-full h-screen'>
      <header className='flex justify-between items-center bg-[#006A90] text-white font-bold p-5'>
        <div className='flex items-center'>
          <Link to='/main'>
            <img
              src='/logo_white.png'
              // alt='메카스테이지'
              alt=''
              width='30px'
              className='object-contain'
            />
          </Link>
          <nav className='flex items-center ml-20'>
            <ul className='flex items-center space-x-10'>
              <Link to='/contact'>
                <li>문의글</li>
              </Link>
              <Link to='/notice'>
                <li>공지사항</li>
              </Link>
              <Link to='/portfolio'>
                <li>포트폴리오</li>
              </Link>
            </ul>
          </nav>
        </div>
        <Link to='/'>
          <span className='ml-4'>로그아웃</span>
        </Link>
      </header>
      <main className='p-2'>{children}</main>
    </div>
  )
}

export default DashboadLayout
