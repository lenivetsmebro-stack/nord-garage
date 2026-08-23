import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const galleryImages = [
  {
    alt: "Чёрный BMW в пространстве автосервиса",
    className:
      "aspect-[4/5] md:col-span-2 md:aspect-[16/10] lg:col-span-1 lg:row-span-2 lg:aspect-auto",
    imageClassName: "object-cover object-[52%_54%] md:object-[50%_62%]",
    sizes: "(min-width: 1024px) 58vw, (min-width: 768px) 100vw, 100vw",
    src: "/images/works/nord-garage-bmw.png",
  },
  {
    alt: "Тормозная система автомобиля крупным планом",
    className: "aspect-[4/3] lg:aspect-auto",
    imageClassName: "object-cover object-center",
    sizes: "(min-width: 1024px) 38vw, (min-width: 768px) 50vw, 100vw",
    src: "/images/works/nord-garage-brakes.png",
  },
  {
    alt: "Механик работает в моторном отсеке автомобиля",
    className: "aspect-[4/3] lg:aspect-auto",
    imageClassName: "object-cover object-[48%_center]",
    sizes: "(min-width: 1024px) 38vw, (min-width: 768px) 50vw, 100vw",
    src: "/images/works/nord-garage-mechanic.png",
  },
];

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
          {galleryImages.map((image, index) => (
            <li
              key={image.src}
              className={`group relative min-w-0 overflow-hidden rounded-card border border-line bg-surface ${image.className}`}
            >
              <Image
                alt={image.alt}
                className={`transition-transform duration-500 group-hover:scale-[1.015] ${image.imageClassName}`}
                fill
                sizes={image.sizes}
                src={image.src}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-4 right-4 text-[0.65rem] font-semibold tracking-[0.2em] text-white/55 sm:bottom-5 sm:right-5"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
