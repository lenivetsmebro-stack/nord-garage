import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const footerLinks = [
  { href: "/#services", label: "Услуги" },
  { href: "/works", label: "Наши работы" },
  { href: "/about", label: "О нас" },
  { href: "/contacts", label: "Контакты" },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-10 sm:py-14">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto]">
          <div>
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-6 text-muted">
              Техническое обслуживание и ремонт автомобилей BMW,
              Mercedes-Benz, Audi и Volkswagen.
            </p>
          </div>
          <nav aria-label="Навигация в подвале">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm lg:grid-cols-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-muted transition-colors duration-300 hover:text-foreground"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-xs uppercase tracking-[0.14em] text-subtle sm:flex-row sm:justify-between">
          <p>NORD GARAGE</p>
          <p>Премиальный автосервис</p>
        </div>
      </Container>
    </footer>
  );
}
