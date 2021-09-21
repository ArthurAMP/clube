import Head from 'next/head'
import Navbar from './views/navbar'
import Landing from './views/landing'

import styles from '../styles/Home.module.css'
export default function Home() {
  return (

    <div className={styles.container}>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />


      <Head>
        <title>Clube de programação</title>
      </Head>
      <Navbar />
      <Landing />


    </div>
  )
}