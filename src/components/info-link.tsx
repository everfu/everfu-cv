import Link from "next/link";

import { isExternalLink, trimLink } from "@/lib/link";

type InfoLinkProps = {
  to: string;
  children?: React.ReactNode;
  className?: string;
};

export function InfoLink({ to, children, className }: InfoLinkProps) {
  const content = children ?? trimLink(to);
  const classes = ["info-link", className].filter(Boolean).join(" ");

  if (isExternalLink(to)) {
    return (
      <a className={classes} href={to} rel="noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={to}>
      {content}
    </Link>
  );
}
