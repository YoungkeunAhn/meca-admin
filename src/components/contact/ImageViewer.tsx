import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css'
import ModalWrapper from '../../common/modal/ModalWrapper'

type Props = {
  imageList: string[]
  onClose: () => void
}

function ImageViewer(props: Props) {
  const { imageList, onClose } = props

  window.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
      onClose()
    }
  })

  return (
    <ModalWrapper>
      <div className='flex flex-col justify-start'>
        <Carousel showArrows={true} infiniteLoop={true} emulateTouch={true}>
          {imageList.map((image, idx) => (
            <div
              key={idx}
              className='flex justify-center items-center overflow-y-auto max-w-[80vw] h-[85vh] m-auto'
            >
              <img
                src={image}
                alt='preview'
                className='w-full object-contain'
              />
            </div>
          ))}
        </Carousel>
      </div>
    </ModalWrapper>
  )
}

export default ImageViewer
