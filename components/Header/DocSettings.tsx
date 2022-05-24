
import { FaTrashAlt, FaDownload } from "react-icons/fa"
import { docBtnClasses, docSettingsClasses } from './Header.classes'
import { IconButton, } from "../Buttons"
import { docsWorkers } from "../../store/reducers/docs.reducer/docs.slice"
import { uiWorkers } from "../../store/reducers/ui.reducer/ui.slice"
import { doc } from "../../types/store.types"

const DocSettings = ({ show, activeDoc }: {
  show: boolean,
  activeDoc: doc
}) => {
  return (
    <div className={docSettingsClasses(show)}>
      <IconButton
        extraClasses={`${docBtnClasses} bg-blue-600`}
        onClick={() => { 
          uiWorkers.toggleShowSettings(false)
         }}>
        <>
          <FaDownload />
          <span className='ml-2'>
            save as pdf
          </span>
        </>
      </IconButton>
        <IconButton
        extraClasses={`${docBtnClasses} bg-orange-600`}
        onClick={() => {
          docsWorkers.deleteDoc(activeDoc.id)
          uiWorkers.toggleShowSettings(false)}}>
        <>
          <FaTrashAlt />
          <span className='ml-2'>
            delete
          </span>
        </>
      </IconButton>
    </div>
  )
}

export default DocSettings