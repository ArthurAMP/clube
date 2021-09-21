import styles from '../../styles/Landing.module.css'
import Image from 'next/image'
import Link from 'next/link'

import backgroundImage from '../../public/bruh2.jpg'

export default function Landing() {
  return (
    <div>


      <Image
        src={backgroundImage}
        alt="background"
        className={styles.background}
        layout="fill"
        objectFit="cover"
      />

      <div className={styles.textArea}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  ut labore et dolore  ut labore et dolore  ut labore et dolore lorem ipsum dolor.</p>
        <div className={styles.btn}>
          <Link href="/"><a>Quero me inscrever!</a></Link>
        </div>
      </div>

    </div>
  )
}