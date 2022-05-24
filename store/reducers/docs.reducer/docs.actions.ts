


import { createAction } from "@reduxjs/toolkit"
import {doc, storeDocs} from '../../../types/store.types'
const actions = {
  setDefaultDoc: createAction<string>('setDefaultDoc'),
  setIsEditName: createAction<string>('setIsEditName'),
  removeIsEditName: createAction<string>('removeIsEditName'),
  handleDocNameChange: createAction<{ id: string, name: string}>('handleDocNameChange'),
  setActiveDoc : createAction<doc>('setActiveDoc'),
  getLSDocs : createAction<storeDocs>('getLSDocs'),
  editActiveDocContent: createAction<string>('setActiveDocContent'),
  createNewDoc: createAction('createNewDoc'),
  saveDocs: createAction('saveDocs'),
  deleteDoc: createAction<string>('deleteDoc')
}

export default actions