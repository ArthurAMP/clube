import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <a href="#inicio" className={styles.navitems}>inscreva-se</a>
            <a href="#sobre" className={styles.navitems}>sobre</a>
            <a href="#faq" className={styles.navitems}>faq</a>
            <a href="#contato" className={styles.navitems}>contato</a>
        </div>
    )
}