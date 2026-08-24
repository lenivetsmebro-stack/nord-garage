import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nord-garage.vercel.app"),
  applicationName: "NORD GARAGE",
  title: {
    default: "NORD GARAGE — премиальный автосервис",
    template: "%s | NORD GARAGE",
  },
  description:
    "NORD GARAGE — техническое обслуживание и ремонт автомобилей BMW, Mercedes-Benz, Audi и Volkswagen.",
  openGraph: {
    title: "NORD GARAGE — премиальный автосервис",
    description:
      "Техническое обслуживание и ремонт BMW, Mercedes-Benz, Audi и Volkswagen.",
    type: "website",
    locale: "ru_RU",
    siteName: "NORD GARAGE",
  },
  twitter: {
    card: "summary_large_image",
    title: "NORD GARAGE — премиальный автосервис",
    description:
      "Техническое обслуживание и ремонт BMW, Mercedes-Benz, Audi и Volkswagen.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full scroll-smooth">
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
