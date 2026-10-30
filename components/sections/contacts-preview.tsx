import { contactDetails } from "@/config/contact";
import { Container } from "@/components/ui/container";

const contactItems = [
  {
    href: contactDetails.telegramHref,
    label: "Запись",
    value: "Telegram-бот " + contactDetails.telegramDisplay,
  },
];

export function ContactsPreview() {
  return (
    <section id="contacts" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-subtle">
              09 / Контакты
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
              Связаться с NORD GARAGE
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted">
              Запишитесь через Telegram-бот: он уточнит автомобиль и задачу и передаст заявку мастеру.
            </p>
          </div>

          <div className="order-2 overflow-hidden rounded-card border border-line bg-line">
            <dl className="grid gap-px">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-3 bg-surface px-5 py-5 sm:grid-cols-[9rem_1fr] sm:items-center sm:px-7"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                    {item.label}
                  </dt>
                  <dd>
                    <a
                      className="break-words text-sm font-medium text-foreground transition-colors duration-300 hover:text-muted sm:text-base"
                      href={item.href}
                    >
                      {item.value}
                    </a>
                  </dd>
                </div>
              ))}
              <div className="grid gap-3 bg-surface px-5 py-5 sm:grid-cols-[9rem_1fr] sm:items-center sm:px-7">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                  Режим работы
                </dt>
                <dd className="text-sm font-medium text-foreground sm:text-base">
                  {contactDetails.scheduleDisplay}
                </dd>
              </div>
              <div className="grid gap-3 bg-surface px-5 py-5 sm:grid-cols-[9rem_1fr] sm:items-center sm:px-7">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                  Адрес
                </dt>
                <dd>
                  <span className="text-sm font-medium text-foreground sm:text-base">
                    {contactDetails.addressDisplay}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
