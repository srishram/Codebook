import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Advice22.netlify.app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Replication package" />
        <p className="description">
          This is the replication package for the publication "Need advice on Advice?: An Interview Study on how Experts Write General Security Advice </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
