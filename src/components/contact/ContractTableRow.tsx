import React from 'react'
import 'tippy.js/dist/tippy.css'
import { ContactType } from '../../pages/contact/ContactList'

const tdClassName =
  'text-center text-base bg-white border-b border-r border-[#E8E8E8] max-w-[400px]'

function ContractTableRow(props: ContactType) {
  const {
    company,
    budget,
    companyCallNum,
    email,
    manager,
    phoneNum,
    content,
    images,
  } = props

  return (
    <tr>
      <td className={tdClassName}>{company}</td>
      <td className={tdClassName}>{companyCallNum}</td>
      <td className={tdClassName}>{manager}</td>
      <td className={tdClassName}>{phoneNum}</td>
      <td className={tdClassName}>{email}</td>
      <td className={tdClassName}>
        {budget && budget.toLocaleString() + ' 원'}
      </td>
      <td className={tdClassName}>
        {/* {content && (
          <Tippy
            content={content}
            placement='left'
            animation='scale-subtle'
            arrow={false}
          >
            <span>{content}</span>
          </Tippy>
        )} */}
        {content}
      </td>
      <td className={tdClassName}>
        {images ? <button className='p-1 px-2'>{images.length}</button> : null}
      </td>
    </tr>
  )
}

export default ContractTableRow
