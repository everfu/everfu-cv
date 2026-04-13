import { ResumeIcon } from "@/components/resume-icon";

type InfoItemProps = {
  icon: string;
  label: string;
  children: React.ReactNode;
};

export function InfoItem({ icon, label, children }: InfoItemProps) {
  return (
    <li className="info-item">
      <ResumeIcon className="resume-icon info-item__icon" icon={icon} />
      <span className="info-item__label">{label}：</span>
      <span className="info-item__content">{children}</span>
    </li>
  );
}
