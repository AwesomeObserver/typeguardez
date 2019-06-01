/**
 * For every properties K of type T, transform it to U
 *
 * @example
 *
 * ```ts
 * const names = { foo: 'hello', bar: 'world', baz: 'bye' };
 *
 * const lengths = mapObject(names, s => s.length);
 * // { foo: number, bar: number, baz: number }
 * ```
 */
// @ts-ignore
export function mapObject<K extends string, T, U>(
  obj: Record<K, T>,
  f: (x: T) => U,
): Record<K, U>;
