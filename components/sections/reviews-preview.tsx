import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ReviewsPreview() {
  return (
    <section id="reviews" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          description="Мы не публикуем вымышленные отзывы. Секция готова к размещению подтверждённой обратной связи клиентов."
          eyebrow="Отзывы"
          title="Здесь появятся реальные мнения клиентов"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {["Отзыв клиента", "Отзыв клиента"].map((label, index) => (
            <div
              key={`${label}-${index}`}
              className="min-h-56 rounded-card border border-dashed border-line bg-surface/60 p-6 sm:p-7"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-subtle">
                Placeholder
              </span>
              <p className="mt-16 text-base font-medium text-muted">{label}</p>
              <p className="mt-2 text-sm leading-6 text-subtle">
                Будет заменён реальным текстом после получения материалов.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
