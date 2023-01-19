import Head from 'next/head'
import { Roboto_Mono } from '@next/font/google'
import { BsFillMoonStarsFill } from 'react-icons/bs'

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
      <main className='bg-slate-600 px-10'>
        <section className='min-h-screen' >
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-Burtons ' >Inusui</h1>
            <ul className='flex items-center'>
              <li> <BsFillMoonStarsFill className='cursor-pointer text-2xl' /> </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                  href="#">Resume</a>
              </li>
            </ul>
            quede en 22:30
          </nav>
          <div>
            <h2>Ricardo</h2>
            <h3>Developer</h3>
            <hr />
            <p>
              Desde pequeño he tenido gran interés por las computadoras y la tecnología. Empecé a programar desde el 2018 cuando inicié mi carrera en la Universidad Tecnológica de Panamá con la carrera Licenciatura en Desarrollo de Software.<br />
              <br /> Desde entonces, he aprendido a programar páginas web usando PhP y JavaScript usando frameworks como ejs, angular, react. <br />
              <br />Del lado del backend, manejo Java, Python
              Además, tengo conocimientos en el desarrollo de Apps Móviles con Android, Ciber Seguridad, Python y actualmente me estoy formando con CCNA Routing & Switching de Cisco.
            </p>
          </div>
        </section>
      </main>


    </>
  )
}
