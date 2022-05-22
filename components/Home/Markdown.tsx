import { FaEye } from "react-icons/fa"
import { uiWorkers } from "../../store/reducers/ui.reducer/ui.slice"
import { IconButton } from "../Buttons"
import Editor from "../Editor"
import { editorClasses } from "./Home.classes"
import { HomeHeaderMobile, SectionHeaderDesktop } from "./HomeHeader"
import HomeSection from "./HomeSection"
import { markdownProps } from '../../types/home.types'
import { docsWorkers } from "../../store/reducers/docs.reducer/docs.slice"
import React, { useCallback } from "react"





const Markdown = ({ ui, doc }: markdownProps) => {

  const handleEditorChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      docsWorkers.editActiveDocContent(e.currentTarget.value)
    },
    [docsWorkers.editActiveDocContent],
  )
  return (
    <HomeSection extraClasses={editorClasses(ui.showEditor)}>
      <>
        <HomeHeaderMobile headingText='Markdown'>
          <IconButton onClick={() => { uiWorkers.toggleShowEditor() }}>
            <FaEye size={25}  />
          </IconButton>
        </HomeHeaderMobile>
        <SectionHeaderDesktop  headingText='MarkDown' />
        <div className='max-h-[90vh] overflow-y-auto overflow-x-hidden'>
        <Editor setValue={handleEditorChange} value={doc.content} />
        </div>
      </>
    </HomeSection>
  )
}
export default Markdown