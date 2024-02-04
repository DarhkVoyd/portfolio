import Link from 'next/link';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Markdown from 'react-markdown';
import { getAllPosts, formatDate } from './lib';

export default function AllPosts() {
	const allPosts = getAllPosts();
	return (
		<div className="flex flex-col gap-6">
			{allPosts.map((post) => (
				<div key={post.slug}>
					<Link href={`blog/${post.slug}`} className="my-2">
						<Card className="hover:bg-primary-foreground">
							<CardHeader>
								<CardTitle>{post.frontMatter.title}</CardTitle>
								<CardDescription>
									{formatDate(post.frontMatter.date)}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Markdown>{post.excerpt}</Markdown>
							</CardContent>
						</Card>
					</Link>
				</div>
			))}
		</div>
	);
}
