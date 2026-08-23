export type WorkVisualLayout = "portrait" | "landscape";

export type WorkVisual = {
  alt: string;
  layout: WorkVisualLayout;
  objectPosition: string;
  sizes: string;
  src: string;
};

export const workVisuals: readonly WorkVisual[] = [
  {
    src: "/images/works/nord-garage-bmw.png",
    alt: "Чёрный автомобиль в пространстве автосервиса",
    objectPosition: "object-[52%_54%] md:object-[50%_62%]",
    sizes: "(min-width: 1024px) 58vw, (min-width: 768px) 100vw, 100vw",
    layout: "portrait",
  },
  {
    src: "/images/works/nord-garage-brakes.png",
    alt: "Тормозная система автомобиля крупным планом",
    objectPosition: "object-center",
    sizes: "(min-width: 1024px) 38vw, (min-width: 768px) 50vw, 100vw",
    layout: "landscape",
  },
  {
    src: "/images/works/nord-garage-mechanic.png",
    alt: "Механик работает в моторном отсеке автомобиля",
    objectPosition: "object-[48%_center]",
    sizes: "(min-width: 1024px) 38vw, (min-width: 768px) 50vw, 100vw",
    layout: "landscape",
  },
];
