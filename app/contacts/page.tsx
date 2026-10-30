import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { contactDetails } from "@/config/contact";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Контакты NORD GARAGE в Калининграде: запись через Telegram, адрес и режим работы.",
  alternates: {
    canonical: "/contacts",
  },
};

const contactItems = [
  {
    href: contactDetails.telegramHref,
    label: "Запись",
    value: "Telegram-бот " + contactDetails.telegramDisplay,
  },
  {
    label: "Адрес",
    value: contactDetails.addressDisplay,
  },
  {
    label: "Режим работы",
    value: contactDetails.scheduleDisplay,
  },
  {
    label: "Сайт",
    value: contactDetails.siteDisplay,
  },
];

const quickActions = [
  {
    href: contactDetails.telegramHref,
    label: "Записаться через Telegram",
    variant: "primary" as const,
  },
];

export default function ContactsPage() {
  return (
    <>
      <section className="border-b border-line py-12 sm:py-16 lg:py-24">
        <Container>
          <Link
            className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-subtle transition-colors duration-300 hover:text-foreground"
            href="/"
          >
            ← На главную
          </Link>
          <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
                Контакты / NORD GARAGE
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Связаться с NORD GARAGE
              </h1>
            </div>
            <p className="border-t border-line pt-6 text-base leading-7 text-muted lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              Выберите удобный способ связи — уточним автомобиль, необходимые
              работы и подходящее время.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
                01 / Основные контакты
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Всегда на связи
              </h2>
            </div>
            <dl className="overflow-hidden rounded-card border border-line bg-line">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-3 border-b border-line bg-surface px-5 py-5 last:border-b-0 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-center sm:px-7"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                    {item.label}
                  </dt>
                  <dd className="min-w-0">
                    {item.href ? (
                      <a
                        className="block break-words text-sm font-medium text-foreground transition-colors duration-300 [overflow-wrap:anywhere] hover:text-muted sm:text-base"
                        href={item.href}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="block break-words text-sm font-medium text-foreground [overflow-wrap:anywhere] sm:text-base">
                        {item.value}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 border-t border-line pt-8 sm:mt-14 sm:pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
              Быстрая связь
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {quickActions.map((action) => (
                <Button
                  key={action.href}
                  href={action.href}
                  variant={action.variant}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-12 sm:py-16 lg:py-24">
        <Container className="grid gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-16">
          <div className="relative min-h-72 overflow-hidden rounded-card border border-line bg-background sm:min-h-96">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(rgba(215,217,221,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(215,217,221,0.06)_1px,transparent_1px)] bg-[size:36px_36px] sm:bg-[size:48px_48px]"
            />
            <div
              aria-hidden="true"
              className="absolute left-[18%] top-[62%] h-px w-[72%] -rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute left-[58%] top-[42%] h-4 w-4 rounded-full border-4 border-accent bg-background shadow-[0_0_0_8px_rgba(215,217,221,0.08)]"
            />
            <span className="absolute bottom-5 left-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-subtle sm:bottom-7 sm:left-7">
              Калининград / 27
            </span>
          </div>
          <div className="flex flex-col justify-between border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
                02 / Локация
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Как нас найти
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-muted">
                {contactDetails.addressDisplay}
              </p>
            </div>
            <Button
              className="mt-8 w-full sm:w-auto lg:self-start"
              href={contactDetails.addressMapHref}
              variant="secondary"
            >
              Построить маршрут
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container className="grid gap-8 sm:gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
              03 / Режим работы
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Планируйте визит
            </h2>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            <div className="flex min-h-32 flex-col justify-between bg-surface p-5 sm:min-h-40 sm:p-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                {contactDetails.scheduleWeekdaysLabel}
              </dt>
              <dd className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                {contactDetails.scheduleWeekdaysHours}
              </dd>
            </div>
            <div className="flex min-h-32 flex-col justify-between bg-surface p-5 sm:min-h-40 sm:p-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                {contactDetails.scheduleSundayLabel}
              </dt>
              <dd className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                {contactDetails.scheduleSundayHours}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="border-y border-line bg-accent py-14 text-accent-foreground sm:py-18">
        <Container className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
              Запись на обслуживание
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Обсудить задачу автомобиля
            </h2>
          </div>
          <Button
            className="w-full sm:w-auto"
            href={contactDetails.telegramHref}
            variant="inverse"
          >
            Записаться через Telegram
          </Button>
        </Container>
      </section>
    </>
  );
}
