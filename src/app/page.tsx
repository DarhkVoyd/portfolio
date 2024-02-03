import Link from "next/link";
import ThreeExperience from "@/components/ThreeExperience";
import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <ThreeExperience />
            <Link style={{
                    fontFamily: 'Impact',
                    textDecoration: 'none',
                    color: 'white',
                    fontSize: '48px',
                    position: 'absolute',
                    zIndex:9999
                }} href="blog">Blog</Link>
        </>
    );
}
