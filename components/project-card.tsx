import { InfoLink } from "@/components/info-link";
import { ResumeIcon } from "@/components/resume-icon";
import { getTechIcon } from "@/lib/icon";
import type { ProjectEntry } from "@/types/resume";

type ProjectCardProps = {
  project: ProjectEntry;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <section className="project-card">
      <div className="project-card__header">
        <span className="project-card__name">{project.name}</span>
        <span className="project-card__desc">
          {project.desc}
          {project.role ? ` · ${project.role}` : ""}
        </span>
        <span className="project-card__date">
          {project.from} - {project.to ?? "至今"}
        </span>
      </div>

      {(project.link || project.techs?.length) && (
        <div className="project-card__meta">
          <span className="project-card__techs">
            {project.techs?.map((tech) => (
              <span className="project-card__tech" key={tech}>
                <ResumeIcon className="resume-icon project-card__tech-icon" icon={getTechIcon(tech)} />
                <span>{tech}</span>
              </span>
            ))}
          </span>

          {project.link ? <InfoLink className="project-card__link" to={project.link} /> : null}
        </div>
      )}

      <ul className="project-card__list">
        {project.bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
