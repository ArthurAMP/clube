import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './views/navbar'
import Landing from './views/landing'
export default function Home() {
  return (

    <div className={styles.container}>

      <Head>
        <title>Clube de programação</title>
      </Head>
      <Navbar />
      <Landing />


    </div>
  )
}