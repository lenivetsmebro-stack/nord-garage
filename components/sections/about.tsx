import { Container } from "@/components/ui/container";

export function About() {
  return (
    <section id="about" className="border-y border-line bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <p className="border-t border-line pt-4 text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
          06 / О сервисе
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:gap-14 xl:gap-20">
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-[3.5rem]">
            NORD GARAGE — специализированный подход к обслуживанию европейских
            автомобилей
          </h2>
          <div className="flex flex-col justify-between border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
            <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Мы строим формат сервиса вокруг точной диагностики, понятного
              процесса и внимательного отношения к каждому этапу работ — на
              уровне, близком к дилерскому, без дилерской переплаты.
            </p>
            <div
              aria-hidden="true"
              className="mt-10 flex items-baseline justify-between border-t border-line pt-4 text-subtle"
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
  );
}
