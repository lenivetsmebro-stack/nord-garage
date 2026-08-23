import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WorkVisual } from "@/components/works/work-visual";
import { workVisuals } from "@/config/works";

export function WorksPreview() {
  return (
    <section id="works" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          description="Точный процесс, внимание к деталям и визуальная история каждого проекта."
          eyebrow="05 / Наши работы"
          title="Работы в деталях"
        />
        <ul className="mt-10 grid min-w-0 gap-3 md:grid-cols-2 md:gap-4 lg:h-[42rem] lg:grid-cols-[3fr_2fr] lg:grid-rows-2 xl:h-[46rem]">
          {workVisuals.map((visual, index) => (
            <li
              key={visual.src}
              className={
                index === 0
                  ? "min-w-0 md:col-span-2 lg:col-span-1 lg:row-span-2"
                  : "min-w-0"
              }
            >
              <WorkVisual
                className={
                  index === 0
                    ? "h-full md:aspect-[16/10] lg:aspect-auto"
                    : "h-full lg:aspect-auto"
                }
                index={index}
                visual={visual}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
