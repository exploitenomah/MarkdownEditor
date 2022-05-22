

import { combineReducers } from '@reduxjs/toolkit'
import uiReducer from './ui.reducer/ui.slice' 
import docsReducer from './docs.reducer/docs.slice' 


// export const dispatchAsync =
//   (actions: ActionCreatorWithPayload<any, any>[], asyncFn: Promise<any>) => {
//   const [main, loading, error]  = actions
//   return async function (dispatch: Dispatch) {
//     try {
//       dispatch(loading(true))
//       const response = await asyncFn 
//       dispatch(main(response))
//      } catch (err) {
//        dispatch(error(true))
//       }
//     } 
//   }

export default combineReducers({
  ui: uiReducer,
  docs: docsReducer
})