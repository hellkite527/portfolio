import Head from 'next/head'

export const HeadTag = () => {
  return (
    <Head>
      <title>Vincent Pableo</title>
      <meta
        name='description'
        content='Online portfolio of Vincent Pableo'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
