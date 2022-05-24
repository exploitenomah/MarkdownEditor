

import { useEffect } from 'react'
import {  FaTrashAlt } from 'react-icons/fa'
import useDblClick from '../../custom.hooks/useDblClick'
import { storeDoc } from '../../types/store.types'
import { IconButton } from '../Buttons'
import { docsWorkers } from '../../store/reducers/docs.reducer/docs.slice'
import { uiWorkers } from '../../store/reducers/ui.reducer/ui.slice'
import { docBtnClasses, docClasses, docInputClasses, sideBtnClasses } from './Docs.classees'

const DocTitle = ({ doc }: { doc: storeDoc }) => {
  const { doc: { name, extension }
  } = doc
  const [isDblClicked, handleDblClick] = useDblClick()
  useEffect(() => {
    if (isDblClicked) {
      docsWorkers.setIsEditName(doc.id)
    }
  }, [isDblClicked])
  const handleEditName = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const target = e.target
    if (target !== null)
      docsWorkers.handleDocNameChange({id:doc.id, name: target.value})
  }
  const handleEditNameSubmitWithKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      docsWorkers.removeIsEditName(doc.id)
    }
  }
  return (
    <li className={docClasses(doc.isActive)}>
      {
        doc.isEditName ?
          <>
           <input
           type='text'
           name='edit document title'
            onChange={(e) => {
              handleEditName(e)
              }}
            onFocus={(e) => { e.target.select() }}
            onKeyDown={(e) => handleEditNameSubmitWithKeyDown(e)}
            onBlur={() => docsWorkers.removeIsEditName(doc.id)}
            value={`${name}`} className={
            docInputClasses()} />
          </>
            :
          <button 
            onTouchStart={(e) => { handleDblClick() }}
            onDoubleClickCapture={() => { docsWorkers.setIsEditName(doc.id) }}
            onClick={() => {
              docsWorkers.setActiveDoc(doc.doc)
            }}
            className={docBtnClasses()}>
            {`${name}.${extension}`}
          </button>
      }
      <IconButton extraClasses={sideBtnClasses}
        onClick={() => {
          docsWorkers.deleteDoc(doc.doc.id);
          uiWorkers.toggleShowSideNav(false)
        }}>
        <FaTrashAlt />
      </IconButton>
    </li>
  )
}

export default DocTitle
