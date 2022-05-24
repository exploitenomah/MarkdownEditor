import {  FaTrashAlt, FaDownload  } from "react-icons/fa"
import { docBtnClasses, docSettingsClasses } from './Header.classes'
import { IconButton, } from "../Buttons"




const DocSettings = ({ show }: {
  show: boolean
}) => {

  return (
    <div className={docSettingsClasses(show)}>
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