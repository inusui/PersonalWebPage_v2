import Head from 'next/head'
import { Roboto_Mono } from '@next/font/google'
import{BsFillMoonStarsFill} from 'react-icons/bs'

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
      <main className='bg-blue px-10'>
        <section className='min-h-screen' >
          <div className='py-10 mb-12 flex justify-between'>
            <h1>developed byed</h1>
            <ul>
              Quede en 17:10
              <li> <BsFillMoonStarsFill/> </li>
              <li><a href="$">Resume</a></li>
            </ul>
          </div>
        </section>
      </main>


    </>
  )
}
