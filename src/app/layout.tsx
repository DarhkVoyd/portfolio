import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "JIGSAW",
    description: "Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}
