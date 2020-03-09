export function myFilter<T>(arr: T[], predicate: (elm: T) => boolean): T[] {
    const result = [];
    for (const elm of arr) {
      if (predicate(elm)) {
        result.push(elm);
      }
    }
    return result;
}