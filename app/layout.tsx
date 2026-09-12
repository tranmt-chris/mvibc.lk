import type { Metadata } from "next";
import "./globals.css";
import site from "@/src/data/site.json";
import home from "@/src/data/home.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://mvibc.lk"),
  title: `${site.name} | Anuradhapura, Sri Lanka`, description: home.intro,
  icons: { icon: "/favicon.svg" },
  openGraph: { title: site.name, description: home.intro, type: "website", images: [{ url: "/og.png", width: 1728, height: 911, alt: site.name }] },
  twitter: { card: "summary_large_image", title: site.name, description: home.intro, images: ["/og.png"] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
