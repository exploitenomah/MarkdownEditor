
import {  FaTrashAlt } from 'react-icons/fa'
import useDblClick from '../../custom.hooks/useDblClick'
import { storeDoc } from '../../types/store.types'
import { IconButton } from '../Buttons'
import { docsWorkers } from '../../store/reducers/docs.reducer/docs.slice'
import { uiWorkers } from '../../store/reducers/ui.reducer/ui.slice'
import { docBtnClasses, docClasses, docInputClasses, sideBtnClasses } from './Docs.classees'

const DocTitle = ({ doc }: { doc: storeDoc }) => {
//  const [firstTouch, setFirstTouch] = useState<number>(0)
//  const [secondTouch, setSecondTouch] = useState<number>(0)
// const [isEdit, setIsEdit] = useState<boolean>(false)
//   const diff = firstTouch - secondTouch
//   useEffect(() => {
//   if(diff <= 500){
//     setIsEdit(true)
//   }
// })
  const { doc: { name, extension }
  } = doc
const [isEdit, handleDblClick] = useDblClick()
  
  return (
    <li className={docClasses(doc.isActive)}>
      {
        isEdit ?
          <input value={`${name}.${extension}`} className={
            docInputClasses()} /> :

          <button 
            onTouchStart={(e) => { handleDblClick() }}
            onDoubleClickCapture={() => { console.log('dblClick') }}
            onClick={() => {
              docsWorkers.setActiveDoc(doc.doc)
              uiWorkers.toggleShowSideNav(false)
            }}
            className={docBtnClasses()}>
            {`${name}.${extension}`}
          </button>
      }
      <IconButton extraClasses={sideBtnClasses} onClick={() => ('helo')}>
        <FaTrashAlt />
      </IconButton>
    </li>
  )
}

export default DocTitle