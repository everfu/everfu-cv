export function isExternalLink(link?: string) {
  if (!link) {
    return false;
  }

  return link.includes(":");
}

export function trimLink(link?: string) {
  if (!link) {
    return "";
  }

  return link.replace(/^(https?:\/\/(www\.)?|mailto:)/, "").replace(/\/$/, "");
}
