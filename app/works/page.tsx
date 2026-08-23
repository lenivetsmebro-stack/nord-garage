import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WorkVisual } from "@/components/works/work-visual";
import { workVisuals } from "@/config/works";

export const metadata: Metadata = {
  title: "Наши работы",
  description:
    "Визуальная подборка NORD GARAGE о внимании к автомобилю, процессу и деталям.",
};

const approach = [
  "Внимание к процессу",
  "Специализация на европейских автомобилях",
  "Понятная коммуникация",
  "Внимание к качеству",
];

export default function WorksPage() {
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
                Наши работы / NORD GARAGE
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Работы в деталях
              </h1>
            </div>
            <p className="border-t border-line pt-6 text-base leading-7 text-muted lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              Внимание к автомобилю, процессу и деталям — в каждом элементе
              работы.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-24">
        <Container>
          <ul className="grid min-w-0 gap-3 md:grid-cols-2 md:gap-4 lg:h-[44rem] lg:grid-cols-[3fr_2fr] lg:grid-rows-2 xl:h-[48rem]">
            {workVisuals.map((visual, index) => (
              <li
                key={visual.src}
                className={
                  index === 0
                    ? "min-w-0 md:col-span-2 lg:col-span-1 lg:row-span-2"
                    : "min-w-0"
                }
              >
                <WorkVisual
                  className={
                    index === 0
                      ? "h-full md:aspect-[16/10] lg:aspect-auto"
                      : "h-full lg:aspect-auto"
                  }
                  visual={visual}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-12 sm:py-16 lg:py-24">
        <Container className="grid gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
              Подход / NORD GARAGE
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
              Уровень начинается с отношения к деталям
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Уровень обслуживания, близкий к дилерскому, без дилерской
              переплаты.
            </p>
          </div>
          <ul className="border-t border-line">
            {approach.map((item) => (
              <li
                key={item}
                className="border-b border-line py-4 text-sm font-medium sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
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
