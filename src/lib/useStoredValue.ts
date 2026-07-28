"use client";

import { useCallback, useSyncExternalStore } from "react";

/* ═══════════════════════════════════════════════════════════
   localStorage as an external store

   Reading localStorage into useState inside an effect causes a
   cascading re-render and trips React's lint rules. This is the
   sanctioned approach: treat storage as an external store and
   let React subscribe to it.

   getServerSnapshot returns the fallback, so server rendering and
   hydration agree, and React re-renders once with the real value.
   No mismatch warning, and no "mounted" flag needed.
   ═══════════════════════════════════════════════════════════ */

const listeners = new Set<() => void>();
const cache = new Map<string, string | null>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function read(key: string): string | null {
  if (!cache.has(key)) {
    try {
      cache.set(key, localStorage.getItem(key));
    } catch {
      cache.set(key, null); // Safari private mode throws
    }
  }
  return cache.get(key) ?? null;
}

/** Reads and writes a single string in localStorage, reactively. */
export function useStoredValue(
  key: string,
  fallback: string
): [string, (value: string) => void] {
  const value = useSyncExternalStore(
    subscribe,
    () => read(key) ?? fallback,
    () => fallback
  );

  const set = useCallback(
    (next: string) => {
      try {
        localStorage.setItem(key, next);
      } catch {
        /* out of quota or private mode — in-memory still updates */
      }
      cache.set(key, next);
      emit();
    },
    [key]
  );

  return [value, set];
}

/* ── Network status ─────────────────────────────────────── */

function subscribeOnline(listener: () => void): () => void {
  window.addEventListener("online", listener);
  window.addEventListener("offline", listener);
  return () => {
    window.removeEventListener("online", listener);
    window.removeEventListener("offline", listener);
  };
}

/** Live online/offline state. Assumes online during server render. */
export function useOnline(): boolean {
  return useSyncExternalStore(
    subscribeOnline,
    () => navigator.onLine,
    () => true
  );
}
