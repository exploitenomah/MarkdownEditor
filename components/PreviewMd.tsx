
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const PreviewMd = ({
  doc,
  pdfRef
}
  : {
  pdfRef ?: React.RefObject<HTMLDivElement> | undefined
    doc?: any
  }) => {
// console.log(pdfRef.current)
  return (
    <div ref={pdfRef} id='pdf' className='py-6'> 
         <ReactMarkdown  className='prose-inherit px-6 w-full prose prose-slate prose-sm dark:prose-invert prose-img:rounded-xl  ' children={doc.content} remarkPlugins={[remarkGfm]} />
    </div> 
  )
}


export default PreviewMd