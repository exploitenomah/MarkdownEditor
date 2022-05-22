


import { createAction } from "@reduxjs/toolkit"
import {doc, storeDocs, preferences} from '../../../types/store.types'
 const actions = {
  setActiveDoc : createAction<doc>('setActiveDoc'),
  getLSDocs : createAction<storeDocs>('getLSDocs'),
  editActiveDocContent: createAction<string>('setActiveDocContent'),
  toggleAutoSave: createAction<boolean>('toggleAutoSave'),
  getLsPreferences: createAction<preferences>('getLsPreferences'),
  saveDocs: createAction('saveDocs')
}

export default actions