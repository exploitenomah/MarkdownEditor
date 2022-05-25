

const editorClasses = `text-inherit w-full min-h-[75vh] resize-none bg-transparent focus:outline-0 py-4 px-3 `


const Editor = ({
  value,
  setValue }: {
    value: string,
    setValue: Function
  }) => {

  return (
    <textarea
      className={editorClasses}
      onChange={(e) => setValue(e)} value={value} />
  )
}

export default Editor