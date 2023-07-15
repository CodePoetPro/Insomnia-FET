import Image from 'next/image'
import Link from 'next/link'

import styles from './Nav.module.scss'

export default function Nav() {
    return (
        <nav className={styles.Nav}>
            <Image src="/luna.svg" alt="Luna Exchange" width={50} height={50} />
            <ul>
                <li><Link href="/">BTC</Link></li>
            </ul>
        </nav>
        )
}