import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mb-5" data-aos="fade-up">
      <h2 className="mb-4 border-bottom pb-2 text-white">Projekter</h2>

      {/* Masonry container replaces the bootstrap row */}
      <div className="masonry">
        {projects.map((p) => (
          <div key={p.title} className="masonry-item">
            <ProjectCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}
