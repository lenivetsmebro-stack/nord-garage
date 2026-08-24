import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "О сервисе",
  description:
    "NORD GARAGE — специализированный подход к обслуживанию BMW, Mercedes-Benz, Audi и Volkswagen.",
  alternates: {
    canonical: "/about",
  },
};

const approach = [
  "Специализация на европейских автомобилях",
  "Понятный и последовательный процесс",
  "Внимание к качеству работ",
  "Прозрачная коммуникация с клиентом",
];

const brands = ["BMW", "Mercedes-Benz", "Audi", "Volkswagen"];

export default function AboutPage() {
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
          <div className="mt-7 grid gap-6 sm:mt-10 sm:gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
                О сервисе / NORD GARAGE
              </p>
              <h1 className="mt-4 max-w-5xl text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.04em] sm:mt-5 sm:text-6xl sm:leading-[1.05] lg:text-[4.5rem]">
                NORD GARAGE — специализированный подход к обслуживанию
                европейских автомобилей
              </h1>
            </div>
            <div className="border-t border-line pt-5 sm:pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Мы строим формат сервиса вокруг точной диагностики, понятного
                процесса и внимательного отношения к каждому этапу работ — на
                уровне, близком к дилерскому, без дилерской переплаты.
              </p>
              <div
                aria-hidden="true"
                className="mt-6 flex items-baseline justify-between border-t border-line pt-4 text-subtle sm:mt-8"
              >
                <span className="text-sm font-semibold tracking-[-0.02em]">
                  NORD
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.22em]">
                  GARAGE
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-surface py-12 sm:py-16 lg:py-24">
        <Container className="grid gap-8 sm:gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
            01 / Принцип сервиса
          </p>
          <div>
            <h2 className="max-w-5xl text-[1.75rem] font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Уровень обслуживания, близкий к дилерскому, без дилерской
              переплаты.
            </h2>
            <p className="mt-7 max-w-2xl border-l border-accent/40 pl-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              В центре подхода — последовательная работа с задачей автомобиля
              и понятная коммуникация на каждом этапе.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
                02 / Основа подхода
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Последовательно и понятно
              </h2>
            </div>
            <ol className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
              {approach.map((item, index) => (
                <li
                  key={item}
                  className="flex min-h-28 flex-col justify-between bg-surface p-4 sm:min-h-40 sm:p-6"
                >
                  <span className="text-xs tabular-nums tracking-[0.18em] text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-6 text-base font-medium leading-6 sm:mt-8 sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
                03 / Специализация
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Европейские автомобили
              </h2>
            </div>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line lg:min-w-[58%] lg:grid-cols-4">
              {brands.map((brand) => (
                <li
                  key={brand}
                  className="flex min-h-20 items-center justify-center bg-background px-4 text-center text-sm font-semibold tracking-wide text-accent sm:min-h-24 sm:text-base"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-accent py-14 text-accent-foreground sm:py-18">
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
            href="/#booking-preview"
            variant="inverse"
          >
            Записаться на обслуживание
          </Button>
        </Container>
      </section>
    </>
  );
}
