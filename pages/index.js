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
        <Header title="Replication package" />
        <p className="description">
          <p> This is the Replication Package for <b><i>"Need advice on Advice?: An Interview Study on how Experts Write General Security Advice"</b></i> </p>
        </p>
      </main>

      <Footer />
    </div>
  )
}
