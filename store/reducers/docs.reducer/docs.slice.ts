


import { createSlice } from '@reduxjs/toolkit'
import { store } from '../../store'
import actions from './docs.actions'
import { docsState, doc, storeDocs, storeDoc } from '../../../types/store.types'
import { v4 } from 'uuid'   


const {
  setActiveDoc, getLSDocs,
  editActiveDocContent, createNewDoc,
  toggleAutoSave, saveDocs, deleteDoc } = actions

const initialState: docsState = {
  docs: [],
  activeDoc: {
    id:'default',
    name: '',
    content: '',
    extension: ''
  },
}

const docsReducer = createSlice({ 
  name: 'docs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder
      .addCase(setActiveDoc, (state, action) => {
        const updDocs = state.docs.map(doc => doc.doc.id === action.payload.id ?
          { ...doc, isActive: true, isEditName: false, } : { ...doc, isActive: false, isEditName: false }
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
          ...state, docs: [...action.payload].reverse()
        }
      })
      .addCase(editActiveDocContent, (state, action) => {
        if (state.activeDoc.id === 'default') {
          const stateDocs = state.docs.map((doc) => ({ ...doc, isActive: false, isEditName: false }))
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
            },
            ...stateDocs,
            ]
          const updStateDocs = [...updDocs]
            .map((doc, idx) => doc.doc.name === 'untitled' ?
              {
                ...doc,
                doc: { ...doc.doc, name: `untitled${idx + 1}` }
              } : doc).reverse()
          const activeDoc = updStateDocs.
            filter(doc => doc.isActive)[0].doc
          return ({
            ...state,
            activeDoc: activeDoc,
            docs: updStateDocs
          })
        } else {
          const updStateDocs = [...state.docs]
            .map(doc => (doc.isActive ?
              {
              ...doc,
              doc: { ...doc.doc, content: action.payload }
            } : doc) )
         const activeDoc = updStateDocs.filter(doc => doc.isActive)[0].doc
          return ({
            ...state, 
            activeDoc: activeDoc,
            docs: updStateDocs
          })
        }
      })
      .addCase(createNewDoc, (state, _) => {
        const newDoc: storeDoc = {
          id:v4(),
          isActive: true,
          isEditName: false,
          doc: {
            id: v4(),
            content: '',
            name: 'untitled',
            extension: 'md'
          }
        }
        const updStateDocs = [...state.docs
          .map((doc) => ({ ...doc, isActive: false })), newDoc]
          .map((doc, idx) => doc.doc.name === 'untitled' ?
            { ...doc, doc: { ...doc.doc, name: `untitled${idx + 1}` } } : doc).reverse() 
        const activeDoc= updStateDocs.filter(doc => doc.isActive)[0].doc
          return ({
            ...state,
            activeDoc:activeDoc,
            docs: updStateDocs
          })
      })
      .addCase(saveDocs, (state, _) => {
        localStorage.setItem('docs', JSON.stringify(state.docs))
        return state
      })
      .addCase(deleteDoc, (state, action) => {
        const updDocs = state.docs
          .filter(doc => doc.id !== action.payload)
          .map((doc,idx) => ({...doc, isActive: idx === 0}))
        console.log(updDocs, action.payload)
        return {
          ...state,
          docs: updDocs
        }
      })
  }
})
export const docsWorkers = {
  setActiveDoc: (doc: doc) => store.dispatch(setActiveDoc(doc)),
  getLSDocs: (docs: storeDocs) => store.dispatch(getLSDocs(docs)),
  editActiveDocContent: (content: string) => store.dispatch(editActiveDocContent(content)),
  createNewDoc: () => store.dispatch(createNewDoc()),
  toggleAutoSave: (autoSave: boolean) => store.dispatch(toggleAutoSave(autoSave)), 
  saveDocs: () => store.dispatch(saveDocs()),
  deleteDoc: (docId: string) => store.dispatch(deleteDoc(docId))
}

export default docsReducer.reducer
