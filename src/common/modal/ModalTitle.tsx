import React from 'react'

type Props = {
  title: string
  children?: React.ReactNode
  onClose: () => void
}

function ModalTitle(props: Props) {
  const { title, children, onClose } = props

  return (
    <div className='flex justify-between items-center w-full p-4 border-b'>
      <h1 className='font-bold'>{title}</h1>
      <div className='flex items-center space-x-5'>
        {children}
        <button
          className='py-1 px-2 rounded-md text-white font-bold text-sm bg-red-500'
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  )
}
export default ModalTitle
