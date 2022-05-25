

import { flex_itemsCenter } from "../../styles/utils.styles"

export const homeStyles = (extraClasses?: string): string => {
  return ` ${extraClasses} md:flex `
}
export const homeHeaderMobileStyles = (extraClasses?: string): string => {

  return `${flex_itemsCenter} justify-between p-3 bg-slate-300 dark:bg-slate-800 font-bold capitalize text-slate-900 dark:text-slate-200 md:hidden ${extraClasses}`
}

export const homeHeaderDesktopStyles = (extraClasses?: string): string => {
  return `hidden md:flex ${flex_itemsCenter} justify-between  bg-slate-300 dark:bg-slate-800 font-bold capitalize  text-slate-900 dark:text-slate-200 p-3 m-0 ${extraClasses}`
} 

export const homeSectionClasses = (extraClasses?: string) => {

  return ` md:basis-1/2 text-slate-900 dark:text-slate-400  ${extraClasses}`
}

export const previewClasses = (show: boolean): string => {
  return ` ${show ? 'opacity-100 block ' : 'opacity-0 hidden '}   md:block md:opacity-100 `
}
export const editorClasses = (hide: boolean): string => {
  return `${hide ? 'opacity-0 hidden ' : 'opacity-100 block '}  md:block md:opacity-100 `
}
export const homeDividerStyles = () => {
  return `hidden md:block w-[4px] opacity-40  h-full absolute inset-x-[50%] inset-y-0 z-0 border-0 bg-slate-800 dark:bg-slate-700 dark:opacity-100`
}