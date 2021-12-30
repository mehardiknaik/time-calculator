import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from '../src/components/Main'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Time Calculator</title>
        <meta name="description" content="Time Calculate with Years Months Days Hours Minutes Seconds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Main/>
    </div>
  )
}
