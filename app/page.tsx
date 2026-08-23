import { About } from "@/components/sections/about";
import { Advantages } from "@/components/sections/advantages";
import { BookingCta } from "@/components/sections/booking-cta";
import { ContactsPreview } from "@/components/sections/contacts-preview";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Specialization } from "@/components/sections/specialization";
import { WorksPreview } from "@/components/sections/works-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialization />
      <Services />
      <Advantages />
      <WorksPreview />
      <About />
      <BookingCta />
      <ContactsPreview />
    </>
  );
}
