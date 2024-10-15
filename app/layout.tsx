import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { baseMetadata } from "@/utils/const-metadata";

export const metadata: Metadata = {
  ...baseMetadata, // Spread the base metadata
  title: "Kollaps Verhindern - Pflegeversicherung reformieren",
  description:
    "Drohender Kollaps der Pflegeversicherung: Steigende Beiträge sind unausweichlich, um steigende Kosten zu decken und eine Überlastung des Systems verhindern.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta
          property="og:title"
          content="Kollaps Verhindern - Pflegeversicherung reformieren"
        />
        <meta
          property="og:description"
          content="Drohender Kollaps der Pflegeversicherung: Steigende Beiträge sind unausweichlich, um steigende Kosten zu decken und eine Überlastung des Systems verhindern."
        />
        <meta
          property="og:image"
          content="https://kollaps-pflegeversicherung.vercel.app/images/kollaps.jpg"
        />
        <meta
          property="og:url"
          content="https://kollaps-pflegeversicherung.vercel.app/"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
