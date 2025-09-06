import type { Project } from "../types/project";
import { SHIELDS } from "../utils/badges";
import { Link } from "react-router-dom";

type Props = Pick<
  Project,
  "title" | "description" | "tech" | "links" | "videoSrc"
>;

export default function ProjectCard({
  title,
  description,
  tech = [],
  links = [],
  videoSrc,
}: Props) {
  return (
    <div className="card shadow-sm border border-danger dark-card">
      <div className="card-body">
        <h3 className="card-title h5">{title}</h3>
        <p className="card-text">{description}</p>

        <div className="mb-3 tech-shields">
          {tech.map((t) => {
            const key = t.trim();
            const url = SHIELDS[key];
            return url ? (
              <img
                key={key}
                src={url}
                alt={key}
                className="tech-shield"
                loading="lazy"
              />
            ) : (
              <span key={key} className="badge bg-secondary me-1 mb-1">
                {key}
              </span>
            );
          })}
        </div>

        {videoSrc && (
          <div className="video-wrapper mb-3">
            <video
              className="w-100 rounded-3 shadow"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src={videoSrc} type="video/mp4" />
              Din browser understøtter ikke videoafspilleren.
            </video>
          </div>
        )}

        <div className="d-flex flex-wrap gap-2">
          {links.map((l) => {
            const isInternal = l.href.startsWith("/");
            return isInternal ? (
              <Link key={l.href} to={l.href} className="btn btn-primary btn-sm">
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noopener"
              >
                {l.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
