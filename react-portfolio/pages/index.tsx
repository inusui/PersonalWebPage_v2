import Head from 'next/head';
import { Roboto_Mono } from '@next/font/google';
import { BsFillMoonStarsFill, BsReddit } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";
import deved from "../public/dev-ed-wave.png"

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
      <main className='bg-white-600 px-10'>
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
          <div className="text-center p-12">
            <h2 className="text-4xl py-2 text-teal-600 font-medium" >Ricardo</h2>
            <h3 className="text-2xl py-2">Developer</h3>
            <hr />
            <p className="text-justify text-md py-5 leading-8 text-gray-800">
             Desarrollador que provee de sus servicios en el contenido tecnológico que necesites 
             </p>
          </div>
          <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
            <BsReddit />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={deved} alt='Not Image Found' layout='fill' objectFit='cover' />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I Offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
            Frontend: PhP, JavaScript usando frameworks como ejs, angular, react. <br />
              Backend: Java, Python
              Desarrollo de Apps Móviles con Kotlin, Ciber Seguridad, Python.
            
            </p>
Quede en 31:34
          </div>
        </section>

      </main>


    </>
  )
}
