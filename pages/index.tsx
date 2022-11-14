
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Logo from './svg/logo'
import Bug from './svg/bug'
import Laptop from './svg/laptop'
import Phone from './svg/phone'



export default function Home() {
  const BallAnimation = dynamic(() => import('../components/BallAnimation'), {
    ssr: false,
  })

  return (
    <div className="font-sans text-slate-200">
      <Head>
        <title>AE WEB</title>
        <meta name="description" content="AE WEB is software provider based 
in north London creating 
custom solution for desktop and mobile." />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <header className="bg-grey-dark px-4">
        <div className="container mx-auto pt-5 ">
          <Logo />
        </div>
        <div className="container mx-auto py-8 lg:pt-0 md:flex  flex-row items-center">
          <div className="basis-1/2 relative z-10">
            <h2 className='text-4xl font-bold '>
              Developing professional<br />
              websites for local businesses
            </h2>
            <h3 className='pt-5 text-lg'>
              AE WEB is a software provider based<br />
              in north London creating<br />
              custom solutions for desktop and mobile.
            </h3>
          </div>
          <BallAnimation className="basis-1/2 overflow-hidden -mt-6 w-11/12 top-36 absolute md:static opacity-50 md:opacity-100" />
        </div>

      </header>


      <main >
        <section>
          <div className="container  mx-auto py-14 text-grey-dark px-4">
            <h2 className='text-4xl font-bold decoration-solid decoration-aeweb-green underline pt-14'>How AE WEB can help you</h2>
            <div className="md:flex flex-row items-center">
              <h3 className='py-5 text-lg basis-1/2'>
                Do you want to grow your business, need help with your existing website or just after some advice. Contact AE WEB for a free consultation.
              </h3>
            </div>
            <div className="md:grid grid-cols-3 gap-x-24 text-center">

              <div className='flex flex-col items-center'>
                <Phone />
                <p className='py-8'>
                  Cross platform iOS and Android apps
                  powered by React Native
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <Laptop />
                <p className='py-8'>Website development
                  and API integrations</p>
              </div>
              <div className='flex flex-col items-center'>
                <Bug />
                <p className='py-8'>Consultant in JavaScript, Python, and Typescript</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-grey-dark">
          <div className="container mx-auto py-14 bg-grey-dark px-4">
            <h2 className='text-4xl font-bold text-center'>Contact</h2>
            <div>
              <p>Email adam@aweb.io and let us know how we can help.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className='text-grey-dark container mx-auto py-8 px-4' >
        <p>© AE Web Development LTD {new Date(Date.now()).getFullYear()}</p>
      </footer>
    </div>
  )
}
