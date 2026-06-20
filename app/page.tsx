import HeroVideo from "./components/HeroVideo";
import StudioSection from "./components/StudioSection";
import ProjectsSection from "./components/ProjectsSection";
import RangeSection from "./components/RangeSection";
import FounderSection from "./components/FounderSection";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--color-bg)" }}>
      <HeroVideo />
      <StudioSection />
      <ProjectsSection />
      <RangeSection />
      <FounderSection />
      <ClosingCTA />
    </main>
  );
}
