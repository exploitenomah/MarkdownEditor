
import { createAction } from "@reduxjs/toolkit"

 const actions = {
  showLaunch : createAction<boolean | undefined>('showLaunch'),
  showSideNav : createAction<boolean | undefined>('showSideNav'),
  showEditor: createAction<boolean | undefined>('showEditor'),
  showSettings : createAction<boolean | undefined>('showSettings')
}

export default actions