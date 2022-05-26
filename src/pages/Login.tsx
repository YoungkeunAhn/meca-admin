import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type InputsType = {
  id: string
  password: string
}

const initInputs: InputsType = {
  id: '',
  password: '',
}

const authentication = {
  id: 'admin',
  password: 'dnflahen31!',
}

function Login() {
  const [inputs, setInputs] = useState<InputsType>(initInputs)
  const router = useNavigate()

  // const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputs({ ...inputs, [event.target.name]: event.target.value })
  //   console.log(inputs)
  // }
  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const adminLogin = () => {
    // axios.post('', { ...inputs })
    if (
      inputs.id === authentication.id &&
      inputs.password === authentication.password
    ) {
      router('/main')
    } else {
      alert('아이디, 비밀번호가 다릅니다.')
      // console.log(inputs.id + ' : ' + inputs.password)
    }
  }

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='flex flex-col items-center w-[350px] relative -top-[60px]'>
        <img src='logo.png' alt='로고' className='mb-5' />
        <div className='flex flex-col space-y-5 w-full'>
          <div className='w-full flex items-center'>
            <span className='w-[100px]'>아이디</span>
            <input
              type='text'
              className='w-full border border-blue-300 outline-none rounded-sm p-1 focus:border-blue-700'
              placeholder='admin'
              onChange={onChangeInputs}
              name='id'
              value={inputs.id}
            />
          </div>
          <div className='w-full flex items-center'>
            <span className='w-[100px]'>비밀번호</span>
            <input
              type='password'
              className='w-full border border-blue-300 outline-none rounded-sm p-1 focus:border-blue-700'
              placeholder='비밀번호'
              onChange={onChangeInputs}
              name='password'
              value={inputs.password}
              onKeyUp={(e) => e.key === 'Enter' && adminLogin()}
            />
          </div>
        </div>
        <button
          className='w-full mt-10 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-400 cursor-pointer'
          onClick={adminLogin}
        >
          로그인
        </button>
      </div>
    </div>
  )
}

export default Login
