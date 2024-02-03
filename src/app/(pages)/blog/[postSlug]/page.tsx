import Markdown from "react-markdown"
import { getPost } from "../lib"

export default function Post({ params }: { params: { postSlug: string } }) {
    const post = getPost(params.postSlug);
    return (
        <main>
            <Markdown>{post.content}</Markdown>
        </main>
    )
}
