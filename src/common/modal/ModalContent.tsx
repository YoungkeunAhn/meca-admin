import React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
}

function ModalContent(props: Props) {
  const { className, children } = props

  return (
    <div
      className={`flex flex-col bg-white rounded-md ${
        className ? className : 'w-1/2 h-1/2'
      }`}
    >
      {children}
    </div>
  )
}

export default ModalContent
