import { useSelector } from "react-redux"
import { StoreType } from "../../types/store.types"
import DocTitles from "../Docs/DocTitles"
import { sideBarBodyClasses, sideBarBodyHeadClasses } from "./SideBar.classes"


const SideBarBody = () => {
  const { docs :{ docs} } = useSelector<StoreType, any>((store) => store)

  return (
    <section className={sideBarBodyClasses()}>
      <h3 className={sideBarBodyHeadClasses}>Documents</h3>
      <DocTitles docs={docs} />
    </section>
  )
}
export default SideBarBody