import type { Metadata } from "next";

import { BuilderBadge } from "@/components/builder-badge";
import { InfoItem } from "@/components/info-item";
import { InfoLink } from "@/components/info-link";
import { InfoSection } from "@/components/info-section";
import { PrintDensity } from "@/components/print-density";
import { ProjectCard } from "@/components/project-card";
import { getResumeData } from "@/lib/resume";

export function generateMetadata(): Metadata {
  const resume = getResumeData();

  return {
    title: `${resume.name} - 前端开发实习`,
    description: resume.description,
    robots: {
      index: false,
      follow: false
    }
  };
}

export default function HomePage() {
  const resume = getResumeData();

  return (
    <main className="resume-shell">
      <PrintDensity />
      <BuilderBadge />

      <article className="resume-article">
        <h1 className="resume-title">{resume.name}</h1>
        {resume.headline ? <p className="resume-lead">{resume.headline}</p> : null}

        <ul className="info-list">
          {resume.contacts.map((item) => (
            <InfoItem icon={item.icon} key={`${item.label}-${item.value ?? item.link}`} label={item.label}>
              {item.link ? <InfoLink to={item.link}>{item.display}</InfoLink> : item.value}
              {item.suffix ?? ""}
            </InfoItem>
          ))}
        </ul>

        <InfoSection title={resume.titles.skills}>
          <ul>
            {resume.skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </InfoSection>

        <InfoSection title={resume.titles.internships}>
          {resume.internships.map((project) => (
            <ProjectCard key={`${project.name}-${project.from}`} project={project} />
          ))}
        </InfoSection>

        <InfoSection title={resume.titles.projects}>
          {resume.projects.map((project) => (
            <ProjectCard key={`${project.name}-${project.from}`} project={project} />
          ))}
        </InfoSection>

        <InfoSection title={resume.titles.certificates}>
          <ul>
            {resume.certificates.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </InfoSection>
      </article>
    </main>
  );
}
