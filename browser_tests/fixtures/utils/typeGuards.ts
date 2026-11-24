/**
 * Returns true when `value` is a non-null object whose keys are strings,
 * narrowing it to `Record<string, unknown>` without a type assertion.
 */
export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}
