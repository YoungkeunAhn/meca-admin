import React from 'react'

type Props = {
  imageUrl: string
  title: string
}

function PortfolioCard(props: Props) {
  const { imageUrl, title } = props

  return (
    <div className='flex flex-col items-center'>
      <img src={imageUrl} alt={title} />
      <span className='font-bold text-sm mt-4'>{title}</span>
    </div>
  )
}

export default PortfolioCard
