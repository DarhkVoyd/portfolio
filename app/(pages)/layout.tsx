import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-auto min-h-screen bg-background">
      <div className="fixed top-0 w-full h-screen pointer-events-none z-[9999]">
        <div className="h-full w-full bg-[url('/blur.png')] bg-repeat bg-[length:64px] opacity-[0.08]"></div>
      </div>
      <Navbar />
      {children}
    </div>
  );
}
