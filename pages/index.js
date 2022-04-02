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
    
          <li>  <a href= "https://drive.google.com/file/d/12J16LFkg4eK2vLV5tH9IOEvto6KRUWWF/view">Code book </a> </li>
          <li> <a href =" https://drive.google.com/file/d/1yV9WpNardH0b2WyECg8PERL-03vU_F6B/view">Interview Guide</a> </li>
               
           </ul>
    
    </p>
        </p>
      </main>

  
    </div>
  )
}
