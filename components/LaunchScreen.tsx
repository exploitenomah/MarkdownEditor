


import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StoreType } from '../types/store.types'
import { uiWorkers } from '../store/reducers/ui.reducer/ui.slice'

const LaunchScreen = () => {
  
  const { showLaunch } = useSelector<StoreType, any>((store) => store.ui)

  useEffect(() => {
    const launchTimeout = setTimeout(() => {
     uiWorkers.toggleLaunchScreen(false)
   }, 2500);
    return () => {
      clearTimeout(launchTimeout)
    }
  }, [])
  return(
    <div className={containerClasses(showLaunch ? '' : 'opacity-0 invisible')}>
     <div className={dot}></div>
     <div className='motion-safe:animate-ping-once'>MdEditor</div>
    </div>
  )
} 

const containerClasses = (dynamicClasses?: string) => {
  return (
    `flex h-screen w-screen bg-slate-100 dark:bg-slate-900 justify-center items-center fixed z-50 text-[3rem] text-slate-900  dark:text-slate-200 motion-safe:animate-ping-once ${dynamicClasses}`
  )
}
const dot = 'w-[20vw] h-[20vw] max-w-[8rem] max-h-[8rem] bg-slate-900 dark:bg-slate-200 rounded-full  motion-safe:animate-bounce-twice'


export default LaunchScreen