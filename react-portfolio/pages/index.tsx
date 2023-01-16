import Head from 'next/head'
import { Roboto_Mono } from '@next/font/google'

const inter = Roboto_Mono({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Inusui Portafolio🏠</title>
        <meta name="description" content="Portafolio de Ricardo." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className=' bg-indigo-900 min-h-screen' >
          <h1>si, Otra version de mi portafolio xd </h1>
        </section>
      </main>


    </>
  )
}
