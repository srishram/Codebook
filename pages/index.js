import Head from 'next/head'
import Header from '@components/Header'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> advice22.netlify.app </title>
      </Head>

      <main>
        <Header title="Replication package" />
        <p className="description">
          <p> This is the Replication Package for <i>"Need advice on Advice?: An Interview Study on how Experts Write General Security Advice"</i> 
               
           <ul>
    
          <li>  <a href= "https://advice22.netlify.app/">Code book </a> </li>
               
           
    
    </p>
        </p>
      </main>

  
    </div>
  )
}
