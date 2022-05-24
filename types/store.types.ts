
import { Store } from '@reduxjs/toolkit'


export interface StoreType extends Store {
  ui: uiState,
  docs: docsState
}
export interface uiState{
  showLaunch: boolean,
  showSideNav: boolean,
  showEditor: boolean
  showSettings:boolean
}
export interface docsState {
  docs: storeDocs,
  activeDoc: doc,
}
export interface storeDoc {
  id:string,
  doc: doc,
  isActive: boolean,
  isEditName: boolean
}
export type storeDocs = storeDoc[]
export interface doc{ 
    id: string,
    name: string,
    extension: string,
    content: string,
}