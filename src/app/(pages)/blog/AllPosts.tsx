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
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

async function AllPosts() {
	const allPosts = await getAllPosts();
	return allPosts.map((post) => (
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
	));
}

export default function AllPostsRoot() {
	return (
		<div className="w-full flex flex-col gap-6">
			<Suspense fallback={<PostSkeleton />}>
				<AllPosts />
			</Suspense>
		</div>
	);
}

function PostSkeleton() {
	return Array.from({ length: 3 }).map((_, index) => (
		<div key={index}>
			<div>
				<Card>
					<CardHeader>
						<CardTitle>
							<Skeleton className="w-[200px] h-[16px] rounded-full" />
						</CardTitle>
						<CardDescription>
							<Skeleton className="w-[100px] h-[16px] rounded-full" />
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Skeleton className="w-full h-[16px] rounded-full my-1" />
						<Skeleton className="w-full h-[16px] rounded-full my-1" />
					</CardContent>
				</Card>
			</div>
		</div>
	));
}
