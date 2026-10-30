import { contactDetails } from "@/config/contact";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const contactActions = [
  {
    href: contactDetails.telegramHref,
    label: "Записаться через Telegram",
    variant: "inverse" as const,
  },
];

export function BookingCta() {
  return (
    <section
      id="booking-preview"
      className="border-y border-line bg-accent py-14 text-accent-foreground sm:py-18"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
            Следующий шаг
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Записаться на обслуживание
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 opacity-70">
            Напишите в Telegram-бот — он уточнит автомобиль, необходимые
            работы и подходящее время.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {contactActions.map((action) => (
            <Button
              key={action.href}
              href={action.href}
              variant={action.variant}
            >
              {action.label}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
}
