import React from 'react'
import Minus from 'src/icons/Minus'

type Props = {
  imageList: ImageList[]
  main?: number
  onDoubleClick: (idx: number) => void
  removeImage: (image: string, idx: number) => void
}

function ImagePreviewBox(props: Props) {
  const { imageList, main, onDoubleClick, removeImage } = props

  return (
    <ul className='grid grid-cols-3 gap-x-8 gap-y-8 w-full'>
      {imageList.map((image, idx) => (
        <div
          className='flex flex-col relative'
          key={idx}
          title='이미지를 더블 클릭하면 대표이미지로 변경됩니다.'
        >
          {main === idx && (
            <span
              className='text-blue-700 text-xs bg-white z-10 text-center absolute -top-[10px] left-1/2'
              style={{ transform: 'translateX(-50%)' }}
            >
              대표이미지
            </span>
          )}
          <button
            className='absolute -top-[10px] -right-[25px] group'
            onClick={() => removeImage(image.url, idx)}
          >
            <Minus className='w-8 h-8 stroke-slate-400 group-hover:stroke-red-600' />
          </button>
          <li
            onDoubleClick={() => onDoubleClick(idx)}
            className={`flex justify-center items-center rounded-md cursor-pointer p-2 ${
              main === idx ? 'border border-blue-700' : ''
            }`}
          >
            <img
              src={image.url}
              alt='preview'
              width='100%'
              className='max-h-[300px] object-contain'
            />
          </li>
        </div>
      ))}
    </ul>
  )
}

export default ImagePreviewBox
