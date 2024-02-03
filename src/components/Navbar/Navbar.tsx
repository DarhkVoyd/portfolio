import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.container}>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><Link href="/blog">Blog</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
