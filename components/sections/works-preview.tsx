import { Container } from "@/components/ui/container";

export function WorksPreview() {
  return (
    <section id="works" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative min-h-88 overflow-hidden rounded-[1.75rem] border border-line bg-surface p-6 sm:min-h-104 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_40%,rgba(215,217,221,0.1),transparent_25%),linear-gradient(135deg,transparent_35%,rgba(255,255,255,0.025))]" />
          <div className="absolute bottom-[30%] right-[6%] h-px w-[58%] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <div className="absolute right-[8%] top-[22%] h-[48%] w-[52%] -skew-x-12 rounded-[60%_40%_28%_32%] border border-white/10" />
          <div className="relative flex h-full min-h-76 flex-col justify-between sm:min-h-84">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
              05 / Наши работы
            </p>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
                Работы в деталях
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted">
                Точный процесс, внимание к задаче и визуальная история каждого
                проекта.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
