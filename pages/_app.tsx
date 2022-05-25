import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useRef, useCallback } from 'react'
import { Provider } from "react-redux";
import { jsPDF } from 'jspdf'
import { wrapper, store } from "../store/store";
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const pdfRef: React.RefObject<HTMLDivElement> | undefined = useRef(null) 
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [555.28, 751.89], 
    putOnlyUsedFonts:true
  })
  const downloadPdf = useCallback(async (filename: string) => {
    const source = pdfRef.current?.firstElementChild as HTMLElement
    if (source !== null) {
       await pdf.html(source)
    }
    pdf.save(`${filename}.pdf`)
  }, [pdf])
  return (
    <>   
      <Provider store={store}>
        <Layout downloadPdf={downloadPdf}>
        <Component pdfRef={pdfRef} {...pageProps} />
        </Layout>
    </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
