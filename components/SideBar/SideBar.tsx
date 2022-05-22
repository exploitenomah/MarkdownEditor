

import { useSelector } from 'react-redux'
import { StoreType } from '../../types/store.types'
import { uiWorkers } from '../../store/reducers/ui.reducer/ui.slice'
import SideBarHeading from './SideBarHeading'
import SideBarBody from './SideBarBody'
import Overlay from '../Overlay'
import { sidebarClasses } from './SideBar.classes'

const SideBar = () => {
  const { showSideNav } = useSelector<StoreType, any>(state => state.ui)
  const handleClick = () => uiWorkers.toggleShowSideNav(false)
  return (
    <>
      <Overlay hideSelf={handleClick} show={showSideNav} />
      <section className={sidebarClasses(showSideNav)}>
        <SideBarHeading />
        <SideBarBody  />
      </section>
    </>

  )
}

export default SideBar
