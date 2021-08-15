import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clube de programação</title>
      </Head>

      <body>
        <h1>Clube de programação</h1>
        <h2>O clube</h2>
      </body>

    </div>
  )
}
