import type { ReactNode } from "react";

type StackSectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function StackSection({
  id,
  children,
  className
}: StackSectionProps) {
  return (
    <section
      id={id}
      className={cx(
        "relative min-h-0 px-4 pb-[calc(3rem+env(safe-area-inset-bottom))] pt-[calc(5.25rem+env(safe-area-inset-top))] sm:px-6 md:min-h-screen md:px-8 md:pb-16 md:pt-28 lg:px-14",
        className
      )}
    >
      {children}
    </section>
  );
}
