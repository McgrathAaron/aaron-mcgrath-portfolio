import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aaron McGrath | UI Designer & Developer",
  description:
    "Portfolio of Aaron McGrath, a UI designer and developer specializing in creating clean, functional, and engaging digital experiences.",
  keywords: [
    "McGrath",
    "Aaron McGrath",
    "UI Designer",
    "UX Designer",
    "Web Developer",
    "Portfolio",
    "Digital Design",
    "User Interface",
    "User Experience",
  ],
  authors: [{ name: "Aaron McGrath" }],
  creator: "Aaron McGrath",
  publisher: "Aaron McGrath",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bymcgrath.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aaron McGrath | UI Designer & Developer",
    description:
      "Portfolio of Aaron McGrath, a UI designer and developer specializing in creating clean, functional, and engaging digital experiences.",
    url: "https://bymcgrath.com",
    siteName: "Aaron McGrath Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bymcgrath.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aaron McGrath - UI Designer and Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron McGrath | UI Designer & Developer",
    description:
      "Portfolio of Aaron McGrath, a UI designer and developer specializing in creating clean, functional, and engaging digital experiences.",
    images: ["https://bymcgrath.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>

        {/* Structured Data for Person */}
        <Script
          id="structured-data-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aaron McGrath",
              url: "https://bymcgrath.com",
              jobTitle: "UI Designer & Developer",
              sameAs: ["https://www.linkedin.com/in/aaron-mcgrath-b5618511b/"],
              knowsAbout: ["UI Design", "UX Design", "Web Development", "Graphic Design"],
              image: "https://bymcgrath.com/profile-image.jpg",
            }),
          }}
        />

        {/* Structured Data for WebSite */}
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Aaron McGrath Portfolio",
              url: "https://bymcgrath.com",
              description:
                "Portfolio of Aaron McGrath, a UI designer and developer specializing in creating clean, functional, and engaging digital experiences.",
              author: {
                "@type": "Person",
                name: "Aaron McGrath",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
