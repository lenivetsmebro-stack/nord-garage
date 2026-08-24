import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/85 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between">
        <Logo />
        <div className="flex items-center gap-5 xl:gap-8">
          <Navigation />
          <Button className="hidden min-h-10 px-5 lg:inline-flex" href="/#booking-preview">
            Записаться
          </Button>
        </div>
      </Container>
    </header>
  );
}
