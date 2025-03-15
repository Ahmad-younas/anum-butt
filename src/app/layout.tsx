import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anum Butt - Portfolio",
  description: "A seasoned and dynamic IT Professional with 12+ years of hands-on experience across software architecture, design, development, and production support. I have a solid track record of driving innovation and delivering high-impact solutions for a diverse range of clients, from startups to Fortune 500 companies. Known for my analytical mindset and attention to detail, I excel at enhancing end-user functionality and ensuring project accuracy from start to finish. Whether leading complex projects or collaborating within teams, I'm passionate about using technology to solve real-world problems and create scalable, efficient systems that deliver measurable results. In addition to my professional experience, I'm actively involved in public speaking and mentoring through platforms like ProWomen, where I support and empower other women in tech.",
  icons: {
    icon: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/manifest.json',
  themeColor: '#ffffff'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} } antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
