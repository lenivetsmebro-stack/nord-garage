import { Container } from "@/components/ui/container";

export function ContactsPreview() {
  return (
    <section id="contacts" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 border-b border-line pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:pb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
            09 / Контакты
          </p>
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
              Связаться с NORD GARAGE
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Контактная информация уточняется.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
