import { Container } from "@/components/ui/container";

const brands = ["BMW", "Mercedes-Benz", "Audi", "Volkswagen"];

export function Specialization() {
  return (
    <section id="specialization" className="border-b border-line bg-surface py-12 sm:py-14">
      <Container>
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
              02 / Специализация
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              Европейские марки в фокусе
            </h2>
          </div>
          <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line lg:min-w-[58%] lg:grid-cols-4">
            {brands.map((brand, index) => (
              <li
                key={brand}
                className="group relative flex min-h-24 flex-col justify-between overflow-hidden bg-background p-4 transition-colors duration-300 hover:bg-surface-elevated sm:min-h-28 sm:p-5"
              >
                <span className="text-[0.65rem] tabular-nums tracking-[0.18em] text-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative text-sm font-semibold tracking-wide text-accent sm:text-base">
                  {brand}
                </span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-[width] duration-500 group-hover:w-full" />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
