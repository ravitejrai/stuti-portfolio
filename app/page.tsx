import { Hero } from "@/components/sections/hero";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Process } from "@/components/sections/process";
import { Timeline } from "@/components/sections/timeline";
import { Skills } from "@/components/sections/skills";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Process />
      <Timeline />
      <Skills />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
