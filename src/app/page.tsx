import type { Metadata } from "next";

import { BuilderBadge } from "@/components/builder-badge";
import { InfoItem } from "@/components/info-item";
import { InfoLink } from "@/components/info-link";
import { InfoSection } from "@/components/info-section";
import { PrintDensity } from "@/components/print-density";
import { ProjectCard } from "@/components/project-card";
import { FloatingMenu } from "@/components/floating-menu";
import { AnimatedSection } from "@/components/animated-section";
import { getResumeData } from "@/lib/resume";

export function generateMetadata(): Metadata {
  const resume = getResumeData();
  const title = `${resume.name} - 前端开发实习`;
  const description = resume.description;

  return {
    title,
    description,
    alternates: {
      canonical: "/"
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "zh_CN",
      siteName: "Everfu CV",
      url: "/"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
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
        <AnimatedSection delay={0.1}>
          <header className="resume-hero">
            <div className="resume-hero__main">
              <div className="resume-window-bar" aria-hidden="true">
                <span className="resume-window-bar__dot resume-window-bar__dot--red" />
                <span className="resume-window-bar__dot resume-window-bar__dot--yellow" />
                <span className="resume-window-bar__dot resume-window-bar__dot--green" />
                <span className="resume-window-bar__file">Frontend Developer Resume</span>
              </div>
              <h1 className="resume-title">{resume.name}</h1>

              <ul className="info-list">
                {resume.contacts.map((item) => (
                  <InfoItem icon={item.icon} key={`${item.label}-${item.value ?? item.link}`} label={item.label}>
                    {item.link ? <InfoLink to={item.link}>{item.display}</InfoLink> : item.value}
                    {item.suffix ?? ""}
                  </InfoItem>
                ))}
              </ul>
            </div>
          </header>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <InfoSection title={resume.titles.skills}>
            <ul>
              {resume.skills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoSection>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <InfoSection title={resume.titles.internships}>
            {resume.internships.map((project) => (
              <ProjectCard key={`${project.name}-${project.from}`} project={project} />
            ))}
          </InfoSection>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <InfoSection title={resume.titles.projects}>
            {resume.projects.map((project) => (
              <ProjectCard key={`${project.name}-${project.from}`} project={project} />
            ))}
          </InfoSection>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <InfoSection title={resume.titles.certificates}>
            <ul>
              {resume.certificates.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoSection>
        </AnimatedSection>
      </article>

      <FloatingMenu />
    </main>
  );
}
