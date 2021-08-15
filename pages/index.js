import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clube de programação</title>
      </Head>
      <div className={styles.navbar}>
        <a href="#inicio" className={styles.navitems}>inscreva-se</a>
        <a href="#sobre" className={styles.navitems}>sobre</a>
        <a href="#faq" className={styles.navitems}>faq</a>
        <a href="#contato" className={styles.navitems}>contato</a>
      </div>
      <body>
        <h1>Clube de programação</h1>
        <h2>O clube</h2>
      </body>
    </div>
  )
}
