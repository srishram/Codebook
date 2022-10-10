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
    
          <li>  <a href= "https://drive.google.com/file/d/1J5YVLQUhm4sKo61nv4SEDiRAZdxNo15S/view">Code book </a> </li>
          <li> <a href ="https://drive.google.com/file/d/1yenbkNAysAm2yteKY1Wd20AwmcwToV0x/view>Interview Guide</a> </li>
               
           </ul>
    
    </p>
        </p>
      </main>

  
    </div>
  )
}
