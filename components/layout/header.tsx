import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/85 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between">
        <Logo />
        <Navigation />
      </Container>
    </header>
  );
}
