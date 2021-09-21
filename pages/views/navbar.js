import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
config.autoAddCss = false;

export default function Navbar() {
    const responsive = () => {
        var x = document.getElementById("navbar");
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar";
        }
    }
    return (
        <div className={styles.navbar} id="navbar">
            <a href="#inicio" className={styles.navitems}>inscreva-se</a>
            <a href="#sobre" className={styles.navitems}>sobre</a>
            <a href="#faq" className={styles.navitems}>faq</a>
            <a href="#contato" className={styles.navitems}>contato</a>
            <Link href="#" onclick={responsive}>
                <FontAwesomeIcon className={styles.icon} icon={faBars}></FontAwesomeIcon>
            </Link>
        </div>
    )
}