import matter from "gray-matter";
import fs from 'fs';
import path from 'path';

interface PostMetadata {
    title: string,
    date: string,
}


interface Post extends PostMetadata {
    slug: string,
    content: string,
}


const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export function getPost(postSlug: string): Post {
    const postPath = path.join(postsDirectory, postSlug, 'index.md');
    const markdown = fs.readFileSync(postPath, 'utf8');
    const { data , content } = matter(markdown);

    const post: Post = {
        slug: postSlug,
        ...(data as PostMetadata),
        content,
    }

    return post;
}

export function getAllPosts(): Post[] {
    const postDirectories = fs.readdirSync(postsDirectory);
    const allPosts = postDirectories.
        map((postDirectory) => getPost(postDirectory)).
        sort((postA, postB) => postA.date > postB.date ? -1 : 1);
    return allPosts;
}

