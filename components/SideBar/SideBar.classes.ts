import { flex_itemsCenter } from "../../styles/utils.styles"


export const sidebarClasses = (showSideNav?: boolean): string => {
  return `fixed top-0 left-0 z-40 bg-slate-900 dark:bg-slate-800  h-screen w-3/5 max-w-[25rem] text-slate-200 transition border-r ${showSideNav ? 'translate-x-0' : 'translate-x-[-100vw]'}`
}
export const sideBarHeadingClasses = ():string => {
  return `${flex_itemsCenter}  justify-between px-6 py-4 border-b text-lg font-bold capitalize`
}
export const sideBarBodyClasses = (): string => {
 return ` overflow-y-auto overflow-x-hidden scrollbar max-h-[76vh] max-w-[80%] mx-auto text-center `
}
export const sideBarBodyHeadClasses = `mt-4 text uppercase font-md
`