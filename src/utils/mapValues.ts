export function mapValues<T extends Record<string, any>, R>(
  obj: T,
  fn: (value: T[keyof T]) => R,
): Record<keyof T, R> {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, fn(v)]),
  ) as Record<keyof T, R>
}
