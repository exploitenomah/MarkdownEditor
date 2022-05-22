import { createSlice } from '@reduxjs/toolkit'
import { store } from '../../store'
import actions from './ui.actions'
import {  uiState } from '../../../types/store.types'


const { showLaunch, showSideNav, showEditor, showSettings } = actions

const initialState: uiState = {
  showLaunch: true, 
  showSideNav: false,
  showEditor: false,
  showSettings:false
}

const uiReducer = createSlice({
  name: 'ui',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showLaunch, (state, action) => {
      return {
        ...state,
        showLaunch: action.payload || !state.showLaunch
      }
      }) 
      .addCase(showSideNav, (state, action) => {
        return (action.payload !== undefined ?
          { ...state, showSideNav: action.payload } :
          { ...state, showSideNav: !state.showSideNav })
      })
      .addCase(showEditor, (state, _) => {
      return {...state, showEditor: !state.showEditor}
      })
      .addCase(showSettings, (state, action) => {
        return (action.payload === undefined ?
          { ...state, showSettings: !state.showSettings } :
          {...state, showSettings: action.payload})
    })
  }
})
export const uiWorkers = {
  toggleLaunchScreen: (val?: boolean) => (store.dispatch(showLaunch(val))),
  toggleShowSideNav: (val?: boolean) => (store.dispatch(showSideNav(val))),
  toggleShowSettings: (val?: boolean) => (store.dispatch(showSettings(val))),
  toggleShowEditor: () => (store.dispatch(showEditor())),
}

export default uiReducer.reducer 