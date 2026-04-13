const DEFAULT_SITE_URL = "http://localhost:3000/";

function normalizeSiteUrl(input?: string): string {
  if (!input?.trim()) {
    return DEFAULT_SITE_URL;
  }

  const value = input.trim();
  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    const url = new URL(candidate);
    url.search = "";
    url.hash = "";

    if (!url.pathname.endsWith("/")) {
      url.pathname = `${url.pathname}/`;
    }

    return url.toString();
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function getSiteUrl(): string {
  return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL);
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}
