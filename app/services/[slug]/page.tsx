import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getServiceBySlug, services } from "@/config/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const brands = ["BMW", "Mercedes-Benz", "Audi", "Volkswagen"];

const approach = [
  "Специализация на европейских марках",
  "Понятный и последовательный процесс",
  "Внимание к качеству работ",
  "Прозрачная коммуникация с клиентом",
];

function getServiceOrNotFound(slug: string) {
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return service;
}

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceOrNotFound(slug);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceOrNotFound(slug);

  return (
    <>
      <section className="border-b border-line py-12 sm:py-16 lg:py-24">
        <Container>
          <Link
            className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-subtle transition-colors duration-300 hover:text-foreground"
            href="/#services"
          >
            ← Все услуги
          </Link>
          <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
                Услуга / NORD GARAGE
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                {service.description}
              </p>
            </div>
            <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                Основная специализация
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-accent">
                {brands.map((brand) => (
                  <li key={brand}>{brand}</li>
                ))}
              </ul>
              <Button className="mt-7 w-full sm:w-auto" href="/#booking-preview">
                Записаться на обслуживание
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-24">
        <Container className="grid gap-8 sm:gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
              01 / Состав услуги
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Что входит
            </h2>
          </div>
          <ol className="border-t border-line">
            {service.included.map((item, index) => (
              <li
                key={item}
                className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-4 sm:grid-cols-[4rem_1fr] sm:py-5"
              >
                <span className="text-xs tabular-nums text-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-6 text-foreground sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-12 sm:py-16 lg:py-24">
        <Container className="grid gap-8 sm:gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
              02 / Ориентиры
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Когда стоит обратиться
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-muted">
              Отдельный признак не определяет причину неисправности — точный
              вывод требует последовательной проверки.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {service.signs.map((item) => (
              <li
                key={item}
                className="flex min-h-24 items-end bg-background p-4 text-sm leading-6 text-muted sm:min-h-28 sm:p-5 sm:text-base lg:min-h-32 lg:p-6"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
                03 / Подход
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
                Подход NORD GARAGE
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
          </div>
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
