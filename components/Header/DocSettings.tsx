import { FaSave, FaTrashAlt, FaDownload  } from "react-icons/fa"
import { docBtnClasses, docSettingsClasses } from './Header.classes'
import { IconButton, ToggleBtn } from "../Buttons"




const DocSettings = ({ show, autoSave, handleAutoSaveChange, handleSave }: {
  show: boolean,
  autoSave: boolean,
  handleAutoSaveChange: Function,
  handleSave: Function
}) => {

  return (
    <div className={docSettingsClasses(show)}>
      <div className='flex font-bold text-sm items-center justify-around border rounded-sm p-2'>  
        <span>Auto Save</span>  
        <ToggleBtn
          id='toggle-autosave'
          checked={autoSave}
          handleChange={handleAutoSaveChange} />
      </div>
      {!autoSave &&
        <IconButton
        extraClasses={`${docBtnClasses}  bg-green-600`}
        onClick={() => handleSave()}>
        <>
          <FaSave />
          <span className='ml-2'>
            save changes
          </span>
        </>
      </IconButton>}
      <IconButton
        extraClasses={`${docBtnClasses} bg-blue-600`}
        onClick={() => { console.log('this') }}>
        <>
          <FaDownload />
          <span className='ml-2'>
            save as pdf
          </span>
        </>
      </IconButton>
      <IconButton
        extraClasses={`${docBtnClasses} bg-orange-600`}
        onClick={() => { console.log('this') }}>
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