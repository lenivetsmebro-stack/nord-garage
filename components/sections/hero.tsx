import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const brands = ["BMW", "Mercedes-Benz", "Audi", "Volkswagen"];

function VehicleVisual() {
  return (
    <div
      aria-label="Стилизованный автомобильный силуэт"
      className="relative aspect-[5/4] min-h-76 overflow-hidden rounded-[1.75rem] border border-line bg-[#0d0f12] sm:min-h-104 lg:aspect-auto lg:h-full"
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(215,217,221,0.16),transparent_27%),linear-gradient(145deg,rgba(255,255,255,0.055),transparent_38%)]" />
      <div className="absolute inset-y-0 left-[12%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 top-[18%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute right-[3%] top-[24%] h-[49%] w-[95%] -skew-x-12 rounded-[58%_44%_27%_35%] border border-white/18 bg-gradient-to-b from-white/10 via-white/[0.025] to-transparent shadow-[0_26px_70px_rgba(0,0,0,0.55)]" />
      <div className="absolute right-[12%] top-[31%] h-[19%] w-[47%] -skew-x-[22deg] rounded-t-[70%] border-t border-white/20 bg-white/[0.025]" />
      <div className="absolute bottom-[28%] left-[14%] h-16 w-16 rounded-full border border-white/20 bg-background shadow-[inset_0_0_0_10px_rgba(255,255,255,0.025)] sm:h-20 sm:w-20" />
      <div className="absolute bottom-[28%] right-[12%] h-16 w-16 rounded-full border border-white/20 bg-background shadow-[inset_0_0_0_10px_rgba(255,255,255,0.025)] sm:h-20 sm:w-20" />
      <div className="absolute bottom-[22%] right-[6%] h-px w-[88%] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between sm:bottom-8 sm:left-8 sm:right-8">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-subtle">
          NORD / 01
        </span>
        <span className="h-px w-16 bg-white/20 sm:w-24" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line py-10 sm:py-14 lg:min-h-[calc(100svh-4.5rem)] lg:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(215,217,221,0.08),transparent_28%)]"
      />
      <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(360px,0.88fr)] lg:items-stretch lg:gap-10 xl:gap-12">
        <div className="min-w-0 flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            NORD GARAGE · Премиальный автосервис
          </p>
          <h1 className="mt-6 max-w-3xl text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
            Сервис для тех,
            <br />
            кто выбирает уровень.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-foreground sm:text-lg sm:leading-8">
            Техническое обслуживание, диагностика и ремонт BMW,
            Mercedes-Benz, Audi и Volkswagen.
          </p>
          <p className="mt-4 max-w-xl border-l border-accent/50 pl-4 text-sm leading-6 text-muted sm:text-base">
            Уровень обслуживания, близкий к дилерскому,
            <br className="hidden sm:block" /> без дилерской переплаты.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#booking-preview">Записаться на обслуживание</Button>
            <Button href="#services" variant="secondary">
              Посмотреть услуги
            </Button>
          </div>
          <ul
            aria-label="Основная специализация"
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-subtle"
          >
            {brands.map((brand) => (
              <li key={brand}>{brand}</li>
            ))}
          </ul>
        </div>
        <VehicleVisual />
      </Container>
    </section>
  );
}
