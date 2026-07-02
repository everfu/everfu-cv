import { iconToSVG, replaceIDs } from "@iconify/utils";
import { ICONS_DATA } from "@/lib/icons-data";

type ResumeIconProps = {
  icon: string;
  className?: string;
};

export function ResumeIcon({ icon, className }: ResumeIconProps) {
  const iconData = ICONS_DATA[icon];

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

