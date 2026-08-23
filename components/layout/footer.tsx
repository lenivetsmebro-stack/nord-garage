import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="border-t border-line py-8 sm:py-10">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-md text-sm leading-6 text-muted">
            Техническое обслуживание и ремонт автомобилей BMW, Mercedes-Benz,
            Audi и Volkswagen.
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.16em] text-subtle">
          Премиальный автосервис
        </p>
      </Container>
    </footer>
  );
}
