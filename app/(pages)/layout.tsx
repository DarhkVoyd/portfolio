import Navbar from '@/components/Navbar/Navbar';
import Blur from '@/components/ui/blur';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-auto min-h-screen bg-background">
			<Blur />
			<Navbar />
			{children}
		</div>
	);
}
