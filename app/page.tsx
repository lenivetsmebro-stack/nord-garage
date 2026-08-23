import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const directions = [
  "Техническое обслуживание",
  "Компьютерная диагностика",
  "Ремонт подвески",
  "Тормозная система",
  "Ремонт двигателя",
  "Ремонт коробки передач",
];

const brands = ["BMW", "Mercedes-Benz", "Audi", "Volkswagen"];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line py-20 sm:py-28 lg:py-36">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(215,217,221,0.09),transparent_32%)]"
        />
        <Container className="relative">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-muted sm:text-sm">
            Премиальный автосервис
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Уровень обслуживания, близкий к дилерскому,
            <span className="text-muted"> без дилерской переплаты</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Техническое обслуживание, диагностика и ремонт автомобилей BMW,
            Mercedes-Benz, Audi и Volkswagen.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#directions">Направления работ</Button>
            <Button href="#specialization" variant="secondary">
              Специализация
            </Button>
          </div>
        </Container>
      </section>

      <section id="directions" className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                Направления
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Системный подход к автомобилю
              </h2>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
              {directions.map((direction, index) => (
                <li
                  key={direction}
                  className="flex min-h-24 items-center gap-4 bg-surface px-5 py-6 transition-colors duration-300 hover:bg-surface-elevated"
                >
                  <span className="text-xs tabular-nums text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium sm:text-base">
                    {direction}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section id="specialization" className="border-y border-line bg-surface py-12">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
            Основная специализация
          </p>
          <ul className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {brands.map((brand) => (
              <li
                key={brand}
                className="rounded-xl border border-line px-4 py-5 text-center text-sm font-semibold tracking-wide text-accent sm:text-base"
              >
                {brand}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
