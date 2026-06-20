import HeroVideo from "./components/HeroVideo";
import StudioSection from "./components/StudioSection";
import ProjectsSection from "./components/ProjectsSection";
import NewsSection from "./components/NewsSection";
import FounderSection from "./components/FounderSection";
import ClosingCTA from "./components/ClosingCTA";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--color-bg)" }}>
      <HeroVideo />
      <StudioSection />
      <ProjectsSection
        limit={4}
        heading="Selected film and television."
        showViewAll
      />
      <NewsSection limit={3} showViewAll />
      <FounderSection />
      <ClosingCTA />
    </main>
  );
}
