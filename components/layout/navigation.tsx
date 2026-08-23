import Link from "next/link";

const navigation = [
  { href: "/", label: "Главная" },
  { href: "/#directions", label: "Направления" },
  { href: "/#specialization", label: "Специализация" },
];

const linkClasses =
  "text-sm text-muted transition-colors duration-300 hover:text-foreground";

export function Navigation() {
  return (
    <>
      <nav aria-label="Основная навигация" className="hidden md:block">
        <ul className="flex items-center gap-7">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link className={linkClasses} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <details className="group relative md:hidden">
        <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-full border border-line px-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
          Меню
        </summary>
        <nav
          aria-label="Мобильная навигация"
          className="absolute right-0 top-[calc(100%+0.75rem)] w-64 rounded-2xl border border-line bg-surface-elevated p-2 shadow-2xl shadow-black/30"
        >
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="block rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </details>
    </>
  );
}
