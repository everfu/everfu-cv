import type { Tech } from "@/lib/icon";

export type SectionTitles = {
  skills: string;
  internships: string;
  projects: string;
  certificates: string;
};

export type ContactItem = {
  icon: string;
  label: string;
  value?: string;
  link?: string;
  display?: string;
  suffix?: string;
};

export type ProjectEntry = {
  name: string;
  desc: string;
  role?: string;
  from: string;
  to?: string;
  link?: string;
  techs?: Tech[];
  bullets: string[];
};

export type ResumeData = {
  name: string;
  description: string;
  headline: string;
  titles: SectionTitles;
  contacts: ContactItem[];
  skills: string[];
  internships: ProjectEntry[];
  projects: ProjectEntry[];
  certificates: string[];
};
