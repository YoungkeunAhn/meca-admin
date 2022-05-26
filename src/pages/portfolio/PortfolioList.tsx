import React from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../../common/PageTitle'
import DashboadLayout from '../../layout/DashboadLayout'
import PortfolioCard from './PortfolioCard'

const fakeData = [
  { title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
]

function PortfolioList() {
  return (
    <DashboadLayout>
      <div className='flex justify-between items-center'>
        <PageTitle title='포트폴리오' />
        <div className='flex items-center space-x-10'>
          <Link to='./add'>
            <button className='py-1 px-2 rounded-md text-white font-bold text-sm bg-blue-500'>
              포트폴리오 추가
            </button>
          </Link>
          <button className='py-1 px-2 rounded-md text-white font-bold text-sm bg-purple-500'>
            행사문의 변경
          </button>
        </div>
      </div>
      <div className='grid grid-cols-6 gap-4 gap-y-8'>
        {fakeData.map((data, idx) => (
          <Link to='/portfolio/detail'>
            <PortfolioCard key={idx} {...data} />
          </Link>
        ))}
      </div>
    </DashboadLayout>
  )
}

export default PortfolioList
