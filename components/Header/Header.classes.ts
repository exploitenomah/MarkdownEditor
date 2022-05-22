
import { flex_itemsCenter } from '../../styles/utils.styles'

export const headerClassList = (extraClasses?: string): string => {
  return `relative z-10 flex justify-between max-h-[11vh] bg-slate-800 dark:bg-slate-700 text-slate-200  ${extraClasses}`
}

export const headerH1ClassList = (): string => {
  return ` ${flex_itemsCenter} flex-col  justify-center ml-5 px-0 py-2 md:ml-2`
}
export const docSettingsClasses = (show:boolean):string => {
  return ` 
  border-t
  border-
  absolute top-[100%] right-[0]
  border-b border-slate-500 
  bg-slate-800 dark:bg-slate-700 text-slate-200
  px-4 py-6  
  transition
  min-w-[15rem]
 ${show ? 'opacity-100 visible translate-y-[0] ' : 'opacity-0 invisible translate-y-[-100vh]'}
  `
}
export const headerH1Span1Classes = 'text-sm opacity-60 mb-1 capitalize'
export const headerToggleBtnClasses = `${flex_itemsCenter}  text-white dark:text-slate-100 bg-slate-500 px-3 py-4 mx-2 my-3 text-xl rounded-md`
export const docBtnClasses = `${flex_itemsCenter} capitalize  p-3 mx-auto my-3 rounded-sm min-w-full text-center font-md  flex items-center justify-center`
