import React from 'react'

type Props = {
  children: React.ReactChild
}

function ModalWrapper(props: Props) {
  const { children } = props

  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.4)] flex justify-center items-center'>
      {children}
    </div>
  )
}

export default ModalWrapper
