import Image from "next/image";
import type { WorkVisual as WorkVisualData } from "@/config/works";

type WorkVisualProps = {
  className?: string;
  index?: number;
  visual: WorkVisualData;
};

const layoutClasses = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[4/5]",
} satisfies Record<WorkVisualData["layout"], string>;

export function WorkVisual({
  className = "",
  index,
  visual,
}: WorkVisualProps) {
  return (
    <div
      className={`group relative min-w-0 overflow-hidden rounded-card border border-line bg-surface ${layoutClasses[visual.layout]} ${className}`}
    >
      <Image
        alt={visual.alt}
        className={`object-cover transition-transform duration-500 group-hover:scale-[1.015] ${visual.objectPosition}`}
        fill
        sizes={visual.sizes}
        src={visual.src}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5"
      />
      {index === undefined ? null : (
        <span
          aria-hidden="true"
          className="absolute bottom-4 right-4 text-[0.65rem] font-semibold tracking-[0.2em] text-white/55 sm:bottom-5 sm:right-5"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
    </div>
  );
}
