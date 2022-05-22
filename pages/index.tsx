


import Head from 'next/head'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { homeStyles, homeDividerStyles } from '../components/Home/Home.classes'
import { StoreType, doc, storeDocs } from '../types/store.types'
import Markdown from '../components/Home/Markdown'
import Preview from '../components/Home/Preview'
import { getDefaultContent } from '../utils/defaultContent'
import { docsWorkers } from '../store/reducers/docs.reducer/docs.slice'

export async function getStaticProps() {
  const defaultDoc = getDefaultContent()
  return {
    props: {
      defaultDoc
    }
  }
}
type HomePageProps = {
  defaultDoc: doc
}

const HomePage = (props: HomePageProps) => {
  const { docs, ui } = useSelector((store: StoreType) => store)
  useEffect(() => {
    const lsDocs = localStorage.getItem('docs')
    if (lsDocs !== null) {
      const docs: storeDocs = JSON.parse(lsDocs)
      const activeDoc = docs.length > 0 ?
        docs.filter(doc => doc.isActive)[0].doc : props.defaultDoc
      console.log(docs)
      docsWorkers.setActiveDoc( activeDoc )
      docsWorkers.getLSDocs(docs)
    } else {
      docsWorkers.setActiveDoc( props.defaultDoc )
    }
    const lsPreferences = localStorage.getItem('preferences')
    if (lsPreferences !== null) {
      docsWorkers.getLsPreferences(JSON.parse(lsPreferences))
    }
  }, [])
  return (
    <div>
      <Head>
        <title>Dot.Markdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={homeStyles()}>
        <Markdown doc={docs.activeDoc} ui={ui} />
        <hr className={homeDividerStyles()} />
        <Preview doc={docs.activeDoc} ui={ui} />
      </section>  
    </div>
  )
}

export default HomePage
