import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[65svh] items-center border-b border-line py-16 sm:py-24">
      <Container>
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
            404 / NORD GARAGE
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Страница не найдена
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Возможно, адрес изменился или страница больше не существует.
            Вернитесь на главную или перейдите к направлениям обслуживания.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/">На главную</Button>
            <Button href="/#services" variant="secondary">
              Посмотреть услуги
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
