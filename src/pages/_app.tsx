import { useEffect } from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/index.scss'

function MyApp ({ Component, pageProps }: any) {
  useEffect(() => {
    // @ts-expect-error: Bootstrap JS doesn't have TypeScript declarations
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JS loaded successfully')
      })
      .catch((error) => console.error('Error loading Bootstrap JS:', error))
  }, [])

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
