"use client";

import { useState } from "react";
import Sheet from "../components/Sheet";
import ThemeToggle from "../components/ThemeToggle";
import ProductRow from "../components/patterns/ProductRow";

/* ═══════════════════════════════════════════════════════════
   STYLE GUIDE — every pattern in one file

   The fastest way to read this design system. Real class strings,
   real components, both themes. Nothing here is illustrative —
   it's the same markup the product uses.
   ═══════════════════════════════════════════════════════════ */

const SAMPLE = [
  {
    name: "Empress Gin",
    unit: "750 ml · Bottle",
    price: 35.99,
    costLabel: "$1.42/oz",
    useCount: 0,
    hasLink: true,
  },
  {
    name: "Luxardo Maraschino",
    unit: "750 ml · Bottle",
    price: 37.99,
    costLabel: "$1.50/oz",
    useCount: 4,
  },
  {
    name: "Disposable Highballs",
    unit: "24 / pk",
    price: 12.0,
    costLabel: null,
    costReason: 'Unit "/pk" isn\'t recognised',
    useCount: 11,
  },
];

function Section({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-1 text-xs font-bold uppercase tracking-[0.09em] text-gold">
        {title}
      </h2>
      {hint && <p className="mb-4 font-mono text-xs text-text-faint">{hint}</p>}
      {!hint && <div className="mb-4" />}
      {children}
    </section>
  );
}

function Swatch({
  name,
  varName,
  className,
}: {
  name: string;
  varName: string;
  className: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`h-12 w-12 shrink-0 rounded-control border border-line ${className}`}
      />
      <div className="min-w-0">
        <div className="text-sm font-semibold text-text">{name}</div>
        <div className="truncate font-mono text-xs text-text-muted">{varName}</div>
      </div>
    </div>
  );
}

