import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import heroBg from '../public/bruh2.jpg'

export default function Home() {
  return (

    <div className={styles.container}>

      <Head>
        <title>Clube de programação</title>
      </Head>

      <div className={styles.heroBackground}>

        <div className={styles.background}>
          <Image src={heroBg} alt="background" />
        </div>

        <div className={styles.textArea}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  ut labore et dolore  ut labore et dolore  ut labore et dolore lorem ipsum dolor.</p>
          <div className={styles.btn}>
            <Link href="/"><a>Quero me inscrever!</a></Link>
          </div>
        </div>

      </div>



    </div>
  )
}