export function hasPropertyWithKey<TKey extends string>(
  obj: unknown,
  key: TKey
): obj is Record<TKey, string> {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    key in obj &&
    typeof (obj as Record<string, unknown>)[key] === 'string'
  );
}
