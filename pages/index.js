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
               
           
            <a href= "https://github.com/srishram/Codebook/blob/main/pages/IEEE_General%20Security%20Advice%20Codebook.docx%20-%20Google%20Docs.pdf">Code book </a>
               
           
    
    </p>
        </p>
      </main>

  
    </div>
  )
}
