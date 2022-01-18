import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/Components/Header'
import About from '../src/Components/Home'
import Gallery from '../src/Components/Gallery'
import Pricing from '../src/Components/Pricing'
import Benifits from '../src/Components/Benifits'
import Contact from '../src/Components/Contact'

export default function Home() {
  return (
    <>
     <section className="all">
     <Header />
     <About />
     <Gallery />
     <Pricing />
     <Benifits />
     <Contact />
     </section>
    </>
  )
}   
