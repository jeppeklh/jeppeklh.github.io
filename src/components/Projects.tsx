import { useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { getProjects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../i18n/translations";

export default function Projects() {
  const { language } = useLanguage();
  const projects = useMemo(() => getProjects(language), [language]);
  const text = uiText.projectsSection[language];

  return (
    <section id="projects" className="mb-5" data-aos="fade-up">
      <h2 className="mb-4 border-bottom pb-2 text-white">{text.heading}</h2>

      <div className="masonry">
        {projects.map((project) => (
          <div key={project.title} className="masonry-item">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
