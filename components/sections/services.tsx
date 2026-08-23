import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/config/services";

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          description="Шесть ключевых направлений обслуживания и ремонта — без лишнего, с вниманием к задаче автомобиля."
          eyebrow="Услуги"
          title="Основные направления работ"
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.slug} className="min-w-0">
              <Link
                className="group relative flex min-h-60 flex-col overflow-hidden rounded-card border border-line bg-surface p-6 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-subtle hover:bg-surface-elevated sm:p-7"
                href={`/services/${service.slug}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs tabular-nums tracking-[0.2em] text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-right text-[0.65rem] uppercase tracking-[0.16em] text-subtle">
                    {service.detail}
                  </span>
                </div>
                <div className="mt-auto pt-10">
                  <h3 className="text-xl font-semibold tracking-[-0.025em]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {service.cardDescription}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-px bg-accent/70 transition-[width] duration-500 group-hover:w-full ${
                    index % 3 === 0
                      ? "w-1/3"
                      : index % 3 === 1
                        ? "w-1/2"
                        : "w-2/3"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
