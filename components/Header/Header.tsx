

import { useCallback } from 'react'
import { FaRegFolder, FaMoon, FaSun, FaPlus } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { RiMenuFill } from 'react-icons/ri'
import { IconButton } from "../Buttons"
import DocSettings from './DocSettings'
import { uiWorkers } from '../../store/reducers/ui.reducer/ui.slice'
import { docsWorkers } from '../../store/reducers/docs.reducer/docs.slice'
import { headerClassList, headerH1ClassList, headerH1Span1Classes, headerToggleBtnClasses } from './Header.classes'
import { flex_itemsCenter, flex_justifyCenter } from '../../styles/utils.styles'
import Logo from './Logo'
import { doc, StoreType } from '../../types/store.types'
import { useSelector } from 'react-redux'


const Header = (
  { toggleTheme,
    theme,
    showSettings,
    handleToggleShowSettings,
    activeDoc,
    downloadPdf
  }:
    {
      toggleTheme: Function,
      theme: string,
      showSettings: boolean,
      handleToggleShowSettings: Function,
      activeDoc: doc,
      downloadPdf: Function
    }) => {
  const { docs } = useSelector((store: StoreType) => store)
  return (
    <header
      className={headerClassList()}>
      <div className={flex_justifyCenter}>

        <IconButton
          extraClasses='bg-slate-700 dark:bg-slate-600 px-3 py-1 md:px-5 '
          onClick={() => uiWorkers.toggleShowSideNav()}
        >
          <RiMenuFill size={35} />

        </IconButton>
        <Logo />
        <h1 className={headerH1ClassList()}>
          <span className={headerH1Span1Classes}>
            document name
          </span>
          <span className={`${flex_itemsCenter} font-bold`}>
            < FaRegFolder /> &nbsp;&nbsp;
            <>
              {activeDoc.name}.{activeDoc.extension}
            </>
          </span>
        </h1>
      </div>
      <div className={`flex justify-around`}>
        <IconButton
          extraClasses={`${headerToggleBtnClasses} hidden md:flex bg-blue-500`}
          onClick={() => (docsWorkers.createNewDoc())}>
          <>
            <FaPlus /><span className='text-sm '>&nbsp;new file </span>
          </>
        </IconButton>


        <IconButton
          extraClasses={`${headerToggleBtnClasses}`}
          onClick={() => (toggleTheme())}>
          <>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </>
        </IconButton>
        {(docs.activeDoc && docs.docs.length > 0) &&
          <>
            <IconButton
              extraClasses={`${headerToggleBtnClasses}`}
              onClick={() => (handleToggleShowSettings())}>
              <>
                <AiFillSetting />
              </>
            </IconButton>
            <DocSettings
            downloadPdf={downloadPdf}
              show={showSettings} activeDoc={activeDoc} />
          </>
        }
      </div>
    </header>
  )
}

export default Header