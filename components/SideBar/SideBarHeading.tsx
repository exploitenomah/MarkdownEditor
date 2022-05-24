

import { FaTimes, FaPlus } from 'react-icons/fa'
import { IconButton } from "../Buttons"
import { sideBarHeadingClasses } from './SideBar.classes'
import { docsWorkers } from '../../store/reducers/docs.reducer/docs.slice'
import { uiWorkers } from '../../store/reducers/ui.reducer/ui.slice'

const SideBarHeading = () => {
  return (
    <h2
      className={sideBarHeadingClasses()}>
      <span>
        .MdEditor
      </span>
       <IconButton
        extraClasses={`flex rounded-md justify-center items-center 
         bg-blue-500 p-2 ml-auto mr-7`}
        onClick={() => {
          docsWorkers.createNewDoc();
          uiWorkers.toggleShowSideNav(false)}}>
          <>
          <FaPlus />
          <span className='hidden md:inline'>&nbsp;new file</span>
          </>
        </IconButton>
      <IconButton
        onClick={() => uiWorkers.toggleShowSideNav()}
      >
        <FaTimes size={20} />
      </IconButton>
    </h2>
  )
}

export default SideBarHeading