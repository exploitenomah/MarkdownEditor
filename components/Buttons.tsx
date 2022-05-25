import { BtnProps, toggleBtnProps } from '../types/buttons.types'



export const IconButton = ({
  children,
  onClick,
  extraClasses,
  innerRef }: BtnProps) => {
  
  return (
    <button ref={innerRef} onClick={onClick} className={`text-md font-medium ${extraClasses}`} >
      {children}
    </button>
  )
}

export const BtnBasic = ({
  children,
  onClick,
  extraClasses,
  innerRef }: BtnProps) => {

  return(
    <button ref={innerRef} onClick={onClick} className={`capitalize font-medium border text-md px-6 py-1  rounded-md ${extraClasses}`}>
      {children}
    </button>
  )
}

//  May Use In Future
// export const ToggleBtn = ({
//   checked,
//   handleChange,
//   id }: toggleBtnProps) => {

//   return (
//     <>
//       <input id={id} type='checkbox' checked={checked} onChange={(e) => handleChange(e)} className={`hidden`} />
//       <label htmlFor={id} className={`relative w-16 h-8 transition block rounded-full overflow-hidden ${checked ? 'bg-slate-300' : 'bg-slate-500'}`}>
//         <span className={`absolute inset-y-[5%] left-[3%] block h-[95%%] w-[45%] rounded-full transition  ${checked ? 'translate-x-[100%] bg-slate-800' : 'translate-x-[0] bg-slate-400'}`}></span>
//       </label>
//     </>
//   )
// }