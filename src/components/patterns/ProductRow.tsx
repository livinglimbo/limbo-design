"use client";

/* ═══════════════════════════════════════════════════════════
   PRODUCT ROW — decoupled

   Same markup as the real component in the app, with the data
   layer removed: the app version computes cost from product
   fields, this one takes the formatted label as a prop.

   Rows rather than cards is deliberate. With 314 products,
   rows scan far better and fit more on screen without feeling
   cramped. Card grids look nicer in a screenshot and are worse
   to use at that length.
   ═══════════════════════════════════════════════════════════ */

export interface ProductRowProps {
  name: string;
  /** Display unit, e.g. "750 ml · Bottle" */
  unit: string;
  price: number;
  /** Formatted cost, e.g. "$1.42/oz". Null when it can't be computed. */
  costLabel?: string | null;
  /** Why no cost — shown as a tooltip rather than an unexplained dash. */
  costReason?: string;
  useCount?: number;
  hasLink?: boolean;
  onEdit?: () => void;
}

export default function ProductRow({
  name,
  unit,
  price,
  costLabel,
  costReason,
  useCount = 0,
  hasLink = false,
  onEdit,
}: ProductRowProps) {
  return (
    <button
      type="button"
      onClick={onEdit}
      className="flex w-full items-center gap-3 border-b border-line-subtle px-4 py-3 text-left transition-colors last:border-0 hover:bg-surface-alt active:bg-surface-alt"
    >
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold text-text">
          {name || "(no name)"}
        </div>
        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-muted">
          <span className="truncate">{unit || "—"}</span>

          <span className="text-text-faint">·</span>
          {costLabel ? (
            <span className="text-text-secondary">{costLabel}</span>
          ) : (
            <span className="text-text-faint" title={costReason}>
              no cost
            </span>
          )}

          {useCount > 0 && (
            <>
              <span className="text-text-faint">·</span>
              <span>used {useCount}×</span>
            </>
          )}
        </div>
      </div>

      <div className="shrink-0 text-right">
        <div className="text-sm font-semibold text-text">${price.toFixed(2)}</div>
        {hasLink && <div className="mt-0.5 text-[11px] text-accent">link</div>}
      </div>
    </button>
  );
}
