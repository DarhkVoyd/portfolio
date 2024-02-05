import AllPosts from './AllPosts';

export default function BlogPage() {
	return (
		<div className="w-full flex justify-center">
			<main className="w-5/6 lg:w-3/6 flex flex-col items-center">
				<h1 className="self-start p-2 my-6 text-2xl">All Posts</h1>
				<AllPosts />
			</main>
		</div>
	);
}
