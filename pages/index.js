import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> advice22.netlify.app </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Replication package: Need advice on Advice?: An Interview Study on how Experts Write General Security Advice" />
        <p className="description">
          <p> Interview Guide: </p>
        </p>
      </main>

      <Footer />
    </div>
  )
}
