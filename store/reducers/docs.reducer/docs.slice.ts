


import { createSlice } from '@reduxjs/toolkit'
import { store } from '../../store'
import actions from './docs.actions'
import { docsState, doc, storeDocs, preferences } from '../../../types/store.types'
import { v4 } from 'uuid'   


const { setActiveDoc, getLSDocs, editActiveDocContent, toggleAutoSave, getLsPreferences, saveDocs } = actions

const initialState: docsState = {
  docs: [],
  activeDoc: {
    id:'default',
    name: '',
    content: '',
    extension: ''
  }, 
  preferences: {
    autoSave: true,
  }}

const docsReducer = createSlice({ 
  name: 'docs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder
      .addCase(setActiveDoc, (state, action) => {
        const updDocs = state.docs.map(doc => doc.doc.id === action.payload.id ?
            {...doc, isActive: true, isEditName: false,} : {...doc, isActive: false, isEditName: false}
        ) 
        const activeDoc = updDocs.filter(doc => doc.isActive)[0]?.doc 
        || action.payload
        return {
          ...state,
          docs: updDocs,
          activeDoc: activeDoc 
      }
      })
      .addCase(getLSDocs, (state, action) => {
        return {
        ...state, docs: action.payload
      }
      })
      .addCase(editActiveDocContent, (state, action) => {
        if (state.activeDoc.id === 'default') {
          const stateDocs = state.docs.map((doc) => ({...doc, isActive: false, isEditName: false}))
          const updDocs = [
            {
              doc: {
                ...state.activeDoc,
                id: v4(),
                content: action.payload,
                name: 'untitled'
              },
              isActive: true,
              isEditName: false,
              id: v4()
            }, ...stateDocs]
          const updStateDocs = updDocs.reverse().map((doc, idx) => doc.doc.name === 'untitled' ?  {...doc, doc: {...doc.doc, name: `untitled${idx}`}} : doc)
          const activeDoc = updStateDocs.filter(doc => doc.isActive)[0].doc 
          return ({
            ...state,
            activeDoc: activeDoc,
            docs: updStateDocs
          })
        }else{
        const updDocs = state.docs.map(doc => 
        doc.doc.id === state.activeDoc.id ?
         { ...doc, isActive: true, doc: { ...doc.doc, content: action.payload }} : {...doc, isActive: false})
        const activeDoc = updDocs.filter(doc => doc.isActive)[0].doc
        return {
          ...state,
          activeDoc: activeDoc,
          docs: updDocs
       }          
        }

      })
      .addCase(toggleAutoSave, (state, action) => {
        return{
          ...state,
          preferences: {
            ...state.preferences,
            autoSave: action.payload
          }
        }
      })
      .addCase(getLsPreferences, (state, action) => {
        return {
          ...state,
          preferences: {
            ...state.preferences,
            ...action.payload
          }
        }
      })
      .addCase(saveDocs, (state, _) => {
        localStorage.setItem('docs', JSON.stringify(state.docs))
        return state
      })
  }
})
export const docsWorkers = {
  setActiveDoc: (doc: doc) => store.dispatch(setActiveDoc(doc)),
  getLSDocs: (docs: storeDocs) => store.dispatch(getLSDocs(docs)),
  editActiveDocContent: (content: string) => store.dispatch(editActiveDocContent(content)),
  toggleAutoSave: (autoSave: boolean) => store.dispatch(toggleAutoSave(autoSave)),
  getLsPreferences: (preferences: preferences) => store.dispatch(getLsPreferences(preferences)),
  saveDocs: () => store.dispatch(saveDocs())
}

export default docsReducer.reducer
