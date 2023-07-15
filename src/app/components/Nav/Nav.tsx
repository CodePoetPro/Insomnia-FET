import Image from 'next/image'

import styles from './Nav.module.scss'

export default function Nav() {
    return (
        <nav className={styles.Nav}>
            <Image src="/luna.svg" alt="Luna Exchange" width={50} height={50} />
            <ul>
                <li><a href="/">BTC</a></li>
                <li><a href="/about">NFT</a></li>
            </ul>
        </nav>
        )
}