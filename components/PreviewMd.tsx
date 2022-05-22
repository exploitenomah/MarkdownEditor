
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const PreviewMd = ({doc}:{doc?:any}) => {

  return (
    <div className='py-6'> 
         <ReactMarkdown className='prose-inherit px-6 w-full prose prose-slate prose-sm dark:prose-invert prose-img:rounded-xl  ' children={doc.content} remarkPlugins={[remarkGfm]} />
    </div> 
  )
}


export default PreviewMd