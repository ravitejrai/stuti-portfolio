// Tiny clsx — avoids an extra dependency.
export type ClassValue = string | number | null | false | undefined | ClassValue[] | Record<string, boolean>;

export function clsx(input: ClassValue): string {
  if (!input) return "";
  if (typeof input === "string" || typeof input === "number") return String(input);
  if (Array.isArray(input)) return input.map(clsx).filter(Boolean).join(" ");
  if (typeof input === "object") {
    return Object.entries(input)
      .filter(([, v]) => v)
      .map(([k]) => k)
      .join(" ");
  }
  return "";
}
