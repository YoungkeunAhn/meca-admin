import React from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../../common/PageTitle'
import DashboadLayout from '../../layout/DashboadLayout'
import PortfolioCard from './PortfolioCard'

const fakeData = [
  { id: 1, title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { id: 2, title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { id: 3, title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { id: 4, title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { id: 5, title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { id: 6, title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { id: 7, title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { id: 8, title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
  { id: 9, title: '골든디스크어워드', imageUrl: 'testImage.jpg' },
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
          <Link to={`/portfolio/edit/${data.id}`} key={idx}>
            <PortfolioCard {...data} />
          </Link>
        ))}
      </div>
    </DashboadLayout>
  )
}

export default PortfolioList
