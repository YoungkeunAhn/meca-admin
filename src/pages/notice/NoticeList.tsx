import { format } from 'date-fns'
import React, { useState } from 'react'
import PageTitle from '../../common/PageTitle'
import DashboadLayout from '../../layout/DashboadLayout'
import NoticeEditModal from '../../components/notice/NoticeEditModal'

const thClassName = 'text-sm font-semibold text-white py-2'

const tdClassName =
  'text-center text-base bg-white border-b border-r border-[#E8E8E8] max-w-[400px] py-15'

type DataType = {
  title: string
  date: string
  manager: string
  html: string
}

const fakeData: DataType[] = [
  {
    title: '테스트',
    date: format(new Date(), 'yyyy-MM-dd'),
    manager: '관리자',
    html: '<h1>테스트</h1>',
  },
  {
    title: '테스트',
    date: format(new Date(), 'yyyy-MM-dd'),
    manager: '관리자',
    html: '<h1>테스트</h1><br/><img src="/logo.png" alt="로고" />',
  },
  {
    title: '테스트',
    date: format(new Date(), 'yyyy-MM-dd'),
    manager: '관리자',
    html: '<h1>테스트</h1><p>테스트</p>',
  },
]

function NoticeList() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [modalProps, setModalProps] = useState<DataType>()

  const onClickAddBtn = () => {
    setOpenModal(true)
    setModalProps(undefined)
  }

  const onClose = () => {
    setOpenModal(false)
  }

  const onClickTitle = (data: DataType) => {
    setOpenModal(true)
    setModalProps(data)
  }

  return (
    <DashboadLayout>
      <div className='flex justify-between items-center'>
        <PageTitle title='공지사항' />
        <div className='flex items-center'>
          <button
            className='py-1 px-2 rounded-md text-white font-bold text-sm bg-blue-500'
            onClick={onClickAddBtn}
          >
            추가
          </button>
        </div>
      </div>
      <div className='border h-[82vh]'>
        <table className='table-auto w-full border-l'>
          <thead className='sticky top-0'>
            <tr className='bg-[#006A90] text-center'>
              <th className={thClassName}>no</th>
              <th className={thClassName}>제목</th>
              <th className={thClassName}>작성날짜</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((data, idx) => (
              <tr key={idx}>
                <td className={`w-[50px] ${tdClassName}`}>{idx + 1}</td>
                <td
                  className={`cursor-pointer ${tdClassName}`}
                  onClick={() => onClickTitle(data)}
                >
                  {data.title}
                </td>
                <td className={`w-[100px] ${tdClassName}`}>{data.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openModal && <NoticeEditModal onClose={onClose} data={modalProps} />}
    </DashboadLayout>
  )
}

export default NoticeList
