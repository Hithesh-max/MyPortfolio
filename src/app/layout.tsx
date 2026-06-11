import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hithesh D | AI Engineer & Developer",
  description: "Portfolio of Hithesh D — AI/ML Engineer, Web Developer, and 3rd Year B.E. IT student at MIT Manipal. Specializing in Machine Learning, Generative AI, and Full-Stack Development.",
  keywords: ["Hithesh D", "AI Engineer", "ML Developer", "Web Developer", "MIT Manipal", "Portfolio", "Machine Learning", "Python", "React"],
  authors: [{ name: "Hithesh D" }],
  openGraph: {
    title: "Hithesh D | AI Engineer & Developer",
    description: "Turning ideas into code and creativity into experiences. Exploring AI, web development, and emerging technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
