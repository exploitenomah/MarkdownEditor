

import { useEffect } from 'react'


const useOutsideClick = (
  ref: any,
  action: any,
  // dataName?: string
) => {
  
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      
      if (ref.current && !ref.current.contains(event.target)) {
        action(false) 
      //   console.log(event.target.dataset)
      // // } else if (event?.target?.dataName === dataName) {
      // //   action(true)
      } else {
        action() 
      }  
    }
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [ref])
}

export default useOutsideClick