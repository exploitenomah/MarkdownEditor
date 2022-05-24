

import { useState, useEffect, useMemo, useCallback } from 'react'


const useDblClick = () => {
  const [firstTouch, setFirstTouch] = useState<number>(0)
  const [secondTouch, setSecondTouch] = useState<number>(0)
  const [dblClick, setDblClick] = useState<boolean>(false)
  const diff = useMemo(() => {
    return secondTouch - firstTouch
  }, [firstTouch, secondTouch])
  const handleDblClick: Function = useCallback(() => {
    if (firstTouch > 0) {
      setSecondTouch(new Date().getMilliseconds())
    } else{
      setFirstTouch(new Date().getMilliseconds())
    }
  }, [firstTouch, secondTouch])
  useEffect(() => { 
    if (diff <= 800 && diff > 0) {
      setDblClick(true)
    } else {
      setDblClick(false)
    } 
  })
  const returnVal: [boolean, Function] = [dblClick, handleDblClick]
  return returnVal
}

export default useDblClick