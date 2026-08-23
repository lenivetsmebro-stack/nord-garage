import { Container } from "@/components/ui/container";

export function About() {
  return (
    <section id="about" className="border-y border-line bg-surface py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-8 lg:grid-cols-[minmax(10rem,0.4fr)_minmax(0,1.6fr)] lg:gap-12">
        <p className="border-t border-line pt-4 text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
          О сервисе
        </p>
        <div>
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
            NORD GARAGE — специализированный подход к обслуживанию европейских
            автомобилей
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Мы строим формат сервиса вокруг точной диагностики, понятного
            процесса и внимательного отношения к каждому этапу работ — на
            уровне, близком к дилерскому, без дилерской переплаты.
          </p>
        </div>
      </Container>
    </section>
  );
}
