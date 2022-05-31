import React, { useState } from 'react'
import ModalContent from 'src/common/modal/ModalContent'
import ModalTitle from 'src/common/modal/ModalTitle'
import ModalWrapper from 'src/common/modal/ModalWrapper'
import RequillEditor from 'src/common/requill-editor/RequillEditor'

type DataType = {
  title: string
  date: string
  manager: string
  html: string
}

type Props = {
  onClose: () => void
  data?: DataType
}

function NoticeEditModal(props: Props) {
  const { onClose, data } = props
  const [editorValue, setEdiotrValue] = useState<any>(data?.html || null)
  const [title, setTitle] = useState<string>(data?.title || '')

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const onChangeEditor = (html: string) => {
    setEdiotrValue(html)
    console.log(editorValue)
  }

  const onClickCloseBtn = () => {
    setTitle('')
    setEdiotrValue(null)
    onClose()
  }

  window.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
      setTitle('')
      setEdiotrValue(null)
      onClose()
    }
  })

  return (
    <ModalWrapper>
      <ModalContent className='h-[90vh]'>
        <ModalTitle title='공지사항' onClose={onClickCloseBtn}>
          <button className='py-1 px-2 rounded-md text-white font-bold text-sm bg-blue-500'>
            저장
          </button>
        </ModalTitle>

        <div className='p-4 pt-10 space-y-5'>
          <table className='border w-full h-full'>
            <tr>
              <th className='border-b border-r p-1 w-[150px]'>제목</th>
              <td className='border-b border-r p-1'>
                <input
                  className='border rounded-md p-1 text-sm w-full'
                  type='text'
                  value={title}
                  onChange={onChangeTitle}
                />
              </td>
            </tr>
            <tr>
              <th className='border-b border-r p-1'>공지여부</th>
              <td className='flex items-center space-x-6 border-b border-r p-1'>
                <div className='flex items-center pl-1'>
                  <input type='radio' name='normalPost' className='mr-2' />
                  <label htmlFor='normalPost'>일반</label>
                </div>
                <div className='flex items-center'>
                  <input type='radio' name='noticePost' className='mr-2' />
                  <label htmlFor='noticePost'>공지</label>
                </div>
              </td>
            </tr>
            <tr>
              <th className='border-b border-r p-1 w-[150px]'>본문</th>
              <td className='border-b border-r p-1 h-[650px] overflow-y-hidden'>
                <div className='w-full overflow-hidden'>
                  <RequillEditor
                    value={editorValue}
                    onChange={onChangeEditor}
                  />
                </div>
              </td>
            </tr>
          </table>
        </div>
      </ModalContent>
    </ModalWrapper>
  )
}

export default NoticeEditModal
