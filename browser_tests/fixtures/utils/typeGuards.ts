/**
 * Returns true when `value` is a non-null, non-array object.
 *
 * This is intentionally broad: it accepts any plain object as well as class
 * instances and built-in objects (e.g. `new Map()`).  For JSON-parsed values
 * that distinction is irrelevant because `JSON.parse` only ever produces plain
 * objects.  Callers that must distinguish plain objects from class instances
 * should use `isPlainObject` from `es-toolkit` instead.
 */
export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}
