import React from 'react'

type Props = {
  label: string
  name: string
  value: string
  type?: 'date'
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function InputTextBox(props: Props) {
  const { label, name, value, type, onChange } = props

  return (
    <div className='flex items-center'>
      <label htmlFor={name} className='w-[200px] font-bold'>
        {label}
      </label>
      <input
        className='border rounded-md outline-none p-1 text-sm w-[400px]'
        type={type ?? 'text'}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputTextBox
