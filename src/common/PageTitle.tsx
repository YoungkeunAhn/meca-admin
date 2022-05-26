import React from 'react'
import ViewGrid from '../icons/ViewGrid'

type Props = {
  title: string
}

function PageTitle(props: Props) {
  const { title } = props

  return (
    <div className='flex items-center'>
      <ViewGrid className='w-5 h-5' />
      <h1 className='text-lg my-5 ml-2'>{title}</h1>
    </div>
  )
}

export default PageTitle
