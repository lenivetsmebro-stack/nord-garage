import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NORD GARAGE — премиальный автосервис",
    template: "%s | NORD GARAGE",
  },
  description:
    "NORD GARAGE — техническое обслуживание и ремонт автомобилей BMW, Mercedes-Benz, Audi и Volkswagen.",
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
