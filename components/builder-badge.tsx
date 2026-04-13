export function BuilderBadge() {
  return (
    <a
      className="builder-badge"
      href="https://github.com/vercel/next.js"
      rel="noreferrer"
      target="_blank"
    >
      <span>Built with</span>
      <svg
        aria-label="Next.js"
        fill="currentColor"
        height="1em"
        viewBox="0 0 180 180"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M90 0C40.294 0 0 40.294 0 90s40.294 90 90 90 90-40.294 90-90S139.706 0 90 0Zm0 167.143c-42.575 0-77.143-34.568-77.143-77.143S47.425 12.857 90 12.857 167.143 47.425 167.143 90 132.575 167.143 90 167.143Z" />
        <path d="M60.739 50.561v77.367h11.393V73.37l42.841 54.558h4.288V50.561h-11.393v54.259L65.027 50.561h-4.288Z" />
      </svg>
      <span>Next.js</span>
    </a>
  );
}
