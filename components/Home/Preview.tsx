

import React
  from 'react'
import { FaEye, FaEdit } from "react-icons/fa"
import { uiWorkers } from "../../store/reducers/ui.reducer/ui.slice"
import { IconButton } from "../Buttons"
import { previewClasses } from "./Home.classes"
import { HomeHeaderMobile, SectionHeaderDesktop } from "./HomeHeader"
import HomeSection from "./HomeSection"
import PreviewMd from '../PreviewMd'
import { previewProps } from '../../types/home.types'




const Preview = ({ ui, doc, pdfRef }: previewProps) => {

  return (
    <HomeSection extraClasses={previewClasses(ui.showEditor)}>
      <>
        <HomeHeaderMobile headingText='Preview'>
          <IconButton onClick={() => {
            uiWorkers.toggleShowEditor();
          }}>
            <FaEdit size={25} />
          </IconButton>
        </HomeHeaderMobile>
        <SectionHeaderDesktop headingText='Preview'>
          <FaEye  />
        </SectionHeaderDesktop>
        <div className='max-h-[85vh] overflow-y-auto overflow-x-hidden'>
          <PreviewMd pdfRef={pdfRef} doc={doc} />
        </div>
      </>
    </HomeSection>
  )
}
export default Preview