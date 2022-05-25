

import React
// , { useRef, useCallback }
  from 'react'
// import { jsPDF } from 'jspdf'
import { FaEye, FaEdit } from "react-icons/fa"
import { uiWorkers } from "../../store/reducers/ui.reducer/ui.slice"
import { IconButton } from "../Buttons"
import { previewClasses } from "./Home.classes"
import { HomeHeaderMobile, SectionHeaderDesktop } from "./HomeHeader"
import HomeSection from "./HomeSection"
import PreviewMd from '../PreviewMd'
import { previewProps } from '../../types/home.types'




const Preview = ({ ui, doc, pdfRef }: previewProps) => {
  // const pdfRef: React.RefObject<HTMLDivElement> | undefined =  useRef(null)
  // const pdf = new jsPDF({
  //   orientation: 'portrait',
  //   unit: 'px',
  //   format: [555.28, 751.89], 
  //   putOnlyUsedFonts:true
  // })
  // const source = pdfRef.current?.firstElementChild as HTMLElement

  // const dl = useCallback(async (filename: string) => {
  //   if (source  !== null) {
  //      await pdf.html(source)
  //   }
  //   pdf.save(`${filename}.pdf`)
  // }, [source, pdf])

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
        <div className='max-h-[90vh] overflow-y-auto overflow-x-hidden'>
          <PreviewMd pdfRef={pdfRef} doc={doc} />
        </div>
      </>
    </HomeSection>
  )
}
export default Preview