type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
};

export default function Logo({
  className = "",
  variant = "dark",
  showWordmark = true,
}: LogoProps) {
  const ink = variant === "light" ? "#FBFAF7" : "#0A0A0A";
  const muted = variant === "light" ? "rgba(251,250,247,0.5)" : "#6B6B68";

  return (
    <span
      aria-label="CBMS Inc."
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      {/* The mark — a single solid block with a precise ember slit (vent / airflow / heat) */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="0"
          y="0"
          width="32"
          height="32"
          rx="9"
          fill={ink}
          className="transition-transform duration-500 ease-out group-hover:scale-[0.96] origin-center"
          style={{ transformBox: "fill-box" }}
        />
        {/* Ember slit — the only break in the surface */}
        <rect
          x="8"
          y="14.5"
          width="16"
          height="3"
          rx="1.5"
          fill="#F97316"
          className="transition-all duration-500 ease-out group-hover:w-[10] group-hover:[transform:translateX(3px)]"
        />
      </svg>

      {showWordmark && (
        <div className="flex items-baseline gap-1 leading-none select-none">
          <span
            className="font-serif italic text-[26px] tracking-[-0.025em]"
            style={{ color: ink }}
          >
            cbms
          </span>
          <span
            className="font-sans text-[8.5px] font-medium tracking-[0.28em] uppercase translate-y-[-1px]"
            style={{ color: muted }}
          >
            inc
          </span>
        </div>
      )}
    </span>
  );
}
