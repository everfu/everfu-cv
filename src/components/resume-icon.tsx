import deviconIcons from "@iconify-json/devicon/icons.json";
import fileIcons from "@iconify-json/file-icons/icons.json";
import logosIcons from "@iconify-json/logos/icons.json";
import riIcons from "@iconify-json/ri/icons.json";
import simpleIcons from "@iconify-json/simple-icons/icons.json";
import skillIcons from "@iconify-json/skill-icons/icons.json";
import unjsIcons from "@iconify-json/unjs/icons.json";
import vscodeIcons from "@iconify-json/vscode-icons/icons.json";
import { getIconData, iconToSVG, replaceIDs, stringToIcon } from "@iconify/utils";

const ICON_SETS = {
  devicon: deviconIcons,
  "file-icons": fileIcons,
  logos: logosIcons,
  ri: riIcons,
  "simple-icons": simpleIcons,
  "skill-icons": skillIcons,
  unjs: unjsIcons,
  "vscode-icons": vscodeIcons
} as const;

type ResumeIconProps = {
  icon: string;
  className?: string;
};

export function ResumeIcon({ icon, className }: ResumeIconProps) {
  const parsed = stringToIcon(icon, true, false);

  if (!parsed || parsed.provider) {
    return <span aria-hidden="true" className={className} />;
  }

  const iconSet = ICON_SETS[parsed.prefix as keyof typeof ICON_SETS];

  if (!iconSet) {
    return <span aria-hidden="true" className={className} />;
  }

  const iconData = getIconData(iconSet, parsed.name);

  if (!iconData) {
    return <span aria-hidden="true" className={className} />;
  }

  const rendered = iconToSVG(iconData, { height: "1em" });

  return (
    <svg
      aria-hidden="true"
      className={className}
      dangerouslySetInnerHTML={{ __html: replaceIDs(rendered.body) }}
      height={rendered.attributes.height}
      viewBox={rendered.attributes.viewBox}
      width={rendered.attributes.width}
      xmlns="http://www.w3.org/2000/svg"
    />
  );
}
