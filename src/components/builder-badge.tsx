import { ResumeIcon } from "./resume-icon"

export function BuilderBadge() {
  return (
    <a
      className="builder-badge"
      href="https://github.com/vercel/next.js"
      rel="noreferrer"
      target="_blank"
    >
      <span>Built with</span>
      <ResumeIcon className="builder-badge__icon" icon="simple-icons:nextdotjs" />
    </a>
  );
}
