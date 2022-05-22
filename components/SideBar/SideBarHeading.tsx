

import { useSelector } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { uiWorkers } from '../../store/reducers/ui.reducer/ui.slice'
import { IconButton } from "../Buttons"
import { sideBarHeadingClasses } from './SideBar.classes'
import { StoreType } from '../../types/store.types'

const SideBarHeading = () => {
  return (
    <h2
      className={sideBarHeadingClasses()}>
      <span>
        .MdEditor
      </span>
      <IconButton
        onClick={() => uiWorkers.toggleShowSideNav()}
      >
        <FaTimes size={20} />
      </IconButton>
    </h2>
  )
}

export default SideBarHeading