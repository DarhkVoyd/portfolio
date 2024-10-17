import Image from "next/image";
import Markdown from "react-markdown";
import codeTheme from "react-syntax-highlighter/dist/cjs/styles/prism/nord";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import rust from "react-syntax-highlighter/dist/cjs/languages/prism/rust";
import { formatDate, getPostBySlug } from "../lib";
import path from "path";
import fs from "fs";

SyntaxHighlighter.registerLanguage("ts", ts);
SyntaxHighlighter.registerLanguage("rust", rust);

export async function generateStaticParams() {
  const postsPath = path.resolve(process.cwd(), "posts");
  const postSlugs = fs
    .readdirSync(postsPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
  return postSlugs.map((postSlug) => ({
    postSlug: postSlug,
  }));
}

export default function Post({ params }: { params: { postSlug: string } }) {
  const post = getPostBySlug(params.postSlug);
  const date = formatDate(post.frontMatter.date);

  const customRenderers = {
    p(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className="relative w-full">
            <Image
              className="object-contain !relative"
              src={image.properties.src}
              alt={image.properties.alt}
              fill
            />
          </div>
        );
      }
      return <p className="text-blog">{paragraph.children}</p>;
    },

    code(code: any) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter style={codeTheme} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },

    pre(pre: any) {
      return pre.children;
    },
  };
  return (
    <div className="w-full text-center">
      <main className="inline-block w-5/6 lg:w-3/6 mw my-20 text-left">
        <article className="prose prose-gray mx-auto dark:prose-invert max-w-none">
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem] text-foreground">
              {post.frontMatter.title}
            </h1>
            <p className="text-gray-400">Posted on {date}</p>
          </div>
          <Markdown components={customRenderers}>{post.content}</Markdown>
        </article>
      </main>
    </div>
  );
}
