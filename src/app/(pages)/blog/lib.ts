import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

declare namespace Blog {
	interface Post {
		slug: string;
		frontMatter: PostFrontMatter;
		excerpt: string;
		content: string;
	}

	interface PostFrontMatter {
		title: string;
		date: string;
	}
}
const postsDirectory = path.join(process.cwd(), 'src', 'posts');

function extractExcerpt(file: matter.GrayMatterFile<string>): void {
	const maxLength = 200;

	const contentLines = file.content.split('\n').map((line) => line.trim());

	let excerpt = '';

	for (const line of contentLines) {
		if (line.startsWith('![')) {
			continue;
		}

		excerpt += line + ' ';

		if (excerpt.length >= maxLength) {
			break;
		}
	}

	file.excerpt =
		excerpt.trim().slice(0, maxLength) +
		(excerpt.length > maxLength ? '...' : '');
}

export function formatDate(inputDateString: string): string {
	let [day, month, year] = inputDateString.split('-').map(Number);
	if (!year || !month || !day) {
		throw Error('Invalid Date. Usage: dd-mm-yyyy');
	}
	const inputDate = new Date(year, month - 1, day);

	const formattedDate = inputDate.toLocaleString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});
	return formattedDate;
}

export function getPostBySlug(postSlug: string): Blog.Post {
	const postPath = path.join(postsDirectory, postSlug, 'index.md');
	const markdown = fs.readFileSync(postPath, 'utf8');

	const { data, content, excerpt } = matter(markdown, {
		excerpt: extractExcerpt,
	});

	const post = {
		slug: postSlug,
		frontMatter: data as Blog.PostFrontMatter,
		excerpt: excerpt || '',
		content,
	};

	return post;
}

export function getAllPosts(): Blog.Post[] {
	const postDirectories = fs
		.readdirSync(postsDirectory)
		.filter((file) => file !== '.DS_Store');
	const allPosts = postDirectories
		.map((postDirectory) => getPostBySlug(postDirectory))
		.sort((postA, postB) =>
			postA.frontMatter.date > postB.frontMatter.date ? -1 : 1
		);
	return allPosts;
}
