import React, { useMemo } from 'react'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'

type Props = {
  value: any
  onChange: (html: string) => void
}

function RequillEditor(props: Props) {
  const { value, onChange } = props

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, 4, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ align: [] }, { color: [] }, { background: [] }],
        ['link', 'image', 'clean'],
      ],
    }),
    []
  )

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'link',
    'image',
    'align',
    'color',
    'background',
  ]

  return (
    <div>
      <ReactQuill
        className='h-[620px] overflow-y-scroll'
        theme='snow'
        modules={modules}
        formats={formats}
        value={value}
        onChange={(content, delta, source, editor) => {
          onChange(editor.getHTML())
          console.log('content : ', content)
          // console.log('delta : ', delta)
          // console.log('source : ', source)
        }}
      />
    </div>
  )
}

export default RequillEditor
