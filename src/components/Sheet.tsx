"use client";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════
   SHEET

   Bottom sheet below lg, centred dialog above it.

   The bottom sheet is the strongest pattern on a phone — it rises
   into thumb reach, dismisses with a downward flick, and never
   hides the page behind it. On a desktop the same content wants to
   be a normal dialog, so this component is both.
   ═══════════════════════════════════════════════════════════ */

export default function Sheet({
  open,
  onClose,
  title,
  children,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  const [dy, setDy] = useState(0);
  const [dragging, setDragging] = useState(false);
  const start = useRef<number | null>(null);

  // Escape closes; body scroll locked while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 lg:items-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: dy ? `translateY(${dy}px)` : undefined,
          transition: dragging ? "none" : "transform .2s ease-out",
        }}
        className="flex max-h-[92dvh] w-full flex-col rounded-t-modal bg-surface shadow-modal lg:max-h-[86dvh] lg:max-w-lg lg:rounded-modal"
      >
        {/* Grab handle — phones only, where dragging to dismiss applies */}
        <div
          onPointerDown={(e) => {
            start.current = e.clientY;
            setDragging(true);
            e.currentTarget.setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => {
            if (start.current === null) return;
            setDy(Math.max(0, e.clientY - start.current));
          }}
          onPointerUp={() => {
            if (dy > 90) onClose();
            setDy(0);
            start.current = null;
            setDragging(false);
          }}
          style={{ touchAction: "none" }}
          className="flex shrink-0 cursor-grab justify-center py-3 active:cursor-grabbing lg:hidden"
        >
          <div className="h-1.5 w-10 rounded-full bg-line" />
        </div>

        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-line px-5 pb-3 pt-1 lg:pt-4">
          <h2 className="truncate text-base font-semibold text-text">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control text-text-muted hover:bg-surface-alt hover:text-text"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">{children}</div>

        {footer && (
          <div className="shrink-0 border-t border-line px-5 py-3 pb-safe lg:pb-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
