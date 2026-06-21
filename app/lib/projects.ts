// Projects are managed by TinaCMS in content/projects/index.json.
import data from "../../content/projects/index.json";

export type Project = {
  title: string;
  meta: string; // network · year
  role: string; // Seitzman's verified role
  copy: string;
  poster: string;
  alt: string;
  href?: string; // official watch page or trailer
  cta?: string; // "Watch" | "Trailer"
};

export const projects: Project[] = (data.items as Project[]).map((p) => ({
  ...p,
  href: p.href || undefined,
  cta: p.cta || undefined,
}));
