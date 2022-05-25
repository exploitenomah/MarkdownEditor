
import DocTitle from './DocTitle'
import { storeDocs } from '../../types/store.types'
import { docsListClasses } from './Docs.classees'

const DocTitles = (
  { docs }:
  { docs: storeDocs }) => {

  return(
    <ul className={docsListClasses()}>
      {docs.map(doc =>
        <DocTitle key={doc.doc.id} doc={doc} />
      )}
    </ul>
  )
}

export default DocTitles