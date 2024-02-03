import Link from "next/link";
import { getAllPosts } from "./lib"

export default function AllPosts() {
    const allPosts = getAllPosts();
    return <div>
        {
            allPosts.map(post =>
                    <Link key={post.slug} href={`blog/${post.slug}`}>{post.title}</Link>
            )
        }
    </div>
}
