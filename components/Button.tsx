type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
};

export default function Button({ href, children, variant = "primary", className = "", onClick }: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-dark"
      : "border border-ink text-ink hover:bg-ink hover:text-paper";
  return (
    <a href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
