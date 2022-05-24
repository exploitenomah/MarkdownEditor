


import { createAction } from "@reduxjs/toolkit"
import {doc, storeDocs} from '../../../types/store.types'
const actions = {
  setDefaultDoc: createAction<string>('setDefaultDoc'),
  setActiveDoc : createAction<doc>('setActiveDoc'),
  getLSDocs : createAction<storeDocs>('getLSDocs'),
  editActiveDocContent: createAction<string>('setActiveDocContent'),
  createNewDoc: createAction('createNewDoc'),
  toggleAutoSave: createAction<boolean>('toggleAutoSave'),
  saveDocs: createAction('saveDocs'),
  deleteDoc: createAction<string>('deleteDoc')
}

export default actions