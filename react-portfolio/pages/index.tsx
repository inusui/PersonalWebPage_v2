import Head from 'next/head';
import { Roboto_Mono } from '@next/font/google';
import { BsFillMoonStarsFill, BsReddit } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";

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
      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1'>Services I Offer</h3>
          <hr />
          <p className='text-md py-2 leading-8 text-gray-800'>
            Frontend: PhP, JavaScript usando frameworks como ejs, angular, react. <br />
            Backend: Java, Python
            Desarrollo de Apps Móviles con Kotlin, Ciber Seguridad, Python.

          </p>
          Quede en 31:34
        </div>
        <div className='text-5xl py-3 flex justify-center gap-2'>
            <a href="https://developer.android.com" target="_blank" rel="noreferrer">
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40" /> </a>
            <a href="https://angular.io" target="_blank" rel="noreferrer">
              <Image src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40" /> </a>
            <a href="https://couchdb.apache.org/" target="_blank" rel="noreferrer">
              <Image src="https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg" alt="couchdb" width="40" height="40" />
            </a>
            <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" />
            </a>
            <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
              <Image src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" />
            </a>
            <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer">
              <Image src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40" />
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <Image src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" />
            </a>
            
        </div>
        <div className='flex justify-center gap-2'>
        <a href="https://kotlinlang.org" target="_blank" rel="noreferrer">
              <Image src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="kotlin" width="40" height="40" /> 
            </a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> 
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" /> 
            </a> 
            <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer"> 
              <Image src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" width="40" height="40" /> 
            </a> 
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> 
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" /> 
            </a> 
            <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> 
            </a>
            <a href="https://www.php.net" target="_blank" rel="noreferrer"> 
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40" /> 
            </a>
            <a href="https://www.python.org" target="_blank" rel="noreferrer"> 
              <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" /> 
            </a>
        </div>
      </section>

    </main>


    </>
  )
}
