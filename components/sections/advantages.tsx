import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const advantages = [
  "Специализация на европейских марках",
  "Понятный подход к обслуживанию",
  "Современная диагностика",
  "Внимание к качеству работ",
  "Прозрачная коммуникация с клиентом",
];

export function Advantages() {
  return (
    <section className="border-y border-line bg-surface py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading
          description="Подход, в котором технологии, специализация и понятный диалог работают вместе."
          eyebrow="Почему NORD GARAGE"
          title="Сервис без лишней сложности"
        />
        <ol className="border-t border-line">
          {advantages.map((advantage, index) => (
            <li
              key={advantage}
              className="grid grid-cols-[2.5rem_1fr] items-center gap-3 border-b border-line py-5 sm:grid-cols-[4rem_1fr] sm:py-6"
            >
              <span className="text-xs tabular-nums text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-medium sm:text-lg">{advantage}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
