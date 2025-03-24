import { Slide } from "@/app/animation/Slide";
import Skills from "./Skills";

export default function SkillsComponent() {
  return (
    <section className="pt-20">
      <Slide delay={0.16} className="mb-8">
        <h2 className="font-incognito text-4xl font-bold tracking-tight">
          Skills
        </h2>
      </Slide>

      <Slide delay={0.18}>
        <Skills />
      </Slide>
    </section>
  );
}
