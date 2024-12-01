import "@/styles/globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ImageViewer } from "@/components/shells/image-viewer"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://your-typed-website.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ["keywords"],
  authors: [
    {
      name: "Nobody McGee",
      url: "https://your-typed-website.vercel.app"
    }
  ],
  creator: "noMcGee",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@nomcgeeeeeeeeeee"
  },
  icons: {
    icon: "/favicon.ico"
  }
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto w-full mb-16 max-w-screen-sm py-8">
            {children}
          </main>
          <ImageViewer />
        </ThemeProvider>
      </body>
    </html>
  )
}
