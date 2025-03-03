import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { inter } from "./fonts/font";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | JobSpring',
    default: 'JobSpring | AI-Powered Job Search Tools & Career Resources'
  },
  description: 'JobSpring enhances your job search with AI-driven interview preparation and tailored resumes. Boost your chances of success with smart career tools powered by AI!',
  keywords: 'AI job interview, AI interview preparation, tailored resumes, AI resume builder, smart job search, automated job applications, AI career assistant, resume optimization, interview coaching, job application automation, AI-powered hiring, resume tailoring, career growth tools, job search automation, AI recruitment',
  icons: {
    icon: '/favicon.ico'
  },
  viewport: 'width=device-width, initial-scale=1.0'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
