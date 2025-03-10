import type { Metadata } from "next";
import "@/config/globals.css";
import { ThemeProvider } from "@/layouts/provider";
import { ThemeHeader } from "@/components/common/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='h-full scroll-my-20 scroll-smooth'
      suppressHydrationWarning
    >
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta property='og:title' content='Create Next App' />
        <meta
          property='og:description'
          content='Generated by create next app'
        />
        {/* <meta property="og:image" content="" /> */}
        {/* <meta property="og:url" content="/" /> */}
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className='font-pretendard flex min-h-screen flex-col'>
        <ThemeProvider>
          <ThemeHeader />
          <main className='flex flex-1 flex-col py-14'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
