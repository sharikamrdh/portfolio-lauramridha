import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: ReactNode; // ✅ accepte texte OU JSX
  children: ReactNode;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          {title}
        </h2>

        {subtitle && (
          <div className="mt-2 text-white/65">
            {subtitle}
          </div>
        )}
      </div>

      {children}
    </section>
  );
}