export default function StyleGuide() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="min-h-full bg-bg">
      {/* App header — the solid green chrome */}
      <header className="bg-accent-surface px-6 py-4 text-accent-surface-fg">
        <div className="font-display text-4xl leading-none">Limbo</div>
        <div className="mt-0.5 text-[10px] uppercase tracking-[0.16em] opacity-60">
          Mixology
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        <Section title="Appearance" hint="Light / Dark / System">
          <ThemeToggle />
        </Section>

        <Section title="Typography" hint="Eyesome display · Radley body">
          <div className="rounded-card border border-line bg-surface p-6 shadow-card">
            <p className="font-display text-5xl leading-tight text-text">
              Limbo Mixology
            </p>
            <p className="font-display text-3xl leading-tight text-accent">
              Smoked Old Fashioned
            </p>
            <hr className="my-6 border-line-subtle" />
            <p className="max-w-prose text-base text-text">
              Two ounces rye, quarter ounce demerara, two dashes aromatic
              bitters. Stirred over a single large cube, expressed orange peel.
            </p>
            <p className="mt-2 text-sm text-text-secondary">Secondary copy.</p>
            <p className="mt-2 text-sm text-text-muted">Muted metadata.</p>
            <p className="mt-2 text-sm text-text-faint">Faint placeholder.</p>
          </div>
        </Section>

        <Section title="Brand" hint="--accent · --gold">
          <div className="grid gap-4 sm:grid-cols-2">
            <Swatch name="Accent" varName="--accent" className="bg-accent" />
            <Swatch
              name="Accent surface"
              varName="--accent-surface"
              className="bg-accent-surface"
            />
            <Swatch name="Gold" varName="--gold" className="bg-gold" />
            <Swatch name="Success" varName="--success" className="bg-success" />
          </div>
        </Section>

        <Section title="Surfaces" hint="never pure white, never pure black">
          <div className="grid gap-4 sm:grid-cols-2">
            <Swatch name="Page" varName="--bg" className="bg-bg" />
            <Swatch name="Surface" varName="--surface" className="bg-surface" />
            <Swatch
              name="Surface alt"
              varName="--surface-alt"
              className="bg-surface-alt"
            />
            <Swatch
              name="Surface sunken"
              varName="--surface-sunken"
              className="bg-surface-sunken"
            />
          </div>
        </Section>

        <Section
          title="Corner radius"
          hint="semantic by role — chip · control · card · modal"
        >
          <div className="flex flex-wrap gap-4">
            {[
              { cls: "rounded-chip", label: "chip" },
              { cls: "rounded-control", label: "control" },
              { cls: "rounded-card", label: "card" },
              { cls: "rounded-modal", label: "modal" },
            ].map((r) => (
              <div key={r.cls} className="text-center">
                <div
                  className={`h-20 w-20 border border-line bg-surface shadow-card ${r.cls}`}
                />
                <div className="mt-2 text-xs font-semibold text-text">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Elevation" hint="deepens automatically in dark mode">
          <div className="flex flex-wrap gap-6">
            {["shadow-card", "shadow-panel", "shadow-popover", "shadow-modal"].map(
              (s) => (
                <div key={s} className="text-center">
                  <div className={`h-20 w-20 rounded-card bg-surface ${s}`} />
                  <div className="mt-2 text-xs font-semibold text-text">
                    {s.replace("shadow-", "")}
                  </div>
                </div>
              )
            )}
          </div>
        </Section>

        <Section title="Buttons" hint="44px minimum, always">
          <div className="flex flex-wrap gap-3">
            <button className="min-h-[44px] rounded-control bg-accent px-5 font-semibold text-accent-fg transition-colors hover:bg-accent-hover">
              Primary
            </button>
            <button className="min-h-[44px] rounded-control border border-line bg-surface px-5 font-semibold text-text transition-colors hover:bg-surface-alt">
              Secondary
            </button>
            <button className="min-h-[44px] rounded-control border border-line bg-transparent px-5 font-semibold text-text-secondary transition-colors hover:bg-surface-alt">
              Ghost
            </button>
            <button className="min-h-[44px] rounded-control border border-danger/30 bg-surface px-5 font-semibold text-danger transition-colors hover:bg-danger-bg">
              Destructive
            </button>
          </div>
        </Section>

        <Section title="Inputs and chips">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-card border border-line bg-surface p-4 shadow-card">
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-text-muted">
                Search
              </label>
              <input
                type="text"
                placeholder="Search items…"
                className="min-h-[48px] w-full rounded-control border border-line bg-surface px-3 text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-chip border border-warning-border bg-warning-bg px-2.5 py-1 text-xs font-semibold text-warning">
                  Draft
                </span>
                <span className="rounded-chip bg-accent px-2.5 py-1 text-xs font-semibold text-accent-fg">
                  Complete
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-chip border border-line px-2.5 py-1 text-xs font-semibold text-text-muted">
                  <span className="h-2 w-2 rounded-full bg-success" />
                  Saved
                </span>
              </div>
            </div>

            <div className="rounded-card border border-line bg-surface p-4 shadow-card">
              <div className="mb-3 text-xs font-bold uppercase tracking-wider text-text-muted">
                Filter chips
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button className="min-h-[36px] rounded-chip border border-accent bg-accent px-3 text-xs font-semibold text-accent-fg">
                  All
                </button>
                {["Spirits", "Wine & Beer", "Consumables"].map((c) => (
                  <button
                    key={c}
                    className="min-h-[36px] rounded-chip border border-line bg-surface px-3 text-xs font-semibold text-text-secondary hover:bg-surface-alt"
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="rounded-chip bg-accent/12 px-2 py-1 text-xs font-semibold text-accent">
                  Spirits
                </span>
                <span className="rounded-chip bg-gold/15 px-2 py-1 text-xs font-semibold text-gold">
                  House Staple
                </span>
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="List rows"
          hint="rows, not a card grid — 314 items scan better this way"
        >
          <div className="overflow-hidden rounded-card border border-line bg-surface shadow-card">
            {SAMPLE.map((p) => (
              <ProductRow key={p.name} {...p} onEdit={() => setSheetOpen(true)} />
            ))}
          </div>
          <p className="mt-3 text-sm text-text-muted">
            The third row shows the no-cost state, which explains itself on
            hover rather than showing an unexplained dash.
          </p>
        </Section>

        <Section
          title="Sheet"
          hint="bottom sheet below 1024px, centred dialog above"
        >
          <button
            onClick={() => setSheetOpen(true)}
            className="min-h-[44px] rounded-control bg-accent px-5 font-semibold text-accent-fg"
          >
            Open sheet
          </button>
        </Section>

        <Sheet
          open={sheetOpen}
          onClose={() => setSheetOpen(false)}
          title="Empress Gin"
          footer={
            <button
              onClick={() => setSheetOpen(false)}
              className="min-h-[48px] w-full rounded-control bg-accent px-5 font-semibold text-accent-fg"
            >
              Save
            </button>
          }
        >
          <div className="space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-text-muted">
                Name
              </span>
              <input
                defaultValue="Empress Gin"
                className="min-h-[48px] w-full rounded-control border border-line bg-surface px-3 text-text focus:border-accent focus:outline-none"
              />
            </label>
            <div className="rounded-card border border-line bg-surface-alt p-3">
              <div className="mb-3 text-xs font-bold uppercase tracking-wider text-text-muted">
                Package contents
              </div>
              <div className="flex flex-wrap items-center gap-x-3 text-sm">
                <span className="text-text-muted">Displays as</span>
                <span className="font-semibold text-text">750 ml · Bottle</span>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 text-sm">
                <span className="text-text-muted">Cost</span>
                <span className="font-semibold text-accent">$1.42/oz</span>
              </div>
            </div>
          </div>
        </Sheet>

        <p className="border-t border-line-subtle pt-6 text-sm text-text-faint">
          Every pattern above is live in the product. See DESIGN.md for the
          rules behind them.
        </p>
      </main>
    </div>
  );
}
