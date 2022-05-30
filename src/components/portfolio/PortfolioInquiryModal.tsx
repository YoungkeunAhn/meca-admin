import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ModalContent from '../../common/modal/ModalContent'
import ModalTitle from '../../common/modal/ModalTitle'
import ModalWrapper from '../../common/modal/ModalWrapper'

type Props = {
  onClose: () => void
}

function PortfolioInquiryModal(props: Props) {
  const { onClose } = props
  const [text, setText] = useState<string>('')
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const loadText = async () => {
    try {
      const { data } = await axios.get('')
      setText(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    loadText()
  })

  return (
    <ModalWrapper>
      <ModalContent className='w-1/3 h-min'>
        <ModalTitle title='행사문의글 문구변경' onClose={onClose} />
        <div className='p-2 flex flex-col space-y-2'>
          <input
            type='text'
            value={text}
            onChange={onChange}
            placeholder='행사문의글'
            className='w-full border rounded-md p-1 text-sm text-black outline-none focus:border-blue-700'
          />
        </div>
      </ModalContent>
    </ModalWrapper>
  )
}

export default PortfolioInquiryModal
