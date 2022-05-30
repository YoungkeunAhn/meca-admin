import axios from 'axios'
import { format } from 'date-fns'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../../common/PageTitle'
import InputTextBox from '../../components/InputTextBox'
import DashboadLayout from '../../layout/DashboadLayout'
import ImagePreviewBox from './ImagePreviewBox'

type InputsType = {
  title: string
  location: string
  startDate: string
}

const initInputs: InputsType = {
  title: '',
  location: '',
  startDate: format(new Date(), 'yyy-MM-dd'),
}

function PortfolioDetail() {
  const [pageTitle, setPageTitle] = useState('포트폴리오')
  const [inputs, setInputs] = useState<InputsType>(initInputs)
  const [imageList, setImageList] = useState<ImageList[]>([])
  const [mainNumber, setMainNumber] = useState<number>(0)

  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const onChangeFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileURLs: string[] = []
      const fileTemp: File[] = []
      const { files } = event.target

      let loopLength = files.length

      if (imageList.length + loopLength > 6) {
        alert('최대 6개까지 입니다.')
        loopLength = 6 - imageList.length
      }

      // for (let i = 0; i < loopLength; i++) {
      //   file = files[i]

      //   if (!file.type.startsWith('image/')) {
      //     alert('이미지만 올려주세요')
      //     return false
      //   }
      //   let reader = new FileReader()
      //   reader.onload = () => {
      //     fileURLs[i] = reader.result
      //     setImageList(imageList.concat(fileURLs))
      //   }

      //   fileTemp.push({ url: fileURLs[i], fileName: file.name })
      //   reader.readAsDataURL(file)
      // }

      for (let i = 0; i < loopLength; i++) {
        fileURLs.push(URL.createObjectURL(files[i]))
        fileTemp.push(files[i])
      }

      console.log('fileTemp : ', fileTemp)
      console.log('fielURLs ; ', fileURLs)

      fileTemp.map((file, idx) =>
        setImageList((prev) => prev.concat({ url: fileURLs[idx], file: file }))
      )

      // for (let i = 0; i < files.length; i++) {
      //   console.log('xxx')
      // }
    }
  }

  const onClickImageAddBtn = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const onDoubleClick = (idx: number) => {
    setMainNumber(idx)
  }

  let formData: FormData = new FormData()

  const onSubmit = async () => {
    console.log(imageList)

    try {
      imageList.map((image) => formData.append('image[]', image.file))
      formData.append('data', JSON.stringify(inputs))
      formData.append('mainIdx', mainNumber.toString())

      await axios({
        method: 'POST',
        url: 'http://adm.imama.kr/imama/api/',
        data: formData,
      })

      alert('성공')
    } catch (e) {
      console.error(e)
      alert('실패')
    }
  }

  const removeImage = (url: string, idx: number) => {
    setImageList((prev) => prev.filter((it) => it.url !== url))
    if (mainNumber === idx) {
      setMainNumber(0)
    }
  }

  return (
    <DashboadLayout>
      <div className='flex justify-between max-w-[1450px]'>
        <PageTitle title={pageTitle} />
        <div className='flex items-center space-x-10'>
          <button
            className='w-[100px] py-1 rounded-md text-white font-bold bg-blue-500'
            onClick={onSubmit}
          >
            저장
          </button>
          <Link to='/portfolio'>
            <button className='w-[100px] py-1 rounded-md text-white font-bold bg-red-500'>
              취소
            </button>
          </Link>
        </div>
      </div>
      <div className='max-w-[1000px] m-auto'>
        <div className='space-y-5'>
          <InputTextBox
            label='제목'
            name='title'
            value={inputs.title}
            onChange={onChangeInputs}
          />
          <InputTextBox
            label='행사장'
            name='location'
            value={inputs.location}
            onChange={onChangeInputs}
          />
          <InputTextBox
            type='date'
            label='행사일'
            name='startDate'
            value={inputs.startDate}
            onChange={onChangeInputs}
          />
          <div className='flex items-center'>
            <input
              ref={inputRef}
              type='file'
              multiple
              name='images'
              accept='image/*'
              hidden
              onChange={onChangeFileInput}
            />
            <label htmlFor='이미지' className='w-[200px]'>
              이미지
            </label>
            <button
              className='border border-blue-500 text-blue-500 py-1 px-2 rounded-md text-sm'
              onClick={onClickImageAddBtn}
            >
              이미지 추가
            </button>
          </div>
          <ImagePreviewBox
            imageList={imageList}
            main={mainNumber}
            onDoubleClick={onDoubleClick}
            removeImage={removeImage}
          />
        </div>
      </div>
    </DashboadLayout>
  )
}

export default PortfolioDetail
