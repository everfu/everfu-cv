type InfoSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function InfoSection({ title, children }: InfoSectionProps) {
  return (
    <section className="info-section">
      <h2 className="info-section__title">{title}</h2>
      {children}
    </section>
  );
}
