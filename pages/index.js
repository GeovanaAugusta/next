import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Head>
      <title>Página Principal</title>
      <meta name='keywords' content='Roupas, Calçados, Camisa'></meta>
      <meta name='description' content='Encontre a melhor roupa pra você'></meta>
    </Head>
      <div>
          <h1 className={styles.title}>Hello World Next.js</h1>     
      </div>
      <Image src="/images/city.jpg" width={300} height={400} alt='Cidade à noite'/>
    </>
  )
}
