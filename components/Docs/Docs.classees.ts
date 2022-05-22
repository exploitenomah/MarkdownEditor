


  const activeColor = 'orange-600' 
export const docsListClasses = (): string => {
  return `text-lg`
}
export const docClasses = (isActive: boolean): string => {
  return `flex border-b opacity-95 ${ !isActive ?  'border-slate-100/25'  : 'border-orange-600 text-orange-600' } ` 
} 
export const docBtnClasses = (): string => {
  return `text-left  pt-4 pb-2 block basis-full `
} 
export const docInputClasses = (): string => {
  return `bg-transparent text-left basis-full px-4 pt-4 pb-2 focus:outline-1 focus:outline-[0] focus:text-white focus:border-0 `
} 
export const sideBtnClasses = `mx-2`