import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function BookingCta() {
  return (
    <section id="booking-preview" className="border-y border-line bg-accent py-14 text-accent-foreground sm:py-18">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
            Следующий шаг
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Записаться на обслуживание
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 opacity-70">
            Выберите удобный способ связи — мы уточним автомобиль, необходимые
            работы и подходящее время.
          </p>
        </div>
        <Button
          className="sm:self-start lg:self-auto"
          href="#contacts"
          variant="inverse"
        >
          Перейти к контактам
        </Button>
      </Container>
    </section>
  );
}
