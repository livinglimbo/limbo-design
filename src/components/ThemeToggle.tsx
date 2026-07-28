"use client";

import { useStoredValue } from "../lib/useStoredValue";

export type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "limbo-theme";

/**
 * Applies a theme by setting (or removing) data-theme on <html>.
 * "system" removes the attribute entirely, which lets the
 * prefers-color-scheme media query in globals.css take over.
 */
export function applyTheme(theme: Theme) {
  const html = document.documentElement;
  if (theme === "system") {
    html.removeAttribute("data-theme");
  } else {
    html.setAttribute("data-theme", theme);
  }
}

const OPTIONS: { value: Theme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

export default function ThemeToggle() {
  /* The inline script in layout.tsx has already applied the stored
     theme before first paint, so this only needs to reflect it. */
  const [stored, setStored] = useStoredValue(STORAGE_KEY, "system");
  const theme = (stored as Theme) ?? "system";

  function choose(next: Theme) {
    setStored(next);
    applyTheme(next);
  }

  return (
    <div
      role="group"
      aria-label="Appearance"
      className="inline-flex gap-1 rounded-control border border-line bg-surface p-1"
    >
      {OPTIONS.map((opt) => {
        const active = theme === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => choose(opt.value)}
            aria-pressed={active}
            className={[
              // 44px minimum touch target for iPad
              "min-h-[44px] rounded-chip px-4 text-sm font-semibold transition-colors",
              active
                ? "bg-accent text-accent-fg"
                : "text-text-muted hover:bg-surface-alt hover:text-text",
            ].join(" ")}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
