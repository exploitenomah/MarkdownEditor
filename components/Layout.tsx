
import { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { uiWorkers } from '../store/reducers/ui.reducer/ui.slice'
import LaunchScreen from './LaunchScreen'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import { StoreType } from '../types/store.types'
import Overlay from './Overlay'

type LayoutProps = {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState('light')
  const { docs, ui: { showLaunch, showSideNav, showSettings } } = useSelector<StoreType, any>((store) => store)

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      if (prev === 'dark') {
        localStorage.setItem('theme', 'light')
        return 'light'
      } else {
        localStorage.setItem('theme', 'dark')
        return 'dark'
      }
    })
  }, [])
  const handleToggleShowSettings = useCallback((val?: boolean) => {
    uiWorkers.toggleShowSettings(val)
  }, [])
  useEffect(() => {
    if((new Date().getHours() > 18 || new Date().getHours() < 6) &&
      !(localStorage.getItem('theme'))) {
       setTheme('dark')
       localStorage.setItem('theme', 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !(localStorage.getItem('theme'))) {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else if (localStorage.getItem('theme') === 'dark') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }, [])
  useEffect(() => {
    if (docs.preferences.autoSave) {
      localStorage.setItem('docs', JSON.stringify(docs.docs))
    }
  }, [docs.preferences.autoSave, docs.docs])
  useEffect(() => {
    localStorage.setItem('preferences', JSON.stringify(docs.preferences))
  }, [docs.preferences])
  
  return (
    <div className={`${theme} transition overflow-hidden`}>
      <LaunchScreen />
      <div className={`
       h-[100vh] bg-slate-200 dark:bg-slate-900
       ${showLaunch ? 'opacity-0' : 'opacity-100'}`}>
        <Header
          showSettings={showSettings}
          handleToggleShowSettings={handleToggleShowSettings}
          theme={theme}
          toggleTheme={toggleTheme}
          preferences={docs.preferences}
          activeDoc={docs.activeDoc}
        />
        <SideBar />
        <div
          className={`${showSideNav || showSettings ? 'blur-sm' : ''}`}>
          <Overlay
            hideSelf={() => (handleToggleShowSettings(false))} show={showSettings} />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout

